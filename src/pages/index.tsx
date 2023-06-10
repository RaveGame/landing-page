/* import Collection from "@/components/Collection";
import Customization from "@/components/Customization";
import InstallAppstore from "@/components/InstallAppstore"; */
import IntroPage from "@/components/IntroPage";
import Map from "@/components/Map";
import dynamic from 'next/dynamic';
/* import NewsHome from "@/components/NewsHome"; */
import WaitList from "@/components/WaitList";
import { IImageProps, IMapProps, INewProps } from "../models";
// import NFTCar from "@/components/NFTCar";
import Roadmap from "@/components/Roadmap";
const NFTCar = dynamic(
  () => import('@/components/NFTCar'),
  { ssr: false }
)

export type HomeProps = {
  homeData: {
    data: {
      attributes: {
        banner: {
          titleImage: IImageProps;
          description: string;
          titleImageMobile: IImageProps;
        };
        map: {
          titleImage: IImageProps;
          maps: Array<IMapProps>;
        };
        carCollection: any;
      };
    };
  };
  newData: {
    data: Array<INewProps>;
  };
};

const Home = ({ homeData, newData }: HomeProps) => {
  return (
    <>
      <IntroPage banner={homeData?.data?.attributes?.banner} />

      {/* <Collection data={homeData?.data?.attributes?.carCollection} /> */}

      <NFTCar />

      <Roadmap />

      <Map maps={homeData?.data?.attributes?.map} />

      <WaitList />

      {/* <Customization /> */}

      {/* <InstallAppstore /> */}

      {/* <NewsHome newData={newData} /> */}
    </>
  );
};

export default Home;
