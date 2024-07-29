export interface IAims {
  courseType: string;
  aim: string;
  description: string;
}

export interface IBrands {
  courseType: string;
  brand: string;
  description: string;
}

export interface ILessons {
  title: string;
  video: string;
}

export interface ICourses {
  courseType: string;
  title: string;
  description: string;
  image: string;
  name: string;
  price: string;
  discount: string;
  inputLevel: string;
  duration: string;
  list: number;
  people: number;
  review: number;
  lessons: ILessons[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ISliders {
  courseType: string;
  image: string;
}
export interface IBenefits {
  courseType: string;
  contents: string[];
}
export interface IContents {
  courseType: string;
  image: string;
  bgBanner: string;
  textColor: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
  text8: string;
  text9: string;
  text10: string;
  text11: string;
}

export interface ICoupons {
  code: string;
  discountPercentage: number;
}

export interface IPayments {
  app_id: string;
  app_trans_id: string;
  app_user: string;
  app_time: number;
  expire_duration_seconds?: number;
  amount: number;
  item: string;
  description: string;
  embed_data: string;
  bank_code: string;
  mac?: string;
  callback_url: string;
  device_info?: string;
  sub_app_id?: string;
  title?: string;
  currency?: string;
  phone?: string;
  email?: string;
  address?: string;
}

interface ICreateStatusResult {
  return_code: number;
  return_message: string;
}
