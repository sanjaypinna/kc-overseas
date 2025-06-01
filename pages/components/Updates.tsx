"use client";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronRight } from "lucide-react";

const Updates = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1.05,
      spacing: 16,
    },
  });

  const cards = [
    {
      type: "hiring",
      heading: "We’re Hiring!",
      text: "KC continues recruitments for its offices across India and Asia even during the unprecedented times of Covid.",
      image: "/circles.svg",
    },
    {
      type: "cert",
      img: "/airc.png",
      title: "American International Recruitment Council",
      label: "Certified Agents",
      duration: "October 2018 - 2028",
    },
    {
      type: "cert",
      img: "/bc.png",
      title: "The British Council",
      label: "Authorized Representative",
      duration: "October 2018 - 2028",
    },
  ];

  return (
    <div className="py-18 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center mb-10">
          Latest KC Updates
        </h2>

        {/* Desktop */}
        <div className="hidden lg:flex mx-auto gap-8 justify-center">
          {/* Hiring Card */}
          <div
            className="flex flex-col bg-[#FDAF4D] rounded-[10px] w-[40%] h-[500px] justify-between p-10 bg-no-repeat bg-right-bottom"
            style={{ backgroundImage: 'url("/circles.svg")' }}
          >
            <div>
              <h2 className="text-4xl font-semibold mb-6">We’re Hiring!</h2>
              <p className="max-w-[300px] lg:text-[22px]">
                KC continues recruitments for its offices across India and Asia
                even during the unprecedented times of Covid.
              </p>
            </div>
            <div>
              <button className="text-[#FF7361] font-semibold px-6 py-2 bg-white rounded-md">
                Apply Now
              </button>
            </div>
          </div>

          {/* Certification Cards */}
          {[cards[1], cards[2]].map((card, idx) => (
            <div
              key={idx}
              className="p-8 flex flex-col justify-center gap-8 max-w-[270px] text-center items-center rounded-[10px]"
              style={{ boxShadow: "-5px 4px 50px 0px #0000001A" }}
            >
              <Image
                src={card.img!}
                alt={card.title!}
                width={120}
                height={120}
                className="h-[120px] w-[120px] object-contain"
              />
              <span className="text-lg">{card.title}</span>
              <Image src="/stars.png" alt="stars" width={70} height={20} />
              <div>
                <p className="text-[22px] text-[#226CF5] mb-2">{card.label}</p>
                <p className="text-lg">{card.duration}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}

        <div className="block lg:hidden">
          <div ref={sliderRef} className=" keen-slider mt-8 px-1">
            {cards.map((card, i) => (
              <div key={i} className="keen-slider__slide p-4">
                {card.type === "hiring" ? (
                  <div
                    className="flex flex-col bg-[#FDAF4D] rounded-[10px] max-w-[350px] mx-auto h-[500px] justify-between p-10 bg-no-repeat bg-right-bottom"
                    style={{ backgroundImage: 'url("/circles.svg")' }}
                  >
                    <div>
                      <h2 className="text-3xl font-semibold mb-4">
                        We’re Hiring!
                      </h2>
                      <p>
                        KC continues recruitments for its offices across India
                        and Asia even during the unprecedented times of Covid.
                      </p>
                    </div>
                    <div>
                      <button className="text-[#FF7361] font-semibold px-4 py-2 bg-white rounded-md">
                        Apply Now
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    className="p-8 flex flex-col justify-center gap-6 max-w-[300px] h-[500px] mx-auto text-center items-center rounded-[10px]"
                    style={{ boxShadow: "-5px 4px 50px 0px #0000001A" }}
                  >
                    <Image
                      src={card.img!}
                      alt={card.title!}
                      width={120}
                      height={120}
                      className="h-[120px] w-[120px] object-contain"
                    />
                    <span className="text-lg">{card.title}</span>
                    <Image
                      src="/stars.png"
                      alt="stars"
                      width={70}
                      height={20}
                    />
                    <div>
                      <p className="text-[20px] text-[#226CF5] mb-2">
                        {card.label}
                      </p>
                      <p className="text-md">{card.duration}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <button className="text-[#FF7361] font-semibold w-full flex justify-center items-center lg:pt-10 pt-6">
          More News <ChevronRight className="ml-1 w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Updates;
