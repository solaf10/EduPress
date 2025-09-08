import { FaCheck } from "react-icons/fa";
import "./SpecialCourse.css";

const SpecialCourse = () => {
  return (
    <div className="special-course">
      <div className="container d-flex">
        <div className="image">
          <img className="img-fluid" src="/assets/images/Vector.png" alt="" />
        </div>
        <div className="text">
          <h2>Grow us your skill with LearnPress LMS</h2>
          <p className="desc">
            We denounce with righteous indignation and dislike men who are so
            beguiled and demoralized that cannot trouble.
          </p>
          <ul className="features">
            <li>
              <FaCheck className="icon" />
              <p>Certification</p>
            </li>
            <li>
              <FaCheck className="icon" />
              <p>Certification</p>
            </li>
            <li>
              <FaCheck className="icon" />
              <p>Certification</p>
            </li>
            <li>
              <FaCheck className="icon" />
              <p>Certification</p>
            </li>
          </ul>
          <button>Explorer course</button>
        </div>
      </div>
    </div>
  );
};

export default SpecialCourse;
