"use client";
import { useParams, useRouter } from "next/navigation";
import Overview from "./overview/page";
import { useEffect } from "react";

const CoursePage = () => {
  const router = useRouter();
  const id = useParams().courseID;
  useEffect(() => {
    router.push(id + "/overview");
  }, []);
  // return <Overview />;
};

export default CoursePage;
