import React from "react";
import StepsCarousel from "./StepsCarousel";

const Steps = () => {
  return (
    <div className=" bg-[#DBD9FF] pt-5">
      <div className=" container m-auto items-center text-center px-2 lg:px-0 py-10">
        <h1 className=" text-[26px] lg:text-[42px]">
          7 Easy Steps to Land in your Dream University
        </h1>
        <StepsCarousel/>
      </div>
    </div>
  );
};

export default Steps;
