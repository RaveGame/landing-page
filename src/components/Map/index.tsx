// import { useGlobalContext } from "Context/GlobalProvider";
// import { Controller, Navigation, Pagination, EffectCoverflow } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
import NextImage from "../BaseComponents/NextImage";
// import * as ReactDOMServer from "react-dom/server";
import { IImageProps, IMapProps } from "@/models/index";
import { useEffect, useState } from "react";
import { MAP_CLASS } from "@/constants/index";

const Map = ({
  maps,
}: {
  maps: {
    titleImage: IImageProps;
    maps: Array<IMapProps>;
  };
}) => {
  // const { locale } = useGlobalContext();
  const mapBtnData = [
    {
      id: 0,
      name: "CHAPTER 1",
      image: "/images/btn_map_img.png",
    },
    {
      id: 1,
      name: "CHAPTER 2",
      image: "/images/btn_map_img.png",
    },
    {
      id: 2,
      name: "CHAPTER 3",
      image: "/images/btn_map_img.png",
    },
    {
      id: 3,
      name: "CHAPTER 4",
      image: "/images/btn_map_img.png",
    },
    {
      id: 4,
      name: "CHAPTER 5",
      image: "/images/btn_map_img.png",
    },
    /* {
      id: 5,
      name: "CHAPTER 6",
      image: "/images/btn_map_img.png"
    }, */
  ];

  const [active, setActive] = useState(mapBtnData[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const res = mapBtnData.findIndex((item) => item?.id === active?.id);
    setIndex(res);
  }, [active /* , maps?.maps */]);

  return (
    <section
      id="map"
      className=" px-[1rem] md:px-[64px] pt-[5rem] pb-[6rem] lg:pt-[5rem] lg:pb-[10rem] relative HelveticaNeue-Bold"
    >
      <div className="absolute inset-0">
        <NextImage
          src={"/images/main/map-bg-1.png"}
          layout="fill"
          alt="collection-bg"
          objectFit="cover"
        />
      </div>
      <div className="absolute inset-0">
        <NextImage
          src={"/images/main/map-bg-2-cop.png"}
          layout="fill"
          alt="collection-bg"
          objectFit="cover"
        />
      </div>
      <div className="container mx-auto relative">
        <header className="text-center mb-8 sm:mb-16 px-10">
          <figure
            data-aos="fade-down"
            data-aos-duration="500"
            className="relative inline-block leading-[0px] w-[150px] md:w-[150px] lg:w-[312px]"
          >
            <NextImage
              alt="title"
              src={"/images/map-title.png"}
              layout="intrinsic"
              width={312}
              height={55}
              quality={100}
            />
          </figure>
        </header>
        <div className="w-full xl:w-[1120px] mx-auto relative">
          <div className="w-full overflow-hidden scrollbar mb-5">
            <ul className="grid grid-cols-5 gap-3 place-items-center !w-[70rem] lg:!w-full p-[0.5rem]">
              {mapBtnData.map((item) => (
                <li
                  className={`z-10 rounded-[10.67px] map__button-select item-ctrl relative !m-0 w-full cursor-pointer !h-[120.5px] lg:!h-[108px] xl:!h-[120.5px] ${
                    active?.id === item?.id
                      ? `active border-[4px] lg:border-[3px] xl:border-[4px] border-solid !border-white 
                    map_btn-highlight`
                      : ``
                  } ${MAP_CLASS}`}
                  key={"h-maps-key-" + item?.id}
                  onClick={() => setActive(item)}
                >
                  <div className="w-full h-full rounded-[10.67px]">
                    <figure className="absolute top-0 left-0 w-full h-full rounded-[10.67px]">
                      <img
                        alt={"err"}
                        src={item.image}
                        className="inline-block w-full h-full object-cover rounded-[7px]"
                      />
                    </figure>
                    <div className="flex flex-col absolute inset-0 bottom-[1.5rem] justify-center items-center z-10">
                      <h4 className="racesport uppercase text-[24px] lg:text-lg xl:text-[24px] text-white text-center line-clamp-2">
                        {item.name}
                      </h4>
                      {/* <p className="uppercase Aguda-Regular text-white text-center line-clamp-2 text-[10px] sm:text-[11px] md:text-[13px] lg:text-base">
                        {item?.lapDescription}
                      </p> */}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[10.67px] relative">
            <div className="ms-fullmap relative">
              {/* <figure className="leading-[0px] relative rounded-[10.67px]">
                <NextImage
                  src={"/images/fullmap-grey.png"}
                  layout="intrinsic"
                  objectFit="cover"
                  quality={100}
                  width={4592}
                  height={2260}
                  className="rounded-[10.67px]"
                />
              </figure> */}

              <figure
                className={`${
                  index === 0 && "!opacity-100"
                } opacity-0 leading-[0px] relative
                 rounded-[10.67px]`}
              >
                <NextImage
                  src={"/images/Maps/chapter1.png"}
                  layout="intrinsic"
                  objectFit="cover"
                  quality={100}
                  width={4592}
                  height={2260}
                  className="rounded-[10.67px]"
                />
              </figure>

              <figure
                className={`${
                  index === 1 && "!opacity-100"
                } opacity-0 leading-[0px] absolute top-0 rounded-[10.67px]`}
              >
                <NextImage
                  src={"/images/Maps/chapter2.png"}
                  layout="intrinsic"
                  objectFit="cover"
                  quality={100}
                  width={4592}
                  height={2260}
                  className="rounded-[10.67px]"
                />
              </figure>

              <figure
                className={`${
                  index === 2 && "!opacity-100"
                } opacity-0 leading-[0px] absolute top-0 rounded-[10.67px]`}
              >
                <NextImage
                  src={"/images/Maps/chapter3.png"}
                  layout="intrinsic"
                  objectFit="cover"
                  quality={100}
                  width={4592}
                  height={2260}
                  className="rounded-[10.67px]"
                />
              </figure>

              <figure
                className={`${
                  index === 3 && "!opacity-100"
                } opacity-0 leading-[0px] absolute top-0 rounded-[10.67px]`}
              >
                <NextImage
                  src={"/images/Maps/chapter4.png"}
                  layout="intrinsic"
                  objectFit="cover"
                  quality={100}
                  width={4592}
                  height={2260}
                  className="rounded-[10.67px]"
                />
              </figure>

              <figure
                className={`${
                  index === 4 && "!opacity-100"
                } opacity-0 leading-[0px] absolute top-0 rounded-[10.67px]`}
              >
                <NextImage
                  src={"/images/Maps/chapter5.png"}
                  layout="intrinsic"
                  objectFit="cover"
                  quality={100}
                  width={4592}
                  height={2260}
                  className="rounded-[10.67px]"
                />
              </figure>
              {/* {index === 5 && (
                <article className="absolute left-[17.7%] top-[58%] w-[22.8%]">
                  <figure className="leading-[0px] relative z-10">
                    <NextImage
                      src={"/images/C6.png"}
                      layout="intrinsic"
                      objectFit="cover"
                      alt="title"
                      quality={100}
                      width={1065}
                      height={864}
                    />
                  </figure>
                </article>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </section>

    // <section
    //   id="map"
    //   className="px-4 py-10 lg:py-16 relative HelveticaNeue-Bold"
    // >
    //   <div className="absolute inset-0">
    //     <NextImage
    //       src={"/images/main/map-bg-1.png"}
    //       layout="fill"
    //       alt="collection-bg"
    //       objectFit="cover"
    //     />
    //   </div>
    //   <div className="absolute inset-0">
    //     <NextImage
    //       src={"/images/main/map-bg-2.png"}
    //       layout="fill"
    //       alt="collection-bg"
    //       objectFit="cover"
    //     />
    //   </div>
    //   <div className="container mx-auto relative">
    //     <header className="text-center mb-12 sm:mb-24">
    //       <figure>
    //         <NextImage
    //           objectFit="contain"
    //           alt="title"
    //           src={"/images/main/map-title.png"}
    //           layout="intrinsic"
    //           width={743}
    //           height={70}
    //           quality={100}
    //         />
    //       </figure>
    //     </header>
    //     <div className="w-full xl:w-[1120px] mx-auto sm:px-8 md:px-10 lg:px-16 relative">
    //       <button className="absolute -bottom-2 sm:bottom-1/2 sm:translate-y-1/2 left-10 sm:-left-4 swiper-button-prev-5 scale-95 hover:scale-105 duration-300 z-[2]">
    //         <figure className="w-[28px] h-[48px] md:w-[32px] md:h-[53px] lg:w-[48px] lg:h-[79px] relative">
    //           <NextImage
    //             objectFit="contain"
    //             alt="btn-left"
    //             src="/images/main/left.png"
    //             layout="fill"
    //           />
    //         </figure>
    //       </button>
    //       <button className="absolute -bottom-2 sm:bottom-1/2 sm:translate-y-1/2 right-10 sm:-right-4 swiper-button-next-5 scale-95 hover:scale-105 duration-300 z-[2]">
    //         <figure className="w-[28px] h-[48px] md:w-[32px] md:h-[53px] lg:w-[48px] lg:h-[79px] relative">
    //           <NextImage
    //             objectFit="contain"
    //             alt="btn-right"
    //             src="/images/main/right.png"
    //             layout="fill"
    //           />
    //         </figure>
    //       </button>

    //       <div className="w-full overflow-hidden scrollbar">
    //         <ul className="custom-swiper-pagination swpier-custom-pagination grid grid-cols-5 gap-3 place-items-center !w-[576px] sm:!w-full"></ul>
    //       </div>
    //       <Swiper
    //         effect={"coverflow"}
    //         modules={[Pagination, Navigation, Controller, EffectCoverflow]}
    //         slidesPerView={1}
    //         navigation={{
    //           nextEl: ".swiper-button-next-5",
    //           prevEl: ".swiper-button-prev-5",
    //         }}
    //         coverflowEffect={{
    //           rotate: 90,
    //           depth: 3000,
    //           modifier: 1,
    //           slideShadows: false,
    //         }}
    //         speed={500}
    //         pagination={{
    //           el: ".custom-swiper-pagination",
    //           clickable: true,
    //           bulletActiveClass: "active",
    //           renderBullet: function (index, className) {
    //             const item = maps?.maps?.[index];
    //             return ReactDOMServer.renderToStaticMarkup(
    //               <li className="swiper-pagination-bullet item-ctrl relative !m-0 border-2 border-white w-full cursor-pointer active !h-[62px] md:!h-[74.5px] lg:!h-[108px] xl:!h-[120.5px]">
    //                 <div className="w-full h-full">
    //                   <figure className="absolute top-0 left-0 w-full h-full">
    //                     <img
    //                       alt="title"
    //                       src={
    //                         item?.thumbImage?.data
    //                           ? getMediaFormat(item?.thumbImage)
    //                           : "/images/main/map-item-img.png"
    //                       }
    //                       className="inline-block w-full h-full object-cover"
    //                     />
    //                   </figure>
    //                   <div className="flex flex-col absolute inset-0 justify-center items-center z-10">
    //                     <h4 className="uppercase Aguda-Regular text-[13px] md:text-base lg:text-lg xl:text-2xl text-white text-center line-clamp-1">
    //                       {item?.lapName}
    //                     </h4>
    //                     <p className="uppercase Aguda-Regular text-[10px] md:text-xs xl:text-sm text-white text-center line-clamp-2">
    //                       {item?.lapDescription}
    //                     </p>
    //                   </div>
    //                 </div>
    //               </li>
    //             );
    //           },
    //         }}
    //         centeredSlides
    //         observer
    //         observeParents
    //         loop
    //         spaceBetween={10}
    //         slideToClickedSlide={true}
    //         onSlideChange={(e) => {}}
    //         key={locale}
    //         className="mt-5"
    //       >
    //         {maps?.maps?.map((item) => (
    //           <SwiperSlide key={item?.id}>
    //             <>
    //               <div className="border border-white relative">
    //                 <img
    //                   alt="title"
    //                   src="/images/main/map-show.png"
    //                   className="object-contain"
    //                 />
    //                 <h5 className="uppercase Aguda-Regular text-[13px] sm:text-base md:text-lg lg:text-2xl xl:text-[28px] font-bold text-white max-w-[270px] absolute bottom-5 left-5">
    //                   {item?.description}
    //                 </h5>
    //               </div>
    //               <h4 className="uppercase Aguda-Regular text-2xl md:text-[36px] lg:text-[44px] xl:text-[56px] font-bold text-white text-center mt-6 px-20">
    //                 {item?.name}
    //               </h4>
    //             </>
    //           </SwiperSlide>
    //         ))}
    //       </Swiper>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Map;
