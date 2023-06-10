import NextImage from "@/components/BaseComponents/NextImage";
import IconDiscord from "../../../public/Icon/iconDiscord";
import IconTwitter from "../../../public/Icon/IconTwitter";
/* import IconZealy from "../../../public/Icon/iconZealy"; */
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050508] montserrat pt-[2.5rem] lg:pt-[6rem] pb-[5rem] lg:pb-[3rem] px-[1rem] sm:px-[3rem] lg:px-[4rem] xl:px-[9rem]">
      <div className="max-w-[65rem] mx-auto">
        <div className="flex justify-center mb-[2.5rem] lg:hidden">
          <h1 className="text-[white] font-[800] text-[24px] text-center">
            ICONIC BRAND SPONSOR
          </h1>
        </div>
        <div className="lg:flex-row flex items-center lg:items-start justify-between mb-[3rem] lg:mb-[5rem] flex-col">
          <div className="mb-[3rem] lg:mb-0">
            <p className="text-white text-[16px] lg:text-[32px] font-[600] mb-[2.5rem]">
              A game by
            </p>
            <figure className="w-[278px] md:w-[348.66px] md:h-[160.18px]">
              <NextImage
                alt="Racing"
                src={
                  /* banner?.titleImage?.data
                  ? getMediaFormat(banner?.titleImage)
                  :  */ "images/game-by.png"
                }
                layout="intrinsic"
                quality={100}
                width={348.66}
                height={160.18}
              />
            </figure>
          </div>
          <div>
            <p className="text-white text-[16px] lg:text-[32px] font-[600] mb-[1rem]">
              Build on
            </p>
            <figure className="w-[278px] md:w-[408px] md:h-[181px]">
              <NextImage
                alt="Racing"
                src={
                  /* banner?.titleImage?.data
                  ? getMediaFormat(banner?.titleImage)
                  :  */ "images/build-on.png"
                }
                layout="intrinsic"
                quality={100}
                width={408}
                height={181}
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="flex justify-between max-w-[100rem] mx-auto">
        <div className="flex gap-[0.5rem] md:gap-[1rem] lg:gap-[3rem] flex-col lg:flex-row">
          <Link href="/">
            <a className="text-[#A7AFAF] font-[400] text-[20px] hover:text-white transition-all">
              © 2023 RAVE
            </a>
          </Link>

          <a
            href="https://docs.ravegame.net/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-[#A7AFAF] font-[400] text-[20px] hover:text-white transition-all"
          >
            Docs
          </a>

          {/* <Link href="/">
            <a className="text-[#A7AFAF] font-[400] text-[20px] hover:text-white transition-all">
              Privacy Policy
            </a>
          </Link> */}
        </div>
        <div className="flex gap-[2rem]">
          <a
            href="https://discord.gg/PKJkPaykMC"
            target="_blank"
            rel="noopener noreferrer"
            className="footer_icon_item"
          >
            <IconDiscord />
          </a>
          <a
            href="https://twitter.com/ravegamenft"
            target="_blank"
            rel="noopener noreferrer"
            className="footer_icon_item"
          >
            <IconTwitter />
          </a>
          {/* <a
            href="https://zealy.io/c/ravegamenft/questboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconZealy className="w-[1.5rem] h-[1.5rem]" />
          </a> */}
        </div>
      </div>
    </footer>
  );
}
