import NextImage from "@/components/BaseComponents/NextImage";
import { getMediaFormat } from "@/utils/index";
import { useGlobalContext } from "Context/GlobalProvider";
import ListAppstore from "../ListAppstore/ListAppstore";

const InstallAppstore = () => {
  const { globalData } = useGlobalContext();

  return (
    <section
      id="download"
      className="install-app relative bg-black overflow-hidden"
    >
      <div className="container relative px-2 xl:px-52 py-10 lg:py-20 mx-auto z-10">
        <header className="mb-2 lg:mb-10 px-10">
          <h3 className="text-center">
            <figure className="relative inline-block leading-[0px]">
              <NextImage
                alt="title"
                src={"/images/dowload-title.png"}
                layout="intrinsic"
                width={422}
                height={58}
                quality={100}
              />
            </figure>
          </h3>
        </header>
        <div className="pr-0 lg:pr-[240px] relative">
          <figure className="leading-[0px] mx-auto mb-5 lg:mb-0 relative lg:absolute right-0 bottom-0 w-[110px] lg:w-[201px]">
            <NextImage
              alt="Racing"
              src={
                globalData?.attributes?.logo?.data
                  ? getMediaFormat(globalData?.attributes?.logo, "small")
                  : "/images/logo-rfm.png"
              }
              layout="intrinsic"
              quality={100}
              width={201}
              height={201}
            />
          </figure>
          <ListAppstore idAndrd="bt_andrd_link" idIos="bt_ios_link" />
        </div>
      </div>
    </section>
  );
};

export default InstallAppstore;
