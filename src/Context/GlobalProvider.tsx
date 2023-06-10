import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IImageProps, ISeoProps } from "../models";

interface GlobalProviderProps {
  children: ReactNode;

  globalData: {
    data: object;
    meta?: object;
  };
  locale: string;
  locales: Array<string>;
}

interface IGlobalProviderContext {
  domain: string;
  globalData: {
    id?: number;
    attributes?: {
      logo: IImageProps;
      favicon: IImageProps;
      subLogo: IImageProps;
      footer: {
        phoneNumber: string;
        email: string;
        address: string;
        slogun: string;
        license: string;
      };
      defaultSeo: ISeoProps;
      socialLink: {
        facebookLink: string;
        title: string;
        youtubeLink: string;
        twitterLink: string;
        warnningImage: IImageProps;
        tiktokLink: string;
      };
      install: {
        apk: string;
        facebookLink: string;
        appStore: string;
        googlePlay: string;
        support: string;
        qrImage: IImageProps;
        backgroundImage: IImageProps;
      };
    };
  };
  locale: string;
  locales: Array<string>;
}

export const GlobalContext = createContext({} as IGlobalProviderContext);

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({
  children,
  globalData,
  locale,
  locales,
}: GlobalProviderProps) => {
  const [domain, setDomain] = useState("");

  useEffect(() => {
    if (!window) return;
    setDomain(window?.origin);
  }, []);
  const value = useMemo(
    () => ({
      globalData: globalData?.data,
      domain,
      locale,
      locales,
    }),
    [domain, globalData?.data, locales, locale]
  );
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
