import { CourseInfo } from "@/app/interfaces";
import "./CourseHero.css";
import { MdAccessTimeFilled, MdPlayLesson } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";
import { RiQuestionnaireFill } from "react-icons/ri";
import { BsFillBarChartFill } from "react-icons/bs";

interface Props {
  instructorName: string;
  category: string;
  name: string;
  info: CourseInfo;
  image: string;
  price: number;
  discount?: number;
}

const CourseHero = ({
  instructorName,
  category,
  name,
  info,
  image,
  price,
  discount,
}: Props) => {
  return (
    <div className="course-hero">
      <div className="container">
        <div className="text">
          <div className="holder">
            <div className="category">{category}</div>
            <p className="instructor">
              <span>by</span> {instructorName}
            </p>
          </div>
          <h1>{name}</h1>
          <ul className="infos">
            <li>
              <MdAccessTimeFilled className="icon" />
              <span>{info.duration}</span>
            </li>
            <li>
              <IoMdSchool className="icon" />
              <span>{info.studentsNum} Students</span>
            </li>
            <li>
              <BsFillBarChartFill
                style={{ marginBottom: "3px" }}
                className="icon"
              />
              <span>{info.level}</span>
            </li>
            <li>
              <MdPlayLesson className="icon" />
              <span>{info.lessons} Lessons</span>
            </li>
            <li>
              <RiQuestionnaireFill className="icon" />
              <span>{info.quizes} Quizzes</span>
            </li>
          </ul>
        </div>
        <div className="course-card">
          <div className="image">
            <img src={image} alt={name} />
          </div>
          <div className="content">
            <div className="price">
              <p
                className="discount-price"
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
            <button>Start Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;
