/* eslint-disable react/no-string-refs */
import { useEffect, useState } from "react";
import { carList } from "./carData";

const NFTCar = () => {
  const [active, setActive] = useState(1);
  const [isMounted, setIsMounted] = useState(false);

  const activeCar = carList.find((item) => item.id === active);

  const carInfor = [
    { id: 0, title: "Car", value: activeCar?.name },
    { id: 1, title: "Class", value: activeCar?.class.toUpperCase() },
    { id: 2, title: "Car Minted", value: "TBA" },
    { id: 3, title: "Total Supply", value: "TBA" },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    console.log("isMounted", isMounted);
    isMounted && loadModel(carList[0].fileUrl, carList[0].posterURL);
  }, [isMounted]);

  const loadModel = async (fileURl: string, posterURL: string) => {
    try {
      const { ModelViewerElement } = await import("@google/model-viewer");
      const element = new ModelViewerElement();
      element.src = fileURl;
      element.ar = true;
      element.arModes = "webxr scene-viewer quick-look";
      element.cameraControls = true;
      element.shadowIntensity = 2;
      element.exposure = 1.42;
      element.poster = posterURL;
      element.environmentImage = "/3d_car/aircraft_workshop_01_1k.hdr";
      // element.autoRotate = true;
      element.disableZoom = true;
      element.disableTap = true;

      const elementHTML = document.getElementById("car-render");
      if (!elementHTML) return;

      const children = elementHTML?.children;
      for (const child of children) elementHTML?.removeChild(child);

      elementHTML?.appendChild(element);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <>
      <section
        id="nft-car"
        className="nftcar pt-[5rem] px-[1.5rem] sm:px-[64px] 2xl:px-[2rem] 4xl:px-[64px] lg:pt-[12rem] 2xl:pb-[10rem]"
      >
        <div className="flex 2xl:flex-row flex-col montserrat">
          {/* left */}
          <div>
            {/* Title */}
            <div className="flex flex-col gap-[1.5rem] lg:gap-[2.5rem]">
              <img
                src="images/lastest_announce.png"
                alt="err"
                className="w-[278.59px] h-[45.48px] lg:w-[496px] lg:h-[80px]"
                data-aos="fade-right"
                data-aos-duration="500"
              />
              <img
                src="images/nft-car.png"
                alt="err"
                className="w-[232px] h-[25px] lg:w-[508px] lg:h-[55px]"
                data-aos="fade-right"
                data-aos-duration="600"
              />
            </div>
            {/* End title */}
            {/* Car List */}
            <div className="lg:mt-[8rem] mt-[3rem]">
              <ul
                data-aos="fade-right"
                data-aos-duration="700"
                className="overflow-x-scroll overflow-y-hidden scrollbar-nftcar flex 2xl:grid grid-cols-2 4xlplus:grid-cols-3 gap-[1rem] 2xl:h-[42rem] 2xl:overflow-y-scroll 2xl:overflow-x-hidden py-[0.5rem] px-[1.7rem]"
              >
                {carList.map((element) => (
                  <li
                    onClick={() => {
                      setActive(element.id);
                      loadModel(element.fileUrl, element.posterURL);
                    }}
                    key={element.id}
                    className={`cursor-pointer mb-[0.5rem] group`}
                  >
                    <div className="relative">
                      <img
                        src={element.image}
                        className={`min-w-[214.67px] min-h-[120px] 2xl:w-[214.67px] 2xl:h-[120px]`}
                        alt="err"
                      />
                      <img
                        src={`/3d_car/cars-list/active_border/${element.class}.png`}
                        className={`absolute top-0 ${
                          active !== element.id && "hidden"
                        }`}
                        alt="err"
                      />
                    </div>
                    <p
                      className={`${
                        active === element.id ? "text-white" : "text-[#659498]"
                      } mt-[0.5rem] font-[400] text-[21.33px]  text-center group-hover:text-white transition-all`}
                    >
                      {element.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            {/* End Car List */}
          </div>
          {/* End Left */}

          {/* Right */}
          <div className="flex-1 flex flex-col items-center">
            {/* Information */}
            <div className="flex flex-col w-full lg:w-[44rem] gap-[2.5rem] mt-[3rem] lg:mt-[5rem]">
              <ul
                data-aos="fade-left"
                data-aos-duration="800"
                className="flex flex-col lg:flex-row w-full justify-between"
              >
                {carInfor.map((element) => (
                  <li
                    key={element.id}
                    className="flex justify-between lg:inline-block"
                  >
                    <p className="text-[#659498] font-[400] text-[20px]">
                      {element.title}
                    </p>
                    <p
                      className={`${element.value === "S" && "text-[#DCBC29]"}
                         ${element.value === "A" && "text-[#D02F2F]"}
                      ${element.value === "B" && "text-[#9457DB]"}
                      ${element.value === "C" && "text-[#00B793]"}
                      ${
                        element.value === "D" && "text-[#FFFFFF]"
                      } font-[700] text-[24px]`}
                    >
                      {element.value}
                    </p>
                  </li>
                ))}
              </ul>
              <button
                className="self-end"
                data-aos="fade-left"
                data-aos-duration="900"
              >
                <img src="images/get-this-car.png" alt="err" />
              </button>
            </div>

            {/* End information */}

            {/* 3D Car */}
            <div className="car_3d-model" id="car-render"></div>
            {/* End 3D Car */}
          </div>
          {/* End Right */}
        </div>
      </section>
    </>
  );
};

export default NFTCar;
