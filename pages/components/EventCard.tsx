"use client";
import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

type EventType = {
  id: number;
  title: string;
  dateTime: string;
  description: string;
  image: string;
};

const events: EventType[] = [
  {
    id: 1,
    title: "USA Virtual Admission Day",
    dateTime: "Mar 19 · 05:00 PM to 07:30 PM",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/Event_1.png",
  },
  {
    id: 2,
    title: "New Zealand Virtual Admissions Week",
    dateTime: "May 18 - May 21 · 04:30 PM to 06:30 PM",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia...",
    image: "/Event_2.png",
  },
  {
    id: 3,
    title: "UK Virtual Admissions Week",
    dateTime: "May 24 - May 28 · 04:00 PM to 06:00 PM",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia...",
    image: "/Event_3.png",
  },
];

const EventCard = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: false,
    breakpoints: {
      "(min-width: 1024px)": {
        slides: { perView: 1, spacing: 0 },
      },
    },
    slides: { perView: 1.05, spacing: 15 },
  });

  return (
    <>
      <div className="block lg:hidden">
        <div ref={ref} className="keen-slider px-4">
          {events.map((event) => (
            <div key={event.id} className="keen-slider__slide px-1">
              <div className="py-2">
                <EventCardBlock event={event} expanded />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Side-by-side layout */}
      <div className="hidden lg:flex py-10 justify-center  gap-10 w-full">
        <div className="max-w-[530px]">
          <EventCardBlock event={events[0]} expanded />
        </div>
        <div className="max-w-[530px] flex flex-col justify-between gap-2">
          <EventCardBlock event={events[1]} expanded={false} />
          <EventCardBlock event={events[2]} expanded={false} />
        </div>
      </div>
      <button className="text-[#FF7361] text-sm font-semibold inline-flex items-center pt-6">
        See More <ChevronRight className="ml-1 w-4 h-4" />
      </button>
    </>
  );
};

const EventCardBlock = ({
  event,
  expanded = false,
}: {
  event: EventType;
  expanded?: boolean;
}) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden ${
        expanded ? "flex flex-col h-[500px]" : "flex h-[230px]"
      }`}
    >
      <div
        className={`relative object-contain ${
          expanded
            ? "w-full h-[300px] md:h-[280px]"
            : "w-1/3 h-full min-h-[140px]"
        }`}
      >
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>
      <div
        className={`p-6 flex flex-col gap-1.5 items-start text-left ${
          expanded ? "" : "w-2/3"
        }`}
      >
        <p className="text-sm text-blue-600 font-medium">{event.dateTime}</p>
        <h3 className=" text-[22px] ">{event.title}</h3>
        <p
          className="text-gray-600 text-left line-clamp-2"
          title={event.description} // Tooltip shown on hover
        >
          {event.description}...
        </p>

        <button className="text-[#FF7361]  font-semibold inline-flex items-center pt-2">
          Register Now <ChevronRight className="ml-1 w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default EventCard;
