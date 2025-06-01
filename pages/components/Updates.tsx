"use client";
import Image from "next/image";
const Updates = () => {
  return (
    <div className=" py-18 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center mb-10">
          Latest KC Updates{" "}
        </h2>
        <div className="mx-auto flex gap-8 justify-center ">
          <div
            className="flex flex-col bg-[#FDAF4D] rounded-[10px] w-[40%] h-[500px] justify-between p-10 bg-no-repeat bg-right-bottom"
            style={{ backgroundImage: 'url("/circles.svg")' }}
          >
            {" "}
            <div>
              <h2 className="text-4xl font-semibold mb-6">We’re Hiring!</h2>
              <p className=" max-w-[300px]">
                KC continues recruitments for its offices across India and Asia
                even during the unprecedented times of Covid.
              </p>
            </div>
            <div>
              <button className=" text-[#FF7361] font-semibold px-4 py-2 bg-white  rounded-md">
                Apply Now
              </button>
            </div>
          </div>
          <div
            className="p-8 flex flex-col justify-center gap-8 max-w-[270px] text-center items-center rounded-[10px]"
            style={{ boxShadow: "-5px 4px 50px 0px #0000001A" }}
          >
            <Image
              src="/airc.png"
              alt="airc"
              width={120}
              height={120}
              className=" h-[120px] w-[120px] object-contain"
            />
            <span className=" text-lg">
              American International Recruitment Council
            </span>
            <Image src="/stars.png" alt="airc" width={70} height={20} />
            <div>
              <p className=" text-[22px] text-[#226CF5] mb-2">
                Certified Agents
              </p>
              <p className="text-lg">October 2018 - 2028</p>
            </div>
          </div>
          <div
            className="p-8 flex flex-col justify-center gap-8 max-w-[270px] text-center items-center rounded-[10px]"
            style={{ boxShadow: "-5px 4px 50px 0px #0000001A" }}
          >
            <Image
              src="/bc.png"
              alt="bc"
              width={120}
              height={120}
              className=" h-[120px] w-[120px] object-contain"
            />
            <span className=" text-lg">The British Council</span>
            <Image src="/stars.png" alt="bc" width={70} height={20} />
            <div>
              <p className=" text-[22px] text-[#226CF5] mb-2">
                Authorized Representative
              </p>
              <p className="text-lg">October 2018 - 2028</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;
