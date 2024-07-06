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
