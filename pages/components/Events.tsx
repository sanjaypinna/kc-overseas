import EventCard from "./EventCard";

const Events = () => {


  return (
    <div className="px-3 py-10 lg:p-12">
      <div className="container mx-auto text-center">
        <h1 className="text-[26px] lg:text-[42px] font-semibold mb-8">
          Webinars & Events
        </h1>
        <div className="">
          <EventCard />
        </div>
      </div>
    </div>
  );
};

export default Events;
