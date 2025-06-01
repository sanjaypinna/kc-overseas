import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Target,
  Award,
  BookOpen,
  FileText,
  Plane,
  GraduationCap,
  Users,
} from "lucide-react";

const StepCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Which card is in center/active
  const [itemsPerView, setItemsPerView] = useState(3);

  const steps = [
    {
      id: 1,
      title: "Counselling",
      subtitle: "Plan your Academic and Career Goals",
      icon: Target,
      iconBg: "bg-orange-300",
      iconColor: "text-orange-700",
    },
    {
      id: 2,
      title: "Test Preparation",
      subtitle: "Appear for Standardized Tests",
      icon: Award,
      iconBg: "bg-gray-300",
      iconColor: "text-gray-600",
    },
    {
      id: 3,
      title: "Course Selection",
      subtitle: "Choose your Ideal Program",
      icon: BookOpen,
      iconBg: "bg-blue-300",
      iconColor: "text-blue-700",
    },
    {
      id: 4,
      title: "Application Process",
      subtitle: "Submit Applications to Universities",
      icon: FileText,
      iconBg: "bg-green-300",
      iconColor: "text-green-700",
    },
    {
      id: 5,
      title: "Visa Guidance",
      subtitle: "Get Help with Visa Documentation",
      icon: Plane,
      iconBg: "bg-purple-300",
      iconColor: "text-purple-700",
    },
    {
      id: 6,
      title: "Pre-Departure",
      subtitle: "Prepare for your Journey",
      icon: Users,
      iconBg: "bg-pink-300",
      iconColor: "text-pink-700",
    },
    {
      id: 7,
      title: "Post-Arrival",
      subtitle: "Settle into your New Life",
      icon: GraduationCap,
      iconBg: "bg-indigo-300",
      iconColor: "text-indigo-700",
    },
  ];

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width >= 1600) {
        setItemsPerView(3); // Desktop: show 3 cards
      } else if (width >= 1000) {
        setItemsPerView(2); // Tablet: show 2 cards
      } else {
        setItemsPerView(1); // Mobile: show 1 card
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const nextStep = () => {
    if (activeIndex < steps.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  const goToStep = (index: number) => {
    setActiveIndex(index);
  };

  // Calculate which cards to show - modified for 2 cards at start
  const getVisibleCards = () => {
    if (activeIndex === 0) {
      return itemsPerView === 1 ? [0] : [0, 1];
    }

    const sideCards = Math.floor((itemsPerView - 1) / 2);
    let startIndex = Math.max(0, activeIndex - sideCards);
    const endIndex = Math.min(steps.length - 1, startIndex + itemsPerView - 1);

    if (endIndex - startIndex + 1 < itemsPerView) {
      startIndex = Math.max(0, endIndex - itemsPerView + 1);
    }

    const visibleCards = [];
    for (let i = startIndex; i <= endIndex; i++) {
      visibleCards.push(i);
    }
    return visibleCards;
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="w-full max-w-6xl mt-10 mx-auto p-8">

      {/* Carousel Content */}
      <div className="relative mb-8">
        <div
          className={`flex items-start space-x-4 lg:space-x-6 gap-10 ${
            activeIndex === 0 && itemsPerView > 1
              ? "justify-center xl:ml-[30%]"
              : "justify-center"
          }`}
        >
          {visibleCards.map((stepIndex) => {
            const step = steps[stepIndex];
            const IconComponent = step.icon;
            const isActive = stepIndex === activeIndex;

            return (
              <div
                key={step.id}
                className={`flex-shrink-0 transition-all w-auto duration-500 ease-in-out ${
                  itemsPerView === 1
                    ? "w-80"
                    : itemsPerView === 2
                    ? "w-64"
                    : "w-56"
                } `}
              >
                <div className="flex justify-center mb-6 relative">
                  {/* Step Number */}
                  <button
                    onClick={() => goToStep(stepIndex)}
                    className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-sm lg:text-lg font-medium transition-all duration-300 relative z-10 ${
                      isActive
                        ? "bg-white text-gray-800 shadow-lg"
                        : "border-1 border-gray-500 bg-opacity-40 text-gray-500"
                    }`}
                  >
                    {stepIndex + 1}
                  </button>
                </div>

                {/* Card Content */}
                <div
                  className={`relative bg-white rounded-3xl w-[300px] h-[200px] lg:w-[400px] lg:h-[240px] p-6 lg:p-8 shadow-sm  transition-all duration-500 ${
                    isActive ? "transform scale-105 shadow-lg" : "opacity-50"
                  }`}
                >
                  {/* Triangle on top */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[12px] border-l-transparent border-r-transparent border-b-white"></div>
                  </div>
                  <div className="text-center mt-4">
                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-t-full ${step.iconBg} mb-4 lg:mb-6`}
                    >
                      <IconComponent
                        className={`w-6 h-6 lg:w-8 lg:h-8 ${step.iconColor}`}
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 lg:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                      {step.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-2">
        <button
          onClick={prevStep}
          disabled={activeIndex === 0}
          className={`flex items-center space-x-2 px-3 lg:px-4 py-2 text-sm font-medium transition-all duration-300 ${
            activeIndex === 0
              ? "text-gray-400 cursor-not-allowed"
              : "text-red-400 hover:text-red-500"
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span className=" text-[16px]">Previous Step</span>
        </button>

        <button
          onClick={nextStep}
          disabled={activeIndex >= steps.length - 1}
          className={`flex items-center space-x-2 px-3 lg:px-4 py-2 text-sm font-medium transition-all duration-300 ${
            activeIndex >= steps.length - 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-red-400 hover:text-red-500"
          }`}
        >
          <span className=" text-[16px]">Next Step</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default StepCarousel;
