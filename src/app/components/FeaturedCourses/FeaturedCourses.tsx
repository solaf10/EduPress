"use client";
import CourseCard from "@/components/CourseCard";
import "./FeaturedCourses.css";
import { useSelector } from "react-redux";
import { coursesState } from "@/app/interfaces";

const FeaturedCourses = () => {
  const courses = useSelector((state: coursesState) => state.courses.courses);

  const featuredCourses = [...courses]
    .sort((a, b) => b.info.studentsNum - a.info.studentsNum)
    .slice(0, 3);

  const cards = featuredCourses.map((course) => (
    <div className="col-lg-4" key={course.id}>
      <CourseCard
        id={course.id}
        category={course.category}
        name={course.name}
        price={course.price}
        discount={course.discount}
        info={course.info}
        instructorName={course.instructorName}
        img={course.img}
      />
    </div>
  ));
  return (
    <div className="featured-courses">
      <div className="container">
        <div className="top-title">
          <div className="holder">
            <h2>Featured courses</h2>
            <p>Explore our Popular Courses</p>
          </div>
          <button className="all-btn">All Courses</button>
        </div>
        <div className="cards row">{cards}</div>
        <button className="all-btn">All Courses</button>
      </div>
    </div>
  );
};

export default FeaturedCourses;
