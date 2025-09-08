import "./CourseCard.css";
import { MdAccessTimeFilled } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";
import Link from "next/link";
import { SingleCourse } from "@/app/interfaces";

const CourseCard = ({
  id,
  img,
  name,
  instructorName,
  category,
  info,
  price,
  discount,
}: SingleCourse) => {
  return (
    <div className="course-card">
      <div className="category">{category}</div>
      <div className="image">
        <img src={img} alt={name} />
      </div>
      <div className="content">
        <div className="info">
          <p className="instructor">
            <span>by</span> {instructorName}
          </p>
          <h3>{name}</h3>
          <div className="statics">
            <div className="time">
              <MdAccessTimeFilled className="icon" />
              <p>{info.duration}</p>
            </div>
            <div className="students">
              <IoMdSchool className="icon" />
              <p>{info.studentsNum} Students</p>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="price">
            <p
              style={
                discount
                  ? { textDecoration: "line-through", color: "#9D9D9D" }
                  : {}
              }
            >
              ${price}
            </p>
            {discount && (
              <p className="sale">
                {discount == 100
                  ? "Free"
                  : `$${((discount / 100) * price).toFixed(2)}`}
              </p>
            )}
          </div>
          {/* <Link className="more" to="/">View more</Link> */}
          <Link className="more" href={`/courses/${id}`}>
            View more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
