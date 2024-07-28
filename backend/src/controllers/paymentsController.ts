import { Request, Response } from "express";
import axios from "axios";
import CryptoJS from "crypto-js";
import moment from "moment";
import dotenv from "dotenv";
import qs from "qs";
import { IPayments } from "../types/interface";
// Load environment variables
dotenv.config();

interface ICreateStatusResult {
  return_code: number;
  return_message: string;
}

// Configuration for ZaloPay
const config = {
  appid: process.env.ZALOPAY_APPID!,
  key1: process.env.ZALOPAY_KEY1!,
  key2: process.env.ZALOPAY_KEY2!,
  endpoint: process.env.ZALOPAY_ENDPOINT!,
};

export const createOrder = async (req: Request, res: Response) => {
  const embed_data = {
    redirecturl: "http://localhost:3000", // Redirect URL after payment
  };

  const items = [{}];

  // Generate a unique transaction ID
  const transID = Math.floor(Math.random() * 1000000);

  const order: IPayments = {
    app_id: config.appid,
    app_trans_id: `${moment().format("YYMMDD")}_${transID}`,
    app_user: "user123",
    app_time: Date.now(),
    amount: 50000,
    item: JSON.stringify(items),
    description: `Payment for the order #${transID}`,
    embed_data: JSON.stringify(embed_data),
    bank_code: "",
    callback_url:
      "https://0f7c-2402-800-6296-778a-9a5-c2c2-6edf-c142.ngrok-free.app",
  };

  // Generate HMAC signature for the order
  const data =
    config.appid +
    "|" +
    order.app_trans_id +
    "|" +
    order.app_user +
    "|" +
    order.amount +
    "|" +
    order.app_time +
    "|" +
    order.embed_data +
    "|" +
    order.item;
  order.mac = CryptoJS.HmacSHA256(data, config.key1).toString();

  try {
    // Send a POST request to ZaloPay endpoint with order details
    const result = await axios.post(config.endpoint, null, { params: order });

    // Return the response data to the client
    return res.status(200).json(result.data);
  } catch (error) {
    console.log(error);
  }
};

export const createStatus = async (req: Request, res: Response) => {
  let result: ICreateStatusResult = {
    return_code: 0,
    return_message: "",
  };

  try {
    let dataStr = req.body.data; // Data from the callback
    let reqMac = req.body.mac; // HMAC signature from the callback

    // Generate HMAC signature to verify the callback
    let mac = CryptoJS.HmacSHA256(dataStr, config.key2).toString();
    console.log("mac =", mac);

    // Check if the callback is valid (from ZaloPay server)
    if (reqMac !== mac) {
      // Invalid callback
      result.return_code = -1;
      result.return_message = "mac not equal";
    } else {
      // Payment success
      // Update the order status
      let dataJson = JSON.parse(dataStr);
      console.log(
        "update order's status = success where app_trans_id =",
        dataJson["app_trans_id"]
      );

      result.return_code = 1;
      result.return_message = "success";
    }
  } catch (ex) {
    if (ex instanceof Error) {
      result.return_code = 0;
      result.return_message = ex.message;
    } else {
      result.return_code = 0;
      result.return_message = "Unknown error";
    }
  }

  // Send the result back to ZaloPay server
  res.json(result);
};

export const orderStatus = async (req: Request, res: Response) => {
  const { app_trans_id } = req.body;

  let postData: { app_id: string; app_trans_id: string; mac?: string } = {
    app_id: config.appid,
    app_trans_id,
  };

  let data = postData.app_id + "|" + postData.app_trans_id + "|" + config.key1; // app_id|app_trans_id|key1
  postData.mac = CryptoJS.HmacSHA256(data, config.key1).toString();

  let postConfig = {
    method: "post",
    url: "https://sb-openapi.zalopay.vn/v2/query",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: qs.stringify(postData),
  };

  try {
    const result = await axios(postConfig);
    console.log(result.data);
    return res.status(200).json(result.data);
  } catch (error) {
    console.log("lỗi");
    console.log(error);
    res.status(500).send("Error checking status");
  }
};
