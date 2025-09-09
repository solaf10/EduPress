"use client";

import { useCustomerById } from "@/contexts/CustomerByIdContext";

const Overview = () => {
  const overView = useCustomerById()?.overview;
  return (
    <div className="overview">
      <div className="container">{overView}</div>
    </div>
  );
};

export default Overview;
