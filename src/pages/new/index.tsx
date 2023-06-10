import NextImage from "@/components/BaseComponents/NextImage";
import { ItemsNews } from "@/components/NewsHome/ItemsNews";
import { INewProps, IPaginationProps } from "@/models/index";
import { serviceAPI } from "@/services/serviceAPI";
import { useGlobalContext } from "Context/GlobalProvider";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { BsPlusCircle } from "react-icons/bs";

const NewPage = ({ newData }: { newData: any }) => {
  const [listD, setListD] = useState<INewProps[]>(newData?.data);
  const [pagination, setPagination] = useState<IPaginationProps>(
    newData?.meta?.pagination
  );
  const [loading, setLoading] = useState(false);
  const { locale } = useGlobalContext();

  useEffect(() => {
    setListD(newData?.data);
    setPagination(newData?.meta?.pagination);
  }, [newData]);

  const loadMore = () => {
    if (loading) return;
    setLoading(true);
    serviceAPI
      .getNews(locale, pagination?.page + 1, pagination?.pageSize)
      .then((res) => {
        setListD((pre) => [...pre, ...res?.data?.data]);
        setPagination(res?.data?.meta?.pagination);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <section className="newshome relative bg-colorcs-0D1A36 overflow-hidden">
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
              {listD?.map((item) => (
                <ItemsNews key={item?.id} item={item} hid={false} />
              ))}
            </ul>
            {pagination?.page < pagination?.pageCount && (
              <button
                className="Aguda-Regular text-xs lg:text-base bg-colorcs-0D1A36 border border-white hover:border-colorcs-43c8ce hover:text-colorcs-43c8ce duration-200 p-2 lg:p-5 w-full uppercase flex flex-col items-center justify-center"
                onClick={loadMore}
                disabled={loading}
              >
                <BsPlusCircle className="text-lg lg:text-2xl mb-1 lg:mb-2" />{" "}
                MORE
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const [res] = await Promise.all([serviceAPI.getNews(ctx?.locale, 1, 12)]);
    return {
      props: {
        newData: res?.data,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
};

export default NewPage;
