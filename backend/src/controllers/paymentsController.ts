import { Request, Response } from "express";
import axios from "axios";
import CryptoJS from "crypto-js";
import { v1 as uuidv1 } from "uuid";
import moment from "moment";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

interface IOrder {
  appid: string;
  apptransid: string;
  appuser: string;
  apptime: number;
  item: string;
  embeddata: string;
  amount: number;
  description: string;
  bankcode: string;
  callback_url: string;
  mac?: string; // Optional property for HMAC signature
}

interface ICreateStatusResult {
  returncode: number;
  returnmessage: string;
}

//APP INFOR
const config = {
  appid: process.env.ZALOPAY_APPID!,
  key1: process.env.ZALOPAY_KEY1!,
  key2: process.env.ZALOPAY_KEY2!,
  endpoint: process.env.ZALOPAY_ENDPOINT!,
};

export const createOrder = async (req: Request, res: Response) => {
  const embeddata = {
    redirecturl: "http://localhost:3000",
  };

  const items = [{}];

  const order: IOrder = {
    appid: config.appid,
    apptransid: `${moment().format("YYMMDD")}_${uuidv1()}`,
    appuser: "demo",
    apptime: Date.now(),
    item: JSON.stringify(items),
    embeddata: JSON.stringify(embeddata),
    amount: 50000,
    description: `Payment for the order #_${uuidv1()}`,
    bankcode: "",
    //khi thanh toán xong, zalopay server sẽ POST đến url này để thông báo cho server của mình
    //Chú ý: cần dùng ngrok để public url thì Zalopay Server mới call đến được
    callback_url:
      "https://0f7c-2402-800-6296-778a-9a5-c2c2-6edf-c142.ngrok-free.app",
  };

  // appid|app_trans_id|appuser|amount|apptime|embeddata|item
  const data =
    config.appid +
    "|" +
    order.apptransid +
    "|" +
    order.appuser +
    "|" +
    order.amount +
    "|" +
    order.apptime +
    "|" +
    order.embeddata +
    "|" +
    order.item;
  order.mac = CryptoJS.HmacSHA256(data, config.key1).toString();

  try {
    const result = await axios.post(config.endpoint, null, { params: order });

    return res.status(200).json(result.data);
  } catch (error) {
    console.log(error);
  }
};

export const createStatus = (req: Request, res: Response) => {
  let result: ICreateStatusResult = {
    returncode: 0,
    returnmessage: "",
  };

  try {
    let dataStr = req.body.data;
    let reqMac = req.body.mac;

    let mac = CryptoJS.HmacSHA256(dataStr, config.key2).toString();
    console.log("mac =", mac);

    // kiểm tra callback hợp lệ (đến từ ZaloPay server)
    if (reqMac !== mac) {
      // callback không hợp lệ
      result.returncode = -1;
      result.returnmessage = "mac not equal";
    } else {
      // thanh toán thành công
      // merchant cập nhật trạng thái cho đơn hàng
      // let dataJson = JSON.parse(dataStr, config.key2);
      let dataJson = JSON.parse(dataStr);
      console.log(
        "update order's status = success where apptransid =",
        dataJson["apptransid"]
      );

      result.returncode = 1;
      result.returnmessage = "success";
    }
  } catch (ex) {
    if (ex instanceof Error) {
      result.returncode = 0;
      result.returnmessage = ex.message;
    } else {
      result.returncode = 0;
      result.returnmessage = "Unknown error";
    }
  }

  // thông báo kết quả cho ZaloPay server
  res.json(result);
};
