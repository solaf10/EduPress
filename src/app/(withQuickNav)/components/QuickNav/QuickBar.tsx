"use client";
import { usePathname } from "next/navigation";
import "./QuickBar.css";
import { useSelector } from "react-redux";
import { coursesState, SingleCourse } from "@/app/interfaces";
import { IoIosArrowForward } from "react-icons/io";
import { Fragment } from "react";
import Link from "next/link";

const QuickBar = () => {
  const pathname = usePathname();
  let pathesArr = pathname.slice(1).split("/");
  const dynamicRouteIndex = pathesArr.findIndex((part) => !isNaN(Number(part)));
  // const courseID = dynamicRouteIndex && pathesArr[dynamicRouteIndex];
  const course = useSelector(
    (state: coursesState) => state.courses.courses
  ).find((course: SingleCourse) => course.id == +dynamicRouteIndex);

  // to replace the dynamic route with its title
  let specialLink = "";
  if (course && Object.keys(course).length != 0 && dynamicRouteIndex != -1) {
    pathesArr = pathesArr
      .slice(0, dynamicRouteIndex + 1)
      .map((path, i) => (i == dynamicRouteIndex ? course?.name : path));
    specialLink = pathesArr[dynamicRouteIndex - 1] + "/" + dynamicRouteIndex;
  }
  if (pathname.includes("auth")) {
    pathesArr = pathesArr.map((path) =>
      path == "auth" ? "Login / Register" : path
    );
    specialLink = "auth";
  }
  const quickNav = pathesArr.map((path, i) => (
    <Fragment key={i}>
      <IoIosArrowForward className="icon" />
      <Link href={`/${specialLink.length != 0 ? specialLink : path}`}>
        {path}
      </Link>
    </Fragment>
  ));
  return (
    <div className="quick-bar">
      <div className="container">
        <Link href="/">Home</Link>
        {quickNav}
      </div>
    </div>
  );
};

export default QuickBar;
