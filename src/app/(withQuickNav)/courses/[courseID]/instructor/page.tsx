"use client";
import "./Instructor.css";
import { useCustomerById } from "@/contexts/CustomerByIdContext";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaPinterestP, FaYoutube } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { MdPlayLesson } from "react-icons/md";

const Instructor = () => {
  const course = useCustomerById();
  const instructor = course?.instructorInfo;
  return (
    <div className="instructor">
      <div className="header">
        <div className="image">
          <img src={instructor?.image} alt={course.instructorName} />
        </div>
        <div className="text">
          <h2>{course.instructorName}</h2>
          <p>{instructor?.desc}</p>
          <ul className="statestics">
            <li>
              <IoMdSchool className="icon" />
              <span>{instructor?.studentsNum} Students</span>
            </li>
            <li>
              <MdPlayLesson className="icon" />
              <span>{instructor?.coursesNum} Lessons</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="quote">{instructor?.quote}</div>
      <div className="links">
        <span className="links-title">Follow:</span>
        <a target="_blank" href={instructor?.socialMediaLinks.facebook}>
          <FaFacebookF className="icon" />
        </a>
        <a target="_blank" href={instructor?.socialMediaLinks.pinterest}>
          <FaPinterestP className="icon" />
        </a>
        <a target="_blank" href={instructor?.socialMediaLinks.instagram}>
          <AiFillInstagram className="icon" />
        </a>
        <a target="_blank" href={instructor?.socialMediaLinks.youtube}>
          <FaYoutube className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Instructor;
