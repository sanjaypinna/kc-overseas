import React from "react";
import styles from "../../styles/home.module.css"; // or your module
import { ChevronDown } from "lucide-react";

const Intro = () => {
  return (
    <div className={`${styles["hero-section"]} text-white py-10 lg:py-20`}>
      <div className="container m-auto flex flex-col gap-8 items-center p-6 lg:p-12 lg:px-10 text-center">
        <p className="text-lg font-semibold">
          <span className=" opacity-50 pr-1">
            Home{" "}
            <span className="w-1.5 h-1.5 bg-white rounded-full inline-block ml-2 mb-0.5" />
          </span>{" "}
          Pune Branch
        </p>
        <h1 className="text-2xl lg:text-[42px] leading-[1.2] font-bold">
          KC Overseas Education <br />
          Pune
        </h1>
        <p className="lg:w-2/4 w-full">
          We value your career aspirations, which is why we map your preferences
          with the best that our global universities have to offer. Thousands of
          our students are pursuing their programs and aspirations in eminent
          universities globally and we welcome you to pursue yours!
        </p>
        <div className="flex items-center flex-col md:flex-row lg:flex-row gap-5">
          <button className="bg-gradient-to-l font-semibold text-sm from-[#FF6A56] to-[#FDAF4D] text-white px-4 py-2 rounded">
            Enquiry Now
          </button>
          <div className="flex items-center gap-2">
            <button className="bg-white p-2 rounded-full">
              <ChevronDown size={22} color="#000" />
            </button>
            <span>Branch Address</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
