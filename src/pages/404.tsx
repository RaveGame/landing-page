import { NextSeo } from "next-seo";

const NotFound = () => {
  return (
    <>
      <NextSeo title="Not found" />
      <div className="not-found-page sx:py-10 lg:py-16 min-h-[80vh] flex justify-center items-center">
        <div className="sx:w-[95%] lg:w-[990px] mx-auto">
          <h2 className="text-center text-white uppercase text-4xl sm:text-[40px] lg:text-[60px] UTM-Swiss">
            <b>Not found</b>
          </h2>
        </div>
      </div>
    </>
  );
};

export default NotFound;
