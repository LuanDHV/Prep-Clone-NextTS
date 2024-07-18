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
