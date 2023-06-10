export interface INavLinkProps {
  id: number;
  name: string;
  link: string;
  externalLink?: boolean;
  loginRequired?: boolean;
  children?: Array<string>;
}

export interface IFriendHisProps {
  accountID: number;
  detail: string;
  createdTime: string;
  prizeQuantity: number;
  friendID: number;
  friendAccountID: number;
  nickName: string;
  isCBU: number;
}

export interface IImageProps {
  data: {
    id: number;
    attributes: {
      formats: any;
      url: string;
      width: number;
      height: number;
    };
  };
}

export interface ISeoProps {
  canonicalURL: string;
  keywords: string;
  metaDescription: string;
  metaImage: IImageProps;
  metaTitle: string;
  titleTemplate: string;
  metaRobots: string;
  structuredData: JSON;
}

export interface IGiftProps {
  name: string;
  image: IImageProps;
  id: number;
}

export interface IGiftPointProps {
  id: number;
  point: number;
  image: IImageProps;
  name: string;
  gifts: Array<{
    id: string;
    name: string;
    image: IImageProps;
  }>;
}

export interface IMapProps {
  id: number;
  name: string;
  description: string;
  lapName: string;
  lapDescription: string;
  mapImage: IImageProps;
  thumbImage: IImageProps;
}

export interface INewProps {
  id: number;
  attributes: {
    title: string;
    description: string;
    slug: string;
    content?: string;
    publishedAt: string;
    image: IImageProps;
  };
}

export interface IPaginationProps {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
}

export interface ICarModel {
  id: number;
  name: string;
  image: IImageProps;
  imageDemo: IImageProps;
  carProperties: {
    speed: number;
    power: number;
    handling: number;
    acceleration: number;
  };
  carMaintenace: {
    oil: string;
    engine: string;
    chassis: string;
  };
}

export interface IImageProps {
  data: {
    id: number;
    attributes: {
      formats: any;
      url: string;
      width: number;
      height: number;
    };
  };
}