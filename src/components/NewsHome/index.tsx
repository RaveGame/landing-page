import React from "react";
import NextImage from "@/components/BaseComponents/NextImage";
import { ItemsNews } from "./ItemsNews";
import { BsPlusCircle } from "react-icons/bs";
import { INewProps } from "@/models/index";
import Link from "next/link";
import { NEWS_CLASS } from "@/constants/index";

const NewsHome = ({
  newData,
}: {
  newData: {
    data: Array<INewProps>;
  };
}) => {
  return (
    <section
      id="new"
      className="newshome relative bg-colorcs-0D1A36 overflow-hidden"
    >
      <figure
        className="leading-[0px] w-[606px] lg:block hidden absolute left-0 top-10 z-10"
        data-aos="fade-right"
      >
        <NextImage
          alt="Racing"
          src="/images/cto-01-rfm.png"
          layout="intrinsic"
          quality={100}
          width={606}
          height={1672}
        />
      </figure>
      <figure
        className="leading-[0px] w-[522px] lg:block hidden absolute right-0 top-10 z-10"
        data-aos="fade-left"
      >
        <NextImage
          alt="Racing"
          src="/images/cto-02-rfm.png"
          layout="intrinsic"
          quality={100}
          width={522}
          height={898}
        />
      </figure>
      <figure className="leading-[0px] w-[996px] absolute left-0 top-0">
        <NextImage
          alt="Racing"
          src="/images/pattern03-rfm.png"
          layout="intrinsic"
          quality={100}
          width={996}
          height={375}
        />
      </figure>
      <figure className="leading-[0px] w-[981px] absolute right-0 bottom-0">
        <NextImage
          alt="Racing"
          src="/images/pattern04-rfm.png"
          layout="intrinsic"
          quality={100}
          width={981}
          height={299}
        />
      </figure>
      <div className="container relative px-2 xl:px-52 py-10 lg:py-20 mx-auto z-20">
        <header className="mb-8 sm:mb-16 px-10">
          <h3 className="text-center">
            <figure className="relative inline-block leading-[0px]">
              <NextImage
                alt="title"
                src={"/images/news-title.png"}
                layout="intrinsic"
                width={422}
                height={58}
                quality={100}
              />
            </figure>
          </h3>
        </header>
        <div className="relative">
          <ul className="flex flex-wrap -mx-1 md:-mx-2">
            {newData?.data?.map((item) => (
              <ItemsNews
                key={item?.id}
                item={item}
                hid={newData?.data?.length > 3}
              />
            ))}
          </ul>
          <Link href="/new">
            <a
              className={`Aguda-Regular text-xs lg:text-base bg-colorcs-0D1A36 border border-white hover:border-colorcs-43c8ce hover:text-colorcs-43c8ce duration-200 p-2 lg:p-5 w-full uppercase flex flex-col items-center justify-center ${NEWS_CLASS}`}
            >
              <BsPlusCircle className="text-lg lg:text-2xl mb-1 lg:mb-2" /> MORE
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsHome;
