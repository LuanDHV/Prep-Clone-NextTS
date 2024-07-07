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
  bgBanner1: string;
  bgBanner2: string;
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

export interface ICoursesLayout {
  contents: IContents[];
  sliders: ISliders[];
  brands: IBrands[];
  aims: IAims[];
  courses: ICourses[];
  benefits: IBenefits[];
}
