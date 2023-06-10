import { useGlobalContext } from "Context/GlobalProvider";
import NextImage from "../BaseComponents/NextImage";
import { AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Navigation } from "swiper";
import { IImageProps } from "@/models/index";
import { getMediaFormat } from "@/utils/index";

const Collection = ({
  data,
}: {
  data: Array<{
    id: number;
    name: string;
    star: number;
    image: IImageProps;
    properties: {
      acceleration: number;
      handling: number;
      power: number;
      speed: number;
    };
  }>;
}) => {
  const { locale } = useGlobalContext();

  return (
    <section id="collec" className="py-10 lg:py-16 relative HelveticaNeue-Bold">
      <div className="absolute inset-0">
        <NextImage
          src={"/images/main/collection-bg.jpg"}
          layout="fill"
          alt="collection-bg"
        />
      </div>
      <div className="container mx-auto relative">
        <header className="text-center mb-8 sm:mb-16 px-10">
          <figure className="relative inline-block leading-[0px]">
            <NextImage
              alt="title"
              src={"/images/collection-title.png"}
              layout="intrinsic"
              width={422}
              height={58}
              quality={100}
            />
          </figure>
        </header>
        <div
          className="w-full xl:w-[1200px] mx-auto px-4 sm:px-10 md:px-16 lg:px-[116px]"
          data-aos="zoom-in"
        >
          <button className="car__collection-select absolute left-0 md:-left-4 bottom-16 sm:top-1/2 lg:-translate-y-[7%] swiper-button-prev-4 scale-95 hover:scale-105 duration-300">
            <figure className="w-[28px] h-[48px] sm:w-[28px] sm:h-[48px] md:w-[32px] md:h-[53px] lg:w-[48px] lg:h-[79px] relative">
              <NextImage
                objectFit="contain"
                alt="title"
                src="/images/main/left.png"
                layout="fill"
              />
            </figure>
          </button>
          <button className="car__collection-select absolute right-0 md:-right-4 bottom-16 sm:top-1/2 lg:-translate-y-[7%] swiper-button-next-4 scale-95 hover:scale-105 duration-300">
            <figure className="w-[28px] h-[48px] sm:w-[28px] sm:h-[48px] md:w-[32px] md:h-[53px] lg:w-[48px] lg:h-[79px] relative">
              <NextImage
                objectFit="contain"
                alt="title"
                src="/images/main/right.png"
                layout="fill"
              />
            </figure>
          </button>

          <Swiper
            modules={[Navigation, Controller]}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-4",
              prevEl: ".swiper-button-prev-4",
            }}
            centeredSlides
            observer
            observeParents
            loop
            slideToClickedSlide={true}
            onSlideChange={(e) => {}}
            key={locale}
            style={{ margin: "0 15px" }}
            className="car-collection-sw"
          >
            {data?.map((item) => (
              <SwiperSlide key={"h-cl-key-" + item?.id}>
                <div className="grid sm:grid-cols-2 sm:gap-4 md:gap-4 lg:gap-8">
                  <div className="flex sm:items-end items-center">
                    <NextImage
                      objectFit="contain"
                      alt={item?.name}
                      src={
                        getMediaFormat(item?.image) ||
                        "/images/main/cardemo.png"
                      }
                      layout="intrinsic"
                      width={743}
                      height={400}
                      quality={100}
                    />
                  </div>
                  <div className="flex flex-col sm:px-0 sm:mt-0 mt-6">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="uppercase text-[24px] md:text-[28px] lg:text-[32px] xl:text-[42px] font-bold">
                        {item?.name}
                      </h4>
                      <div className="grid grid-cols-5 min-w-[100px] md:min-w-[140px] lg:min-w-[180px]">
                        {Array(5)
                          .fill(1)
                          ?.map((ite, index) => {
                            if (index < item?.star) {
                              return (
                                <AiFillStar
                                  color="#ffc107"
                                  className="w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9"
                                  key={"star-key-h-" + index}
                                />
                              );
                            }
                            return (
                              <AiFillStar
                                className="w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9"
                                key={"star-key-h-" + index}
                              />
                            );
                          })}
                      </div>
                    </div>
                    <ul className="mt-3 md:mt-4 lg:mt-5 ml-1 mr-1">
                      <li className="mb-3 md:mb-4 lg:mb-5 last:mb-0">
                        <span className="uppercase font-bold text-[12px] md:text-[15px] lg:text-[17px]">
                          Power
                        </span>
                        <div className="w-full bg-black h-3 sm:h-4 md:h-4 relative mt-[2px]">
                          <span
                            className={`h-full absolute left-0 top-0 bg-white properties`}
                            style={{
                              width: `${item?.properties?.power}%`,
                            }}
                          />
                        </div>
                      </li>
                      <li className="mb-3 md:mb-4 lg:mb-5 last:mb-0">
                        <span className="uppercase font-bold text-[12px] md:text-[15px] lg:text-[17px]">
                          acceleration
                        </span>
                        <div className="w-full bg-black h-3 sm:h-4 md:h-4 relative mt-[2px]">
                          <span
                            className={`h-full absolute left-0 top-0 bg-white properties`}
                            style={{
                              width: `${item?.properties?.acceleration}%`,
                            }}
                          />
                        </div>
                      </li>
                      <li className="mb-3 md:mb-4 lg:mb-5 last:mb-0">
                        <span className="uppercase font-bold text-[12px] md:text-[15px] lg:text-[17px]">
                          top speed
                        </span>
                        <div className="w-full bg-black h-3 sm:h-4 md:h-4 relative mt-[2px]">
                          <span
                            className={`h-full absolute left-0 top-0 bg-white properties`}
                            style={{
                              width: `${item?.properties?.speed}%`,
                            }}
                          />
                        </div>
                      </li>
                      <li className="mb-3 md:mb-4 lg:mb-5 last:mb-0">
                        <span className="uppercase font-bold text-[12px] md:text-[15px] lg:text-[17px]">
                          handling
                        </span>
                        <div className="w-full bg-black h-3 sm:h-4 md:h-4 relative mt-[2px]">
                          <span
                            className={`h-full absolute left-0 top-0 bg-white properties`}
                            style={{
                              width: `${item?.properties?.handling}%`,
                            }}
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center gap-7 sm:hidden mt-7">
            <button className="swiper-button-prev-4">
              <figure className="w-[28px] h-[48px] relative">
                <NextImage
                  objectFit="contain"
                  alt="title"
                  src="/images/main/left.png"
                  layout="fill"
                />
              </figure>
            </button>
            <button className="swiper-button-next-4">
              <figure className="w-[28px] h-[48px] relative">
                <NextImage
                  objectFit="contain"
                  alt="title"
                  src="/images/main/right.png"
                  layout="fill"
                />
              </figure>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
