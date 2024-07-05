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
  name: string;
  price: number;
  discount: number;
  duration: string;
  inputLevel: string;
  list: number;
  time: string;
  people: number;
  review: number;
  lessons: ILessons[];
  createdAt: Date;
  updatedAt: Date;
}
