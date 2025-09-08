export interface Category {
  img: string;
  name: string;
  desc: string;
}

export interface Lesson {
  name: string;
  duration: string;
}

export interface Curriculum {
  title: string;
  duration: string;
  lessonsNum: number;
  lessons: Array<Lesson>;
  isLocked: boolean;
}

export interface SocialMedia {
  facebook: string;
  pinterest: string;
  instagram: string;
  youtube: string;
}

export interface Instructor {
  image: string;
  // name: string;
  desc: string;
  coursesNum: number;
  studentsNum: number;
  quote: string;
  socialMediaLinks: SocialMedia;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Review {
  image: string;
  name: string;
  content: string;
  date: string;
}

export interface CourseInfo {
  duration: string;
  level?: string;
  studentsNum: number;
  lessons?: number;
  quizes?: number;
}

export interface SingleCourse {
  id: number;
  img: string;
  name: string;
  instructorName: string;
  category: string;
  price: number;
  discount?: number;
  overview?: string;
  info: CourseInfo;
  curriculum?: Array<Curriculum>;
  instructorInfo?: Instructor;
  faq?: Array<Faq>;
  rating?: number;
  reviewersNum?: number;
  fiveStars?: number;
  fourStars?: number;
  threeStars?: number;
  twoStars?: number;
  oneStars?: number;
  reviews?: Array<Review>;
}

/* export interface Course {
  id: number;
  img: string;
  name: string;
  instructor: string;
  category: string;
  duration: string;
  studentsNum: number;
  price: number;
  discount?: number;
} */
export interface User {
  id: number;
  userName: string;
  mail: string;
  password: string;
}
export type coursesState = {
  courses: {
    courses: Array<SingleCourse>;
    singleCourse: SingleCourse | {};
    currentPage: number;
    COURSE_PER_PAGE: number;
  };
};
export type AuthState = {
  auth: {
    users: Array<User>;
    isAuthenticated: boolean;
    currentUser: User | {};
    lastID: number;
  };
};
