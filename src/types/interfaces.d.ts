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
