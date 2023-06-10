import NextImage from "@/components/BaseComponents/NextImage";
import Hamberger from "@/components/Hamberger";
import { formatWallet, scrollToEl } from "@/utils/index";
import useToggleSidebar from "hooks/useToggleSidebar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";
import React, { useState } from "react";
import { navLink } from "@/constants/index";
import { useVenom } from "Context/useVenom";
import IconDiscord from "../../../public/Icon/iconDiscord";
import IconTwitter from "../../../public/Icon/IconTwitter";
import { toastSuccess } from "@/utils/toast";

export default function Nav() {
  const { closeSidebar } = useToggleSidebar();
  const [activeId, setActiveId] = useState("");

  const router = useRouter();

  useEffect(() => {
    const cb = () => {
      if (window.innerWidth > 1140) {
        closeSidebar();
      }
    };
    window.addEventListener("resize", cb);
    return () => window.removeEventListener("resize", cb);
  }, [closeSidebar]);

  useEffect(() => {
    if (!window) return;
  }, [closeSidebar]);

  const handlerClickNav = (elId = "") => {
    if (router?.pathname !== "/") {
      router?.push("/");
      setTimeout(() => scrollToEl(elId), 1100);
      return;
    }
    scrollToEl(elId);
  };

  // eslint-disable-next-line no-unused-vars
  const { isInitializing, account, provider, login, logout, isConnected } =
    useVenom();

  return (
    <nav className="bg-colorcs-headerBg h-[77px] backdrop-blur-[8px] z-40 fixed w-full left-0 top-0 Aguda-Regular shadow-2xl">
      <div className="mx-[16px] sm:mx-[64px] relative h-full flex flex-wrap justify-between items-center lg:pl-[150px]">
        <div
          className="bg-overlay-sidebar cursor-pointer fixed lg:hidden top-[77px] left-0 h-screen w-screen z-10 bg-[#00000090]"
          onClick={closeSidebar}
        ></div>
        {/* Nav Logo */}
        <h1 className="ms-logo absolute left-0 z-20">
          <Link href="/">
            <a title="Racing" onClick={() => setActiveId("")}>
              <figure className="relative leading-[0px]">
                <NextImage
                  alt="Racing"
                  src={"/images/logo-rfm.png"}
                  layout="intrinsic"
                  width={129}
                  height={34}
                />
              </figure>
            </a>
          </Link>
        </h1>
        {/* End Nav Logo */}

        {/* Nav list */}
        <ul className="sidebar bg-[#09BA8E] z-30 opacity-0 invisible 2xl:visible 2xl:opacity-100 2xl:bg-transparent fixed 2xl:relative top-[77px] 2xl:top-0 left-0 flex flex-wrap text-base 2xl:text-xl h-auto 2xl:h-full 2xl:w-auto w-full 2xl:bg-none uppercase ml-0 2xl:ml-10">
          {isConnected && (
            <li
              className={`2xl:hidden block w-full relative 2xl:w-auto h-auto lg:h-full`}
            >
              <button
                className={`text-[18px] font-[700] montserrat text-black w-full montserrat flex justify-center px-5 py-5 2xl:py-0 2xl:px-10 flex-wrap items-center h-full 2xl:hover:bg-transparent duration-200`}
              >
                {formatWallet(account)}
              </button>
            </li>
          )}

          {navLink?.map((item) => (
            <li
              className={`w-full relative 2xl:w-auto h-auto lg:h-full ${
                item?.id === 5 && "2xl:hidden"
              }`}
              key={item?.id}
              onClick={() =>
                item?.id === 5 && (!isConnected ? login() : logout())
              }
            >
              {item?.id === 4 && (
                <Link href="/" passHref>
                  <button
                    className={`w-full montserrat flex justify-center text-white font-[800] text-[18px] italic px-5 py-5 2xl:py-0 4xl:px-10 flex-wrap items-center h-full hover:text-[#5AD4B4] 2xl:hover:bg-transparent duration-200 ${
                      item?.class ? item?.class : ``
                    } ${
                      item?.elId === activeId /* ||
                item?.paths?.includes(router?.pathname) */
                        ? `lg:active`
                        : ``
                    }`}
                    title={item?.name}
                    onClick={() => {
                      handlerClickNav(item?.elId);
                      closeSidebar();
                      setActiveId(item?.elId);
                      toastSuccess("Coming soon", {}, 3000, false);
                    }}
                  >
                    {item?.name}
                    <span className="hidden 2xl:inline-block text-[0.7rem] absolute top-[0.7rem] left-[5.5rem] 4xl:left-[7rem] w-[5rem]">
                      Coming soon
                    </span>
                  </button>
                </Link>
              )}
              <button
                className={`${
                  item?.id === 4 && "hidden"
                } w-full montserrat flex justify-center text-white font-[800] text-[18px] italic px-5 py-5 2xl:py-0 4xl:px-10 flex-wrap items-center h-full hover:text-[#5AD4B4] 2xl:hover:bg-transparent duration-200 ${
                  item?.class ? item?.class : ``
                } ${
                  item?.elId === activeId /* ||
                item?.paths?.includes(router?.pathname) */
                    ? `lg:active`
                    : ``
                }`}
                title={item?.name}
                onClick={() => {
                  handlerClickNav(item?.elId);
                  closeSidebar();
                  setActiveId(item?.elId);
                }}
              >
                {item?.id === 5
                  ? !isConnected
                    ? "Connect Wallet"
                    : "Disconnect"
                  : item?.name}
              </button>
            </li>
          ))}
        </ul>
        {/* End Nav list */}

        {/*  Connect and Social btn */}
        <div className="hidden 2xl:flex items-center gap-[2rem] 2xl:gap-[4.5rem] group text-sm min-w-[80px] lg:min-w-[150px] absolute right-20 lg:right-0">
          {isConnected ? (
            <div className="flex items-center">
              <div>
                <p className="font-[600] text-[18px] mr-[2.5rem]">
                  {formatWallet(account)}
                </p>
              </div>
              <button onClick={() => logout()}>
                <NextImage
                  alt="Racing"
                  src={"/images/btn-bg.png"}
                  layout="intrinsic"
                  width={200}
                  height={37}
                  className="relative"
                />
                <p className="absolute left-[14rem] top-[0.5rem] text-black font-[800] italic text-[18px] montserrat">
                  Disconnect
                </p>
              </button>
            </div>
          ) : (
            <>
              <button onClick={() => login()}>
                <NextImage
                  alt="Racing"
                  src={"/images/btn-bg.png"}
                  layout="intrinsic"
                  width={200}
                  height={37}
                  className="relative"
                />
                <p className="absolute left-[1.5rem] top-[0.5rem] text-black font-[800] italic text-[18px] montserrat">
                  Connect Wallet
                </p>
              </button>
            </>
          )}
          <div className="flex gap-[2rem]">
            <a
              href="https://discord.gg/PKJkPaykMC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconDiscord className="cursor-pointer" color="white" />
            </a>
            <a
              href="https://twitter.com/ravegamenft"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconTwitter className="cursor-pointer" color="white" />
            </a>
          </div>
        </div>
        {/* End Connect and Social btn */}

        {/* Hamberger icon */}
        <button className="absolute top-[50%] -translate-y-1/2 right-0 z-10 2xl:hidden block">
          <Hamberger />
        </button>
        {/* End Hamberger icon */}
      </div>
    </nav>
  );
}
