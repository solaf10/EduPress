"use client";
import { SingleCourse } from "@/app/interfaces";
import { selectCourseById } from "@/redux/slices";
import { useParams } from "next/navigation";
import React, { ReactNode, createContext, useContext } from "react";
import { useSelector } from "react-redux";

type Props = { children: ReactNode };

const CustomerByIdContext = createContext<SingleCourse | undefined>(undefined);

const CustomerByIdProvider = ({ children }: Props) => {
  const { courseID } = useParams<{ courseID: string }>();
  const course = useSelector((state: any) =>
    selectCourseById(state, +courseID)
  );

  return (
    <CustomerByIdContext.Provider value={course}>
      {children}
    </CustomerByIdContext.Provider>
  );
};

export function useCustomerById() {
  const context = useContext(CustomerByIdContext);
  if (context === undefined) {
    throw new Error(
      "useCustomerById must be used within a CustomerByIdProvider"
    );
  }
  return context;
}

export default CustomerByIdProvider;
