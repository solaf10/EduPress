import AllCourses from "./components/AllCourses/AllCourses";
import CoursesControl from "./components/CoursesControl/CoursesControl";

const Courses = () => {
  return (
    <div className="courses page">
      <CoursesControl />
      <AllCourses />
    </div>
  );
};

export default Courses;
