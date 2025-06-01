import React from "react";
import Image from "next/image";
import styles from "../../styles/home.module.css";
import { Star } from "lucide-react";
const Services = () => {
  const ServicesData = [
    {
      title: "Test Preparing & Coaching",
      icon: "/click.svg",
    },
    {
      title: "Course, Country & University Selection",
      icon: "/location.svg",
    },
    {
      title: "Application Assistance",
      icon: "/badge.svg",
    },
    {
      title: "Scholarships",
      icon: "/star.svg",
    },
  ];

  const keyPoints = [
    "Virtual & In Person Coaching and Counselling",
    "Comprehensive Assistance for Applications, Admissions & Visas",
    "High Value Scholarships and Study Loans",
  ];
  return (
    <div className=" px-8 py-10 lg:p-16">
      <div className="container flex flex-col items-center m-auto justify-center gap-10">
        <h1 className="text-[26px] lg:text-[42px] font-semibold">
          Services we provide
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {ServicesData.map((item) => (
            <div
              key={item.title}
              className={`flex items-center gap-2 p-5 rounded-[10px] ${styles["services-card"]}`}
            >
              <Image src={item.icon} alt={item.title} width={28} height={30} />
              <h2>{item.title}</h2>
            </div>
          ))}
        </div>
        <button className="bg-gradient-to-l font-semibold text-sm from-[#FF6A56] to-[#FDAF4D] text-white px-4 py-3 rounded-lg">
        Enquiry Now
        </button>
        <div className="flex flex-col justify-center pt-6 lg:flex-row gap-8 lg:gap-16 items-center text-center lg:text-left">
          <div>
            <Image src="/discussion.png" alt="map" width={440} height={490} />
          </div>
          <div className="flex flex-col gap-3 max-w-[540px]">
            <h2 className="text-[26px] font-semibold">
              Realize your global ambitions with us
            </h2>
            <p className="pb-5 pt-5 lg:pt-0 text-start">
              With a keen ear for your choices and preferences, our counselling
              experience is so seamless that you will land in your dream
              university even before you do!
            </p>
            {keyPoints.map((point) => (
              <div className="flex items-start md:items-center lg:items-center gap-2" key={point}>
                <div className=" p-2 bg-white rounded-full shadow-sm w-fit">
                  <Star fill="#FDAF4D" stroke="ffff" size={17} />
                </div>
                <span className="text-left">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
