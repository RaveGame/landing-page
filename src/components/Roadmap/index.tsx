import React from "react";

const Roadmap = () => {
  return (
    <section
      id="road-map"
      className="roadmap pt-[5rem] px-[1rem] sm:px-[64px] lg:px-0 5xl:flex 5xl:flex-col 5xl:items-center"
    >
      <div className="flex flex-col items-center">
        <img
          src="images/logo-rfm.png"
          alt="err"
          className="w-[128px] h-[34px]"
          data-aos="fade-down"
          data-aos-duration="500"
        />
        <img
          src="images/enjoy-the-ride.png"
          alt="err"
          className="mt-[1.5rem] hidden 2xl:block"
          data-aos="fade-down"
          data-aos-duration="500"
        />
        <img
          src="images/road-map.png"
          alt="err"
          className="mt-[1.5rem] 2xl:hidden sm:w-[594px] sm:h-[59px] w-[255px] h-[25px]"
          data-aos="fade-down"
          data-aos-duration="600"
        />
      </div>

      <div className="flex flex-col xl:flex-row">
        <div className="order-2 xl:order-1 mt-[5rem] lg:mt-[1rem]">
          <img
            data-aos="fade-right"
            data-aos-duration="600"
            src="images/women.png"
            alt="err"
            className="lg:max-w-[491px] lg:max-h-[645px] xl:min-w-[541px] xl:min-h-[695px] 2xl:min-w-[661px] 2xl:min-h-[815px] 3xl:min-w-[667px] 3xl:min-h-[823px]"
          />
        </div>
        <div className="order-1 xl:order-2 flex flex-col lg:items-center gap-[3rem] xl:ml-[2rem] 3xl:ml-[8rem] mt-[5rem] sm:mt-[7rem]">
          <div
            data-aos="fade-down"
            data-aos-duration="600"
            className="lg:ml-[25rem] xl:ml-[5rem]"
          >
            <div className="mb-[1.5rem]">
              <img
                src="images/01-race.png"
                alt="err"
                className="w-[213.74px] h-[50px] sm:w-[304px] sm:h-[61px]"
              />
            </div>
            <p className="text-[#659498] font-[400] text-[18px] leading-[22px] lg:w-[22rem]">
              Start your racing career with free starter car. Join PVE, PVP and
              Tournaments to compete.
            </p>
          </div>
          <div
            className="xl:mr-[35rem] lg:mr-[15rem]"
            data-aos="fade-down"
            data-aos-duration="700"
          >
            <div className="mb-[1.5rem]">
              <img
                src="images/02-collect.png"
                alt="err"
                className="w-[281px] h-[50px] sm:w-[400px] sm:h-[61px]"
              />
            </div>
            <p className="text-[#659498] font-[400] text-[18px] leading-[22px] lg:w-[22rem]">
              Collect tickets & keys to open crates. Get limited car models &
              customizable NFTs to power up your racing.
            </p>
          </div>
          <div
            className="lg:ml-[25rem] xl:ml-[5rem]"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            <div className="mb-[1.5rem]">
              <img
                src="images/03-earn.png"
                alt="err"
                className="w-[224.74px] h-[50px] sm:w-[304px] sm:h-[61px]"
              />
            </div>
            <p className="text-[#659498] font-[400] text-[18px] leading-[22px] lg:w-[22rem]">
              Earn $Venom, $RAVE & items while having fun with friends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
