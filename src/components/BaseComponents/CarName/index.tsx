import { ICarbodyProps } from "@/components/Customization";
import React from "react";
import { AiFillStar } from "react-icons/ai";

export const CarInfo = ({ data }: { data: ICarbodyProps }) => {
  return (
    <>
      <h4 className="uppercase Aguda-Black text-lg sm:text-xl md:text-2xl lg:text-3xl">
        {data?.name}
      </h4>
      <div className="flex lg:mt-2 justify-center">
        {Array(5)
          .fill(1)
          .map((item, index) => {
            if (index < data?.star) {
              return (
                <AiFillStar
                  color="#ffc107"
                  className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
                  key={"car-bd-star-key-" + (index + 1)}
                />
              );
            }
            return (
              <AiFillStar
                className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
                key={"car-bd-star-key-" + (index + 1)}
              />
            );
          })}
      </div>
    </>
  );
};

export default CarInfo;
