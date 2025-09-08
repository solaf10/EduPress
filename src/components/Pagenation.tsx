"use client";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./Pagenation.css";
import { useDispatch, useSelector } from "react-redux";
import { coursesState } from "@/app/interfaces";
import {
  moveToNextPage,
  moveToPrevPage,
  moveToSpecificPage,
} from "@/redux/slices";

const Pagenation = ({ coursesNum }: { coursesNum: number }) => {
  const COURSE_PER_PAGE = useSelector(
    (state: coursesState) => state.courses.COURSE_PER_PAGE
  );
  const currentPage = useSelector(
    (state: coursesState) => state.courses.currentPage
  );
  console.log(currentPage);
  const dispatch = useDispatch();
  const pagesNum = Math.ceil(coursesNum / COURSE_PER_PAGE);
  const pages = [...new Array(pagesNum)].map((_, i) => (
    <button
      className={i == currentPage ? "page-num active" : "page-num"}
      key={i}
      onClick={() => dispatch(moveToSpecificPage(i))}
    >
      {i + 1}
    </button>
  ));
  return (
    <div
      className="pagenation-controllers"
      style={{ display: pagesNum == 1 ? "none" : "flex" }}
    >
      <button
        className={currentPage == 0 ? "arrow prev disabled" : "arrow prev"}
        onClick={() => dispatch(moveToPrevPage())}
      >
        <IoIosArrowBack className="icon" />
      </button>
      <div className="controllers">{pages}</div>
      <button
        className={
          currentPage == pagesNum - 1 ? "arrow next disabled" : "arrow next"
        }
        onClick={() => dispatch(moveToNextPage())}
      >
        <IoIosArrowForward className="icon" />
      </button>
    </div>
  );
};

export default Pagenation;
