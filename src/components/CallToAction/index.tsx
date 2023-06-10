import React, { useState } from "react";
import NextImage from "@/components/BaseComponents/NextImage";
import { useGlobalContext } from "Context/GlobalProvider";
import { getMediaFormat } from "@/utils/index";
import {
  APK_CLASS,
  APPSTORE_CLASS,
  CH_CLASS,
  SUPPORT_CLASS,
} from "@/constants/index";

const CallToAction = () => {
  const { globalData } = useGlobalContext();
  const install = globalData?.attributes?.install;
  const [hide, setHide] = useState(false);
  return (
    <aside
      className={`w-[200px] h-[606px] fixed right-1 top-1/2 -translate-y-1/2 z-40 pt-48 text-center lg:block hidden duration-300 transition-all ${
        hide ? `translate-x-[90%]` : ``
      }`}
    >
      <button
        className={`absolute -left-5 top-36 z-10 duration-200 ${
          hide ? `rotate-180` : ``
        }`}
        onClick={() => setHide((pre) => !pre)}
      >
        <figure className="leading-[0px] relative w-[35px]">
          <NextImage
            alt="Racing"
            src="/images/btn-showhide.png"
            layout="intrinsic"
            quality={100}
            width={70}
            height={70}
          />
        </figure>
      </button>
      <div className="absolute inset-0">
        <NextImage
          alt="Racing"
          src={
            install?.backgroundImage?.data
              ? getMediaFormat(install?.backgroundImage)
              : "/images/bg-calltoaction.png"
          }
          layout="fill"
        />
      </div>
      <div className="leading-[0px] mb-2 mt-1 hover:scale-105 duration-300 w-[157px] h-[157px] mx-auto relative z-[2] overflow-hidden p-2 bg-white">
        <div id="my_qr_code_div_id" />
      </div>
      <button
        className={`leading-[0px] mb-2 hover:scale-105 duration-300 ${CH_CLASS}`}
      >
        <a
          id="fix_andrd_link"
          href={install?.googlePlay}
          target={"_blank"}
          rel="noreferrer"
          className="md:hidden"
        >
          <NextImage
            alt="Racing"
            src="/images/android.png"
            layout="intrinsic"
            quality={100}
            width={156}
            height={42}
          />
        </a>
        <a
          href={install?.googlePlay}
          target={"_blank"}
          rel="noreferrer"
          className="md:block hidden"
        >
          <NextImage
            alt="Racing"
            src="/images/android.png"
            layout="intrinsic"
            quality={100}
            width={156}
            height={42}
          />
        </a>
      </button>
      <button
        className={`leading-[0px] mb-2 hover:scale-105 duration-300 ${APPSTORE_CLASS}`}
      >
        <a
          id="fix_ios_link"
          href={install?.appStore}
          target={"_blank"}
          rel="noreferrer"
          className="md:hidden"
        >
          <NextImage
            alt="Racing"
            src="/images/ios.png"
            layout="intrinsic"
            quality={100}
            width={156}
            height={43}
          />
        </a>
        <a
          href={install?.appStore}
          target={"_blank"}
          rel="noreferrer"
          className="md:block hidden"
        >
          <NextImage
            alt="Racing"
            src="/images/ios.png"
            layout="intrinsic"
            quality={100}
            width={156}
            height={43}
          />
        </a>
      </button>
      <button
        className={`leading-[0px] mb-2 hover:scale-105 duration-300 ${APK_CLASS}`}
      >
        <a href={install?.apk} target={"_blank"} rel="noreferrer">
          <NextImage
            alt="Racing"
            src="/images/apk.png"
            layout="intrinsic"
            quality={100}
            width={156}
            height={43}
          />
        </a>
      </button>
      <button
        className={`leading-[0px] hover:scale-105 duration-300 ${SUPPORT_CLASS}`}
      >
        <a href={install?.support} target={"_blank"} rel="noreferrer">
          <NextImage
            alt="Racing"
            src="/images/btn-support.png"
            layout="intrinsic"
            quality={100}
            width={158}
            height={62}
          />
        </a>
      </button>
    </aside>
  );
};

export default CallToAction;
