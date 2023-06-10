import React, { useState } from "react";
import { toastSuccess, toastError } from "../../utils/toast";
import { BeatLoader } from "react-spinners";

const WaitList = () => {
  const [loading, setLoading] = useState(false);
  console.log(loading);
  const handleSubmit = async () => {
    setLoading(true);
    const res = await fetch("/api/waitlist", {
      method: "POST",
      body: JSON.stringify({
        walletAddress: walletAddress,
        discord: discordID,
      }),
    });
    const response = await res.json();
    if (res.status === 200) {
      setLoading(false);
      toastSuccess(
        `Congratulations! Your wallet has been added to Rave's Waitlist.
        Follow Rave Twitter for the latest news: https://twitter.com/ravegamenft`
      );
    } else {
      setLoading(false);
      toastError(response.message);
    }
    console.log("====================================");
    console.log(res);
    console.log("====================================");
  };

  const [walletAddress, setWalletAddress] = useState("");
  const [discordID, setDiscordID] = useState("");

  return (
    <section
      id="join-wait-list"
      className="sm:px-[64px] px-[1rem]  relative mt-[-7rem] flex-col xl:flex-row flex montserrat gap-[2rem] 3xl:gap-[3rem]"
    >
      <div className="order-2 xl:order-1">
        <img
          src="/images/wait-list.png"
          className="w-full h-full lg:w-[490.67px] lg:h-[569.33px] 3xl:w-[690.67px] 3xl:h-[769.33px]"
          alt="err"
        />
      </div>

      <div className="flex-1 mt-[11rem] xl:mt-[13rem] 3xl:mt-[20rem] order-1 xl:order-2">
        <h1
          data-aos="flip-down"
          data-aos-duration="500"
          className="racesport text-[#09BA8E] text-center md:text-left font-[400] text-[36px] sm:text-[48px] leading-[41.4px] sm:leading-[55.2px]"
        >
          JOIN THE WAITLIST
        </h1>
        <p className="montserrat text-[#3D5C5F] text-[16px] font-[400]">
          Get the inside scoop on new cars, NFT drops and more+
        </p>

        <div className="mt-[2.5rem]">
          <form className="">
            <div className="">
              <input
                onChange={(e) => {
                  setWalletAddress(e.target.value);
                }}
                required
                placeholder="Please enter your Venom wallet"
                type="text"
                className="mb-[1rem] w-full rounded-[8px] text-[#3D5C5F] outline-none font-[400] text-[18px] bg-[#BFEEE2] px-[12px] py-[16px] placeholder:text-[#3D5C5F] placeholder:font-[400] placeholder:text-[18px]"
              />
              <input
                onChange={(e) => {
                  setDiscordID(e.target.value);
                }}
                required
                placeholder="Please enter your Discord ID"
                type="text"
                className="w-full rounded-[8px] text-[#3D5C5F] outline-none font-[400] text-[18px] bg-[#BFEEE2] px-[12px] py-[16px] placeholder:text-[#3D5C5F] placeholder:font-[400] placeholder:text-[18px]"
              />
            </div>
            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="mt-[1rem] rounded-[8px] md:w-[287px] bg-[#09BA8E] text-[white] p-[16px] w-full"
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                {loading ? <BeatLoader color="#ffffff" size={10} /> : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WaitList;
