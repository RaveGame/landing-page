import NextImage from "@/components/BaseComponents/NextImage";
import { useEffect, useState } from "react";
import { FaFacebookF, FaShoppingCart } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Controller, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CarInfo from "../BaseComponents/CarName";

const CAR_BODY = [
  { id: 1, image: "/images/carcustom/body/bd1.png", name: "TYRUS1", star: 4 },
  { id: 2, image: "/images/carcustom/body/bd2.png", name: "TYRUS2", star: 5 },
  { id: 3, image: "/images/carcustom/body/bd3.png", name: "TYRUS3", star: 4 },
  { id: 4, image: "/images/carcustom/body/bd4.png", name: "TYRUS4", star: 3 },
];
export interface ICarbodyProps {
  id: number;
  image: string;
  name: string;
  star: number;
}

const CUSTOM_DATA = [
  {
    id: 1,
    name: "color",
    icon: "/images/items-color.png",
    iconActive: "/images/items-color-active.png",
    listCustom: [],
  },
  {
    id: 2,
    name: "bonnet",
    icon: "/images/items-bonnet.png",
    iconActive: "/images/items-bonnet-active.png",
    listCustom: [],
  },
  {
    id: 3,
    name: "imperial",
    icon: "/images/items-imperial.png",
    iconActive: "/images/items-imperial-active.png",
    listCustom: [],
  },
  {
    id: 4,
    name: "rim",
    icon: "/images/items-rim.png",
    iconActive: "/images/items-rim-active.png",
    listCustom: [
      { id: 1, image: "/images/carcustom/wheel/F-Sports-GTI---Wheel_0000.png" },
      { id: 2, image: "/images/carcustom/wheel/F-Sports-GTI---Wheel_0001.png" },
      { id: 3, image: "/images/carcustom/wheel/F-Sports-GTI---Wheel_0002.png" },
      { id: 4, image: "/images/carcustom/wheel/F-Sports-GTI---Wheel_0003.png" },
      { id: 5, image: "/images/carcustom/wheel/F-Sports-GTI---Wheel_0004.png" },
      { id: 6, image: "/images/carcustom/wheel/F-Sports-GTI---Wheel_0005.png" },
      { id: 7, image: "/images/carcustom/wheel/F-Sports-GTI---Wheel_0006.png" },
      { id: 8, image: "/images/carcustom/wheel/F-Sports-GTI---Wheel_0007.png" },
      { id: 9, image: "/images/carcustom/wheel/F-Sports-GTI---Wheel_0008.png" },
      {
        id: 10,
        image: "/images/carcustom/wheel/F-Sports-GTI---Wheel_0009.png",
      },
      {
        id: 11,
        image: "/images/carcustom/wheel/F-Sports-GTI---Wheel_0010.png",
      },
    ],
  },
  {
    id: 5,
    name: "texture",
    icon: "/images/items-texture.png",
    iconActive: "/images/items-texture-active.png",
    listCustom: [],
  },
  {
    id: 6,
    name: "WING TAIL",
    icon: "/images/items-wingtail.png",
    iconActive: "/images/items-wingtail-active.png",
    listCustom: [
      { id: 1, image: "/images/carcustom/wing/F-Sports GTI---Wing_001.png" },
      { id: 2, image: "/images/carcustom/wing/F-Sports GTI---Wing_002.png" },
      { id: 3, image: "/images/carcustom/wing/F-Sports GTI---Wing_003.png" },
      { id: 4, image: "/images/carcustom/wing/F-Sports GTI---Wing_004.png" },
      { id: 5, image: "/images/carcustom/wing/F-Sports GTI---Wing_005.png" },
      { id: 6, image: "/images/carcustom/wing/F-Sports GTI---Wing_006.png" },
      { id: 7, image: "/images/carcustom/wing/F-Sports GTI---Wing_007.png" },
    ],
  },
  {
    id: 7,
    name: "decal",
    icon: "/images/items-decal.png",
    iconActive: "/images/items-decal-active.png",
    listCustom: [
      { id: 1, image: "/images/carcustom/decal/Decal_Part_0000_Gravity_2.png" },
      { id: 2, image: "/images/carcustom/decal/Decal_Part_0001_Other.png" },
      { id: 3, image: "/images/carcustom/decal/Decal_Part_0002_Sticker2.png" },
      { id: 4, image: "/images/carcustom/decal/Decal_Part_0003_Speed.png" },
      { id: 5, image: "/images/carcustom/decal/Decal_Part_0004_Sticker.png" },
      { id: 6, image: "/images/carcustom/decal/Decal_Part_0005_Limited.png" },
      { id: 7, image: "/images/carcustom/decal/Decal_Part_0006_Gravity_1.png" },
      { id: 8, image: "/images/carcustom/decal/Decal_Part_0007_Number_3.png" },
    ],
  },
  {
    id: 8,
    name: "video",
    icon: "/images/items-video.png",
    iconActive: "/images/items-video-active.png",
    listCustom: [],
  },
];

