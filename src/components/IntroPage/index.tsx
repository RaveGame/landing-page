import NextImage from "@/components/BaseComponents/NextImage";
import { IImageProps } from "@/models/index";
import { toastError } from "@/utils/toast";
import { useEffect, useState } from "react";
/* import { getMediaFormat } from "@/utils/index"; */
/* import ListAppstore from "../ListAppstore/ListAppstore"; */

const IntroPage = ({
  banner,
}: {
  banner: {
    titleImage: IImageProps;
    titleImageMobile: IImageProps;
    description: string;
  };
}) => {
  const [downloadLink, setDownloadLink] = useState("");
  useEffect(() => {
    const platform = navigator.platform;
    const isWin = /(Win)/i.test(platform);
    const isMacLike = /(Mac)/i.test(platform);

    if (isWin) {
      setDownloadLink("Win");
    } else if (isMacLike) {
      if (platform === "MacIntel") {
        setDownloadLink("Mac-intel");
      } else {
        setDownloadLink("Mac-ARM");
      }
    } else {
      setDownloadLink("#");
    }
  }, []);
  // const { globalData } = useGlobalContext();
  return (
    <section className="intropage bg-colorcs-0D0A1A relative overflow-hidden">
      <div className="bg-intropage bg-cover bg-center h-[100vh] relative">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/images/video/Rave_invenom.mp4"
            type="video/mp4"
            className=" object-cover"
          />
        </video>
      </div>
      <div
        className="absolute inset-0 lg:mx-[7rem] z-10 flex"
        data-aos="fade-right"
      >
        <div className="w-full h-full lg:h-auto relative lg:absolute top-[100px] lg:top-[45%] translate-y-0 lg:-translate-y-1/2 pt-5 lg:p-0 lg:text-left text-center">
          {/* <figure className="leading-[0px] mb-5 w-[120px] mx-auto lg:mx-0 md:w-[204px]">
            <NextImage
              alt="Racing"
              src={
                globalData?.attributes?.subLogo?.data
                  ? getMediaFormat(globalData?.attributes?.subLogo)
                  : "/images/logow-rfm.png"
              }
              layout="intrinsic"
              quality={100}
              width={204}
              height={114}
            />
          </figure> */}

          {/* PC design */}
          <div>
            <figure className="leading-[0px] hidden lg:block relative left-[-2rem] 2xl:left-[-3rem] w-[35rem] 2xl:w-[unset]">
              <NextImage
                alt="Racing"
                src={
                  /* banner?.titleImage?.data
                  ? getMediaFormat(banner?.titleImage)
                  :  */ "images/logo-rfm.png"
                }
                layout="intrinsic"
                quality={100}
                width={910}
                height={240}
              />
            </figure>
            <h1 className="racesport hidden lg:block font-[400] text-white text-[23px] 2xl:text-[32px] mb-5 Race">
              RACE ON VENOM
            </h1>
          </div>
          {/* End Pc Design */}

          {/* Mobile Design */}
          <div>
            <figure className="leading-[0px] lg:hidden block">
              <NextImage
                alt="Racing"
                src={
                  /* banner?.titleImageMobile?.data
                  ? getMediaFormat(banner?.titleImageMobile)
                  :  */ "/images/logo-rfm.png"
                }
                layout="intrinsic"
                quality={100}
                width={358}
                height={94}
              />
            </figure>
            <h1 className="lg:hidden racesport font-[400] text-white text-[23px] 2xl:text-[32px] mb-8 Race">
              RACE ON VENOM
            </h1>
          </div>
          {/* End Mobile Design */}

          <h2 className="font-[200] text-[16px] text-white montserrat w-[46rem] hidden lg:block mb-[2rem] 2xl:mb-[3rem]">
            {/* {banner?.description} */}Rave is a virtual NFT car racing
            universe built on Venom. Rave replicates the real-life car racing
            experience with upgradable and customizable Rave NFTs, allowing
            ravers to race to earn.
          </h2>
          {/* <div className="absolute md:relative px-5 md:px-0 bottom-20 md:bottom-0 w-full left-0 xl:pr-52">
            <ListAppstore />
          </div> */}
          <div className="max-lg:flex justify-center items-center">
            <a
              href={downloadLink}
              className="inline-block"
              onClick={() => {
                downloadLink === "#" &&
                  toastError("Unsupported operating system", {}, 2000);
              }}
            >
              <figure className="2xl:w-[356px] w-[250px]">
                <NextImage
                  alt="Racing"
                  src={
                    /* banner?.titleImage?.data
                  ? getMediaFormat(banner?.titleImage)
                  :  */ "images/playNow.png"
                  }
                  layout="intrinsic"
                  quality={100}
                  width={356}
                  height={80}
                />
              </figure>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroPage;
