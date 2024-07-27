import exp from "constants";

export interface ISubMenu {
  title: string;
  href: string;
}

export interface IMenu {
  title: string;
  href?: string;
  subItems?: ISubMenu[];
  isOpen?: boolean;
  toggle?: () => void;
}

export interface INewPaper {
  img: string;
  logo: string;
  content: string;
  link: string;
}

export interface IPartner {
  img: string;
  width: number;
}

export interface IReview {
  name: string;
  avatar: string;
  content: string;
}

export interface IReward {
  img: string;
  content: string;
  width: number;
  height: number;
}

export interface ITeacher {
  img: string;
  name: string;
  score: string;
}

export interface IAims {
  _id: string;
  courseType: string;
  aim: string;
  description: string;
}

export interface IBrands {
  _id: string;
  courseType: string;
  brand: string;
  description: string;
}

export interface ILessons {
  _id: string;
  title: string;
  video: string;
}

export interface ICourses {
  _id: string;
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
  _id: string;
  courseType: string;
  image: string;
}
export interface IBenefits {
  _id: string;
  courseType: string;
  contents: string[];
}
export interface IContents {
  _id: string;
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

export interface IRoadMapDetails {
  duration: string;
  courses: string;
  price: string;
  discount: string;
  period: string;
}

export interface INotificationModal {
  type: "success" | "error";
  isOpen: boolean;
  onOpenChange: () => void;
  message: string;
}

export interface ICoursesLayout {
  contents: IContents[];
  sliders: ISliders[];
  brands: IBrands[];
  aims: IAims[];
  courses: ICourses[];
  benefits: IBenefits[];
}

export interface ICoupon {
  code: string;
  discountPercentage: number;
}

interface IOrderData {
  id: string;
  user: IUserOrderData;
  roadMap: IRoadMapOrderData;
  coupon: string | null;
  paymentMethod?: string;
}
interface IUserOrderData {
  fullName: string;
  email: string;
}
interface IRoadMapOrderData {
  name: string;
  details: IRoadMapDetails;
  courses: ICourses[];
}