const defaultValue = {
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
};

const Customization = ({}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [carBody, setCarbody] = useState<ICarbodyProps>(CAR_BODY?.[0]);
  const [customSelect, setCustomSelect] = useState<any>();
  const [valueCustom, setValueCustom] = useState(defaultValue);

  useEffect(() => {
    const value = {
      1: CUSTOM_DATA?.[0]?.listCustom?.[0]?.image || "",
      2: CUSTOM_DATA?.[1]?.listCustom?.[1]?.image || "",
      3: CUSTOM_DATA?.[2]?.listCustom?.[2]?.image || "",
      4: CUSTOM_DATA?.[3]?.listCustom?.[3]?.image || "",
      5: CUSTOM_DATA?.[4]?.listCustom?.[4]?.image || "",
      6: CUSTOM_DATA?.[5]?.listCustom?.[5]?.image || "",
      7: "",
    };
    setValueCustom(value);
  }, []);

  return (
    <section
      id="car-custom"
      className="customization px-4 py-10 lg:py-16 relative bg-customization bg-cover bg-center overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        <header className="px-10 relative z-10">
          <h3 className="text-center">
            <figure className="relative inline-block leading-[0px]">
              <NextImage
                alt="Racing"
                src={"/images/customization-title.png"}
                layout="intrinsic"
                width={422}
                height={58}
                quality={100}
              />
            </figure>
          </h3>
        </header>
        <div className="relative w-full lg:w-[865px] h-[555px] sm:h-[630px] md:h-[665px] lg:h-[592px] mx-auto z-20">
          <div className="absolute top-1/2 -translate-y-1/2 w-full">
            <div className="ms-tabs-body relative w-full h-full z-30">
              <div className="content-body relative overflow-hidden">
                <figure className="relative leading-[0px] w-full h-full z-10">
                  <NextImage
                    alt="Racing"
                    src={carBody?.image}
                    layout="intrinsic"
                    width={3840}
                    height={2160}
                    quality={100}
                  />
                </figure>
                <div className="content-multicustom">
                  {valueCustom?.[4] && (
                    <figure
                      id="WheelCar"
                      className="leading-[0px] w-full h-full absolute left-0 top-0 z-20"
                    >
                      <NextImage
                        alt="Racing"
                        src={valueCustom?.[4]}
                        layout="intrinsic"
                        width={3840}
                        height={2160}
                        quality={100}
                      />
                    </figure>
                  )}
                  {valueCustom?.[6] && (
                    <figure
                      id="WingCar"
                      className="leading-[0px] w-full h-full absolute left-0 top-0"
                    >
                      <NextImage
                        alt="Racing"
                        src={
                          valueCustom?.[6] ||
                          "/images/F-Sports GTI---Wing_006.png"
                        }
                        layout="intrinsic"
                        width={3840}
                        height={2160}
                        quality={100}
                      />
                    </figure>
                  )}
                  {valueCustom?.[7] && (
                    <figure
                      id="StickerCar"
                      className="leading-[0px] w-full h-full absolute left-0 top-0 z-20"
                    >
                      <NextImage
                        alt="Racing"
                        src={
                          valueCustom?.[7] ||
                          "/images/Decal_Part_0002_Sticker2.png"
                        }
                        layout="intrinsic"
                        width={3840}
                        height={2160}
                        quality={100}
                      />
                    </figure>
                  )}
                </div>
                <div className="items-center absolute left-0 bottom-0 lg:block hidden">
                  <CarInfo data={carBody} />
                </div>
                <div className="absolute right-0 bottom-0 z-50 flex">
                  <button
                    className="cursor-default carcustom__button-share flex duration-200 items-center uppercase text-xs md:text-base lg:text-xl Aguda-Black border-2 border-white hover:text-colorcs-43c8ce hover:border-colorcs-43c8ce h-8 md:h-10 lg:h-11 px-1 md:px-2 lg:px-3 ml-2"
                    // onClick={() =>
                    //   toastWarning(
                    //     "Tính năng đang bảo trì. Vui lòng thử lại sau."
                    //   )
                    // }
                  >
                    <FaFacebookF className="mr-1" />
                    Share
                  </button>
                  <button
                    className="cursor-default carcustom__button-buy flex duration-200 items-center uppercase text-xs md:text-base lg:text-xl Aguda-Black border-2 border-white hover:text-colorcs-43c8ce hover:border-colorcs-43c8ce h-8 md:h-10 lg:h-11 px-1 md:px-2 lg:px-3 ml-2"
                    // onClick={() =>
                    //   toastWarning(
                    //     "Tính năng đang bảo trì. Vui lòng thử lại sau."
                    //   )
                    // }
                  >
                    <FaShoppingCart className="mr-1" />
                    Buy car
                  </button>
                </div>
              </div>
              <div className="relative mt-5 md:mt-10">
                <div className="text-center lg:hidden block">
                  <CarInfo data={carBody} />
                </div>
                <div className="w-full md:w-1/2 mx-auto px-10 md:px-20 relative control-body mt-3 md:mt-8">
                  <button className="car__customization-select absolute -left-0 top-1/2 -translate-y-1/2 swiper-button-prev-1">
                    <figure className="w-[28px] h-[48px] sm:w-[28px] sm:h-[48px] md:w-[32px] md:h-[53px] lg:w-[40px] lg:h-[65px] relative">
                      <NextImage
                        objectFit="contain"
                        alt="Racing"
                        src="/images/main/left.png"
                        layout="fill"
                      />
                    </figure>
                  </button>
                  <button className="car__customization-select absolute -right-0 top-1/2 -translate-y-1/2 swiper-button-next-1">
                    <figure className="w-[28px] h-[48px] sm:w-[28px] sm:h-[48px] md:w-[32px] md:h-[53px] lg:w-[40px] lg:h-[65px] relative">
                      <NextImage
                        objectFit="contain"
                        alt="Racing"
                        src="/images/main/right.png"
                        layout="fill"
                      />
                    </figure>
                  </button>
                  <ul className="w-full">
                    <Swiper
                      className="swiper-bodycar"
                      modules={[Navigation, Controller]}
                      slidesPerView={3}
                      mousewheel={true}
                      loop={true}
                      centeredSlides={true}
                      slideToClickedSlide={true}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={{
                        nextEl: ".swiper-button-next-1",
                        prevEl: ".swiper-button-prev-1",
                      }}
                      onSlideChange={(e) => {
                        setCarbody(CAR_BODY?.[e?.realIndex]);
                      }}
                    >
                      {CAR_BODY?.map((item) => (
                        <SwiperSlide
                          className="flex justify-center"
                          key={"car-bd-key-x-" + item?.id}
                        >
                          <li className="inline-block text-center cursor-pointer px-5 scale-75 duration-500">
                            <div className="rou-iteimg relative w-16 h-16 rounded-full border-2 border-white hover:bg-colorcs-0f6064">
                              <figure className="absolute top-0 left-0 leading-[0px]">
                                <NextImage
                                  objectFit="cover"
                                  alt="Racing"
                                  src="/images/active-light02.png"
                                  layout="intrinsic"
                                  width={144}
                                  height={144}
                                  quality={100}
                                />
                              </figure>
                              <figure className="absolute w-full px-3 top-1/2 -translate-y-1/2 z-10 leading-[0px]">
                                <figure>
                                  <NextImage
                                    objectFit="cover"
                                    alt={"Racing"}
                                    src={item?.image}
                                    layout="intrinsic"
                                    width={107}
                                    height={83}
                                    quality={100}
                                  />
                                </figure>
                              </figure>
                            </div>
                          </li>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </ul>
                </div>
              </div>
            </div>
            <div className="control-multicustom mt-14 md:mt-0 flex flex-wrap justify-center items-center bg-colorcs-071632 bg-opacity-50 relative md:absolute left-0 top-0 md:-left-8 lg:-left-20 xl:-left-28 md:-top-10 md:h-[110%] md:w-16 border-y-[1px] md:border-y-0 md:border-x-[1px] border-colorcs-272D3C">
              <ul className="md:py-3 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent overflow-scroll max-h-full whitespace-nowrap ">
                {CUSTOM_DATA?.map((item) => (
                  <li
                    className="py-2 px-4 md:px-0 inline-block md:block"
                    key={"car-bd-key-" + item?.id}
                  >
                    <button
                      className="group relative w-full text-center"
                      onClick={() => {
                        setShowMenu(true);
                        setCustomSelect(item);
                      }}
                    >
                      <figure className="leading-[0px] group-hover:opacity-0 scale-90 duration-200">
                        <NextImage
                          className="group-hover:hidden"
                          alt="Racing"
                          src={item?.icon}
                          layout="intrinsic"
                          width={48}
                          height={49}
                          quality={100}
                        />
                      </figure>
                      <figure className="leading-[0px] absolute left-1/2 -translate-x-1/2 top-0 w-full opacity-0 group-hover:opacity-100 duration-200">
                        <NextImage
                          className="absolute left-0 top-0"
                          alt="Racing"
                          src={item?.iconActive}
                          layout="intrinsic"
                          width={48}
                          height={49}
                          quality={100}
                        />
                      </figure>
                      <h5 className="Aguda-Black uppercase text-[10px] italic group-hover:text-colorcs-FFB400 duration-200 line-clamp-1">
                        {item?.name}
                      </h5>
                    </button>
                  </li>
                ))}
              </ul>
              {showMenu && customSelect?.listCustom?.length > 0 && (
                <div
                  className={`w-full h-full absolute left-0 top-0 bg-colorcs-070D1D px-1 py-1 md:py-10 duration-300 ${
                    showMenu ? `visible opacity-100` : `invisible opacity-0`
                  }`}
                >
                  <button
                    className={`bg-colorcs-fdf600 absolute left-0 -top-6 md:relative md:top-0 md:left-0 z-10 w-full uppercase flex-wrap flex items-center justify-center Aguda-Black text-colorcs-0D0A1A text-[10px] h-6`}
                    onClick={() => {
                      setShowMenu(false);
                      setCustomSelect(null);
                    }}
                  >
                    Đóng <IoIosCloseCircleOutline className="text-xs ml-1" />
                  </button>
                  <div className="w-full h-full relative px-10 sm:px-20 md:px-0 md:py-32 flex items-center justify-center">
                    <button className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 md:translate-y-0 md:top-20 md:left-1/2 md:-translate-x-1/2 md:rotate-90 swiper-button-prev-2">
                      <figure className="w-[18px] h-[31px] relative">
                        <NextImage
                          objectFit="contain"
                          alt="Racing"
                          src="/images/main/left.png"
                          layout="fill"
                        />
                      </figure>
                    </button>
                    <button className="absolute right-2 sm:right-5 bottom-[26%] md:right-0 md:bottom-20 md:left-1/2 md:-translate-x-1/2 md:rotate-90 swiper-button-next-2">
                      <figure className="w-[18px] h-[31px] relative">
                        <NextImage
                          objectFit="contain"
                          alt="Racing"
                          src="/images/main/right.png"
                          layout="fill"
                        />
                      </figure>
                    </button>
                    <Swiper
                      className="h-full swiper-multicustom md:block hidden"
                      direction={"vertical"}
                      slidesPerView={4}
                      mousewheel={true}
                      loop={true}
                      centeredSlides={true}
                      slideToClickedSlide={true}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={{
                        nextEl: ".swiper-button-next-2",
                        prevEl: ".swiper-button-prev-2",
                      }}
                      modules={[Navigation, Controller]}
                    >
                      {customSelect?.listCustom?.map((item: any) => (
                        <SwiperSlide
                          className="flex items-center justify-center"
                          key={"car-cst-key-" + item?.id}
                        >
                          <figure
                            className="relative leading-[0px] cursor-pointer rounded-md overflow-hidden"
                            onClick={() => {
                              const value: any = { ...valueCustom };
                              value[customSelect?.id] = item?.image;
                              setValueCustom(value);
                            }}
                          >
                            <NextImage
                              alt="Racing"
                              src={item?.image || "/images/demo-custom.png"}
                              layout="intrinsic"
                              width={44}
                              height={43}
                              quality={100}
                            />
                          </figure>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <Swiper
                      className="h-full swiper-multicustom md:hidden block"
                      slidesPerView={4}
                      mousewheel={true}
                      loop={true}
                      centeredSlides={true}
                      slideToClickedSlide={true}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={{
                        nextEl: ".swiper-button-next-2",
                        prevEl: ".swiper-button-prev-2",
                      }}
                      modules={[Navigation, Controller]}
                    >
                      {customSelect?.listCustom?.map((item: any) => (
                        <SwiperSlide
                          className="flex items-center justify-center"
                          key={"car-cst-key-" + item?.id}
                        >
                          <figure
                            className="relative leading-[0px] cursor-pointer rounded-md overflow-hidden"
                            onClick={() => {
                              const value: any = { ...valueCustom };
                              value[customSelect?.id] = item?.image;
                              setValueCustom(value);
                            }}
                          >
                            <NextImage
                              alt="Racing"
                              src={item?.image || "/images/demo-custom.png"}
                              layout="intrinsic"
                              width={44}
                              height={43}
                              quality={100}
                            />
                          </figure>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customization;
