import { serviceAPI } from "@/services/serviceAPI";
import { GetServerSideProps } from "next";
import { INewProps } from "../models";
import { dateFormat, editContentHandle, slugToId } from "../utils";

const NewDetail = ({ data }: { data: INewProps }) => {
  return (
    <section className="relative bg-colorcs-0D1A36 overflow-hidden">
      <div className="container relative px-2 xl:px-52 py-10 lg:py-20 mx-auto z-20">
        <header className="mb-5">
          <h3 className="font-bold Aguda-Black uppercase xl:text-xl">
            {data?.attributes?.title}
          </h3>
          <p className="text-[12px] Aguda-Black text-colorcs-fdf600 mt-3">
            {dateFormat(data?.attributes?.publishedAt)}
          </p>
        </header>
        <div
          className="mt-6 ck-content custom custom-list"
          dangerouslySetInnerHTML={{
            __html: editContentHandle(data?.attributes?.content),
          }}
        />
      </div>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const id = slugToId(ctx?.query?.slug + "");

    const res = await serviceAPI?.getNewById(ctx?.locale, +id);

    return {
      props: {
        data: res?.data?.data,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};

export default NewDetail;
