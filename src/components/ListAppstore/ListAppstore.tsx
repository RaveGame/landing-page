import NextImage from "@/components/BaseComponents/NextImage";
import { APK_CLASS, APPSTORE_CLASS, CH_CLASS } from "@/constants/index";
import { useGlobalContext } from "Context/GlobalProvider";

const ListAppstore = ({ idIos = "ios_link", idAndrd = "andrd_link" }) => {
  const { globalData } = useGlobalContext();
  const install = globalData?.attributes?.install;

  return (
    <>
      <ul className="flex-wrap -mx-1 md:-mx-2 hidden md:flex">
        <li
          className={`w-4/12 px-1 md:px-2 h-full leading-[0px] ${APPSTORE_CLASS}`}
        >
          <button className="relative group border border-white hover:border-colorcs-43c8ce duration-200 pt-[30%] w-full">
            <a
              href={install?.appStore}
              target="_blank"
              rel="noreferrer"
            >
              <figure className="absolute inset-0 leading-[0px] flex justify-center items-center p-2 md:p-5">
                <NextImage
                  src="/images/ios-store-hover.png"
                  alt="title"
                  layout="intrinsic"
                  quality={100}
                  width={181}
                  height={43}
                />
              </figure>
              <figure className="absolute inset-0 leading-[0px] flex justify-center items-center p-2 md:p-5 group-hover:hidden">
                <NextImage
                  src="/images/ios-store.png"
                  alt="title"
                  layout="intrinsic"
                  quality={100}
                  width={181}
                  height={43}
                />
              </figure>
            </a>
          </button>
        </li>
        <li className={`w-4/12 px-1 md:px-2 h-full leading-[0px] ${CH_CLASS}`}>
          <button className="relative group border border-white hover:border-colorcs-43c8ce duration-200 pt-[30%] w-full">
            <a
              href={install?.googlePlay}
              target="_blank"
              rel="noreferrer"
            >
              <figure className="absolute inset-0 leading-[0px] flex justify-center items-center p-2 md:p-5">
                <NextImage
                  src="/images/android-store-hover.png"
                  alt="title"
                  layout="intrinsic"
                  quality={100}
                  width={178}
                  height={43}
                />
              </figure>
              <figure className="absolute inset-0 leading-[0px] flex justify-center items-center p-2 md:p-5 group-hover:hidden">
                <NextImage
                  src="/images/android-store.png"
                  alt="title"
                  layout="intrinsic"
                  quality={100}
                  width={178}
                  height={43}
                />
              </figure>
            </a>
          </button>
        </li>
        <li className={`w-4/12 px-1 md:px-2 h-full leading-[0px] ${APK_CLASS}`}>
          <button className="relative group border border-white hover:border-colorcs-43c8ce duration-200 pt-[30%] w-full">
            <a href={install?.apk} target="_blank" rel="noreferrer">
              <figure className="absolute inset-0 leading-[0px] flex justify-center items-center p-2 md:p-5">
                <NextImage
                  src="/images/apk-store-hover.png"
                  alt="title"
                  layout="intrinsic"
                  quality={100}
                  width={190}
                  height={43}
                />
              </figure>
              <figure className="absolute inset-0 leading-[0px] flex justify-center items-center p-2 md:p-5 group-hover:hidden">
                <NextImage
                  src="/images/apk-store.png"
                  alt="title"
                  layout="intrinsic"
                  quality={100}
                  width={190}
                  height={43}
                />
              </figure>
            </a>
          </button>
        </li>
      </ul>
      <ul className="flex flex-wrap -mx-1 md:-mx-2 md:hidden">
        <li
          className={`w-4/12 px-1 md:px-2 h-full leading-[0px] ${APPSTORE_CLASS}`}
        >
          <button className="relative group border border-white hover:border-colorcs-43c8ce duration-200 pt-[30%] w-full">
            <a
              id={idIos}
              href={install?.appStore}
              target="_blank"
              rel="noreferrer"
            >
              <figure className="absolute inset-0 leading-[0px] flex justify-center items-center p-2 md:p-5">
                <NextImage
                  src="/images/ios-store-hover.png"
                  alt="title"
                  layout="intrinsic"
                  quality={100}
                  width={181}
                  height={43}
                />
              </figure>
              <figure className="absolute inset-0 leading-[0px] flex justify-center items-center p-2 md:p-5 group-hover:hidden">
                <NextImage
                  src="/images/ios-store.png"
                  alt="title"
                  layout="intrinsic"
                  quality={100}
                  width={181}
                  height={43}
                />
              </figure>
            </a>
          </button>
        </li>
        <li className={`w-4/12 px-1 md:px-2 h-full leading-[0px] ${CH_CLASS}`}>
          <button className="relative group border border-white hover:border-colorcs-43c8ce duration-200 pt-[30%] w-full">
            <a
              id={idAndrd}
              href={install?.googlePlay}
              target="_blank"
              rel="noreferrer"
            >
              <figure className="absolute inset-0 leading-[0px] flex justify-center items-center p-2 md:p-5">
                <NextImage
                  src="/images/android-store-hover.png"
                  alt="title"
                  layout="intrinsic"
                  quality={100}
                  width={178}
                  height={43}
                />
              </figure>
              <figure className="absolute inset-0 leading-[0px] flex justify-center items-center p-2 md:p-5 group-hover:hidden">
                <NextImage
                  src="/images/android-store.png"
                  alt="title"
                  layout="intrinsic"
                  quality={100}
                  width={178}
                  height={43}
                />
              </figure>
            </a>
          </button>
        </li>
        <li className={`w-4/12 px-1 md:px-2 h-full leading-[0px] ${APK_CLASS}`}>
          <button className="relative group border border-white hover:border-colorcs-43c8ce duration-200 pt-[30%] w-full">
            <a href={install?.apk} target="_blank" rel="noreferrer">
              <figure className="absolute inset-0 leading-[0px] flex justify-center items-center p-2 md:p-5">
                <NextImage
                  src="/images/apk-store-hover.png"
                  alt="title"
                  layout="intrinsic"
                  quality={100}
                  width={190}
                  height={43}
                />
              </figure>
              <figure className="absolute inset-0 leading-[0px] flex justify-center items-center p-2 md:p-5 group-hover:hidden">
                <NextImage
                  src="/images/apk-store.png"
                  alt="title"
                  layout="intrinsic"
                  quality={100}
                  width={190}
                  height={43}
                />
              </figure>
            </a>
          </button>
        </li>
      </ul>
    </>
  );
};

export default ListAppstore;
