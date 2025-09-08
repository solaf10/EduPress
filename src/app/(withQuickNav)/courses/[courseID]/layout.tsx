"use client";
import "./coursePage.css";
import { useSelector } from "react-redux";
import CourseHero from "./components/CourseHero/CourseHero";
import { useParams } from "next/navigation";
import { coursesState } from "@/app/interfaces";
import NavLink from "@/components/NavBar/NavLink";
import CustomerByIdProvider from "@/contexts/CustomerByIdContext";
import Comment from "./components/Comment/Comment";

export const initialCourse = {
  id: 0,
  img: "",
  name: "",
  instructorName: "",
  category: "",
  discount: 0,
  price: 0,
  overview: "",
  curriculum: [],
  instructorInfo: {},
  faq: [],
  rating: 0,
  reviewersNum: 0,
  fiveStars: 0,
  fourStars: 0,
  threeStars: 0,
  twoStars: 0,
  oneStars: 0,
  reviews: [],
  info: {
    duration: "",
    level: "",
    studentsNum: 0,
    lessons: 0,
    quizes: 0,
  },
};

export default function QuickNavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const courses = useSelector((state: coursesState) => state.courses.courses);
  const id = useParams<{ courseID: string }>().courseID;
  console.log(id);
  const {
    img,
    name,
    instructorName,
    category,
    discount,
    price,
    info,
    overview,
    curriculum,
    instructorInfo,
    faq,
    rating,
    reviewersNum,
    fiveStars,
    fourStars,
    threeStars,
    twoStars,
    oneStars,
    reviews,
  } = courses.find((course) => course.id == +id) || initialCourse;
  console.log(img);
  const courseID = useParams().courseID;
  return (
    <CustomerByIdProvider>
      <CourseHero
        instructorName={instructorName}
        category={category}
        name={name}
        info={info}
        image={img}
        price={price}
        discount={discount}
      />
      <div className="all-info">
        <div className="container">
          <div className="holder">
            <div className="tabs">
              <NavLink href={`/courses/${courseID}/overview`}>Overview</NavLink>
              <NavLink href={`/courses/${courseID}/curriculum`}>
                Curriculum
              </NavLink>
              <NavLink href={`/courses/${courseID}/instructor`}>
                Instructor
              </NavLink>
              <NavLink href={`/courses/${courseID}/faqs`}>FAQs</NavLink>
              <NavLink href={`/courses/${courseID}/reviews`}>Review</NavLink>
            </div>
            <div className="content">{children}</div>
          </div>
        </div>
      </div>
      <Comment />
    </CustomerByIdProvider>
  );
}
