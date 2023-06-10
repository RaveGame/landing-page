import NextImage from "../BaseComponents/NextImage";
import Link from "next/link";
import { INewProps } from "@/models/index";
import { dateFormat, getMediaFormat } from "@/utils/index";

const ItemsNews = ({ item, hid }: { item: INewProps; hid?: boolean }) => {
  return (
    <li
      className={`w-6/12 lg:w-4/12 px-1 md:px-2 Aguda-Regular mb-5 md:mb-10 ${
        hid ? `last:lg:hidden` : ``
      }`}
    >
      <div className="bg-colorcs-0D0A1A h-full group">
        <figure className="relative leading-[0px] pt-[60.25%]">
          {item?.attributes?.image?.data && (
            <Link href={`/${item?.attributes?.slug}-${item?.id}`}>
              <a title="title" className="absolute left-0 top-0 w-full h-full">
                <NextImage
                  alt={item?.attributes?.title}
                  src={getMediaFormat(item?.attributes?.image)}
                  layout="fill"
                  objectFit="cover"
                />
              </a>
            </Link>
          )}
        </figure>
        <div className="p-2 md:p-5">
          <div className="text-[11px] Aguda-Black text-colorcs-fdf600">
            {dateFormat(item?.attributes?.publishedAt)}
          </div>
          <h2 className="Aguda-Black uppercase xl:text-xl mb-3">
            <Link href={`/${item?.attributes?.slug}-${item?.id}`}>
              <a className="group-hover:text-colorcs-43c8ce duration-200 line-clamp-3">
                {item?.attributes?.title}
              </a>
            </Link>
          </h2>
          <p className="text-[13px] lg:text-sm line-clamp-3 md:line-clamp-4">
            {item?.attributes?.description}
          </p>
        </div>
      </div>
    </li>
  );
};
export { ItemsNews };
