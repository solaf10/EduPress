"use client";
import CourseCard from "@/components/CourseCard";
import "./AllCourses.css";
import Pagenation from "@/components/Pagenation";
import { useSelector } from "react-redux";
import { coursesState } from "@/app/interfaces";

const AllCourses = () => {
  const courses = useSelector((state: coursesState) => state.courses.courses);
  const COURSE_PER_PAGE = useSelector(
    (state: coursesState) => state.courses.COURSE_PER_PAGE
  );
  const currentPage = useSelector(
    (state: coursesState) => state.courses.currentPage
  );

  const pagenationEnabling = () => {
    const start = currentPage * COURSE_PER_PAGE;
    const end = Math.min(
      currentPage * COURSE_PER_PAGE + COURSE_PER_PAGE,
      courses.length
    );
    return courses.slice(start, end).map((course) => (
      <div className="col-lg-4" key={course.id}>
        <CourseCard
          id={course.id}
          category={course.category}
          name={course.name}
          price={course.price}
          discount={course.discount}
          duration={course.info.duration}
          studentsNum={course.info.studentsNum}
          instructor={course.instructorName}
          img={course.img}
        />
      </div>
    ));
  };
  const cards = pagenationEnabling();
  return (
    <div className="all-courses">
      <div className="container ">
        <div className="row cards">{cards}</div>
        <Pagenation coursesNum={courses.length} />
      </div>
    </div>
  );
};

export default AllCourses;
