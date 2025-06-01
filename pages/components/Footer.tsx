"use client";
import React from "react";
import styles from "../../styles/home.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="relative">
      {/* Background curve */}
      <div className="absolute top-[-40px] left-[20px] z-20">
        <Image src="/Union.svg" alt="Union" width={121} height={131} />
      </div>
      <div
        className={` ${styles["footer"]} text-white py-20 px-10 mt-10 lg:py-20`}
      >
        {/* Decorative Image - Top Left */}

        {/* Content */}
        <div className="container mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-10">
            Stay updated with KC Overseas
          </h2>

          <form className="flex flex-col lg:flex-row justify-center text-white items-center gap-6 mx-auto">
            <input
              type="email"
              placeholder="Email ID"
              className="lg:max-w-[18%] w-full px-4 py-3 bg-white rounded-md text-black"
            />
            <select
              className="lg:max-w-[18%] w-full px-4 py-3 bg-white rounded-md text-black"
              defaultValue=""
            >
              <option value="" disabled>
                I&apos;m Interested in
              </option>
              <option value="study">Study Abroad</option>
              <option value="visa">Visa Assistance</option>
              <option value="counselling">Counselling</option>
            </select>
            <button className="bg-gradient-to-r from-[#FF6A56] lg:max-w-[18%] w-full h-fit to-[#FDAF4D] text-white font-semibold px-5 py-3 rounded-md">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
