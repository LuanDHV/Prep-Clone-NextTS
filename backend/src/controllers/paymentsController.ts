import { Request, Response } from "express";
import crypto from "crypto";
import qs from "qs";
import moment from "moment";

export const createPaymentUrl = async (req: Request, res: Response) => {
  const ipAddr =
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    (req.connection as any).socket.remoteAddress;

  const tmnCode = process.env.VNP_TMNCODE;
  const secretKey = process.env.VNP_HASHSECRET;
  const vnpUrl = process.env.VNP_URL;
  const returnUrl = process.env.VNP_RETURNURL;

  // Kiểm tra biến môi trường
  if (!tmnCode || !secretKey || !vnpUrl || !returnUrl) {
    return res.status(500).json({ message: "Configuration error" });
  }

  const now = moment();

  const createDate = now.format("YYYYMMDDHHmmss");
  const orderId = now.format("HHmmss");
  const amount = req.body.amount;
  const bankCode = req.body.bankCode;

  const orderInfo = req.body.orderDescription;
  const orderType = req.body.orderType;
  const locale = req.body.language || "vn";
  const currCode = "VND";

  let vnp_Params: any = {};
  vnp_Params["vnp_Version"] = "2.1.0";
  vnp_Params["vnp_Command"] = "pay";
  vnp_Params["vnp_TmnCode"] = tmnCode;
  vnp_Params["vnp_Locale"] = locale;
  vnp_Params["vnp_CurrCode"] = currCode;
  vnp_Params["vnp_TxnRef"] = orderId;
  vnp_Params["vnp_OrderInfo"] = orderInfo;
  vnp_Params["vnp_OrderType"] = orderType;
  vnp_Params["vnp_Amount"] = amount * 100;
  vnp_Params["vnp_ReturnUrl"] = returnUrl;
  vnp_Params["vnp_IpAddr"] = ipAddr;
  vnp_Params["vnp_CreateDate"] = createDate;
  if (bankCode) {
    vnp_Params["vnp_BankCode"] = bankCode;
  }

  vnp_Params = sortObject(vnp_Params);

  const signData = qs.stringify(vnp_Params, { encode: false });
  const hmac = crypto.createHmac("sha512", secretKey);
  const signed = hmac.update(Buffer.from(signData, "utf-8")).digest("hex");
  vnp_Params["vnp_SecureHash"] = signed;
  const paymentUrl = `${vnpUrl}?${qs.stringify(vnp_Params, { encode: false })}`;

  res.status(200).json({ paymentUrl });
};

const sortObject = (obj: any) => {
  const sorted: any = {};
  const keys = Object.keys(obj).sort();
  for (let key of keys) {
    sorted[key] = obj[key];
  }
  return sorted;
};
