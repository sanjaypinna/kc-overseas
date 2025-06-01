"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors.",
    author: "Mandar Suryawanshi",
    university: "Northeastern University, USA",
  },
  {
    quote:
      "The team made the entire process very easy. Everyone is very helpful and cooperative throughout. I am thankful to KC Sadar Team for making my dream come true.",
    author: "Aarohi Sighel",
    university: "University of South Australia, Australia",
  },
  {
    quote:
      "Helped with counseling and making the right decision...great staff..would definitely recommend it to anyone planning to go abroad for studies..",
    author: "Susan Mendonca",
    university: "Conestoga College, Canada",
  },
  {
    quote:
      "Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors.",
    author: "Mandar Suryawanshi",
    university: "Northeastern University, USA",
  },
  {
    quote:
      "The team made the entire process very easy. Everyone is very helpful and cooperative throughout. I am thankful to KC Sadar Team for making my dream come true.",
    author: "Aarohi Sighel",
    university: "University of South Australia, Australia",
  },
  {
    quote:
      "Helped with counseling and making the right decision...great staff..would definitely recommend it to anyone planning to go abroad for studies..",
    author: "Susan Mendonca",
    university: "Conestoga College, Canada",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 30,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const slideTo = (dir: "prev" | "next") => {
    if (!instanceRef.current) return;
    if (dir === "prev") {
      instanceRef.current.prev();
    } else {
      instanceRef.current.next();
    }
  };

  return (
    <div className="bg-[#FFDCD8] py-18 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center mb-10">
          Our students love us
        </h2>

        {/* Slider Section */}
        <div className="relative max-w-7xl mx-auto overflow-hidden px-2 sm:px-4">
          {/* Arrows */}
          <button
            onClick={() => slideTo("prev")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow w-8 h-8 rounded-full z-10 flex justify-center items-center"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Slides */}
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((item, index) => {
              const isActive =
                index === (currentSlide + 1) % testimonials.length;

              return (
                <div
                  key={index}
                  className={`keen-slider__slide flex justify-center p-4 transition-transform duration-300 ${
                    isActive ? "lg:pt-15" : ""
                  }`}
                >
                  <div className="bg-white rounded-xl shadow-md p-6 lg:h-fit max-w-sm w-full">
                    <Image
                      width={32}
                      height={22}
                      src="/quote.svg"
                      alt="quote"
                    />
                    <p className="text-sm text-gray-800 my-4">{item.quote}</p>
                    <p className="font-semibold text-sm">{item.author}</p>
                    <p className="text-xs text-gray-500">{item.university}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => slideTo("next")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow w-8 h-8 rounded-full z-10 flex justify-center items-center"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentSlide ? "bg-black" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
