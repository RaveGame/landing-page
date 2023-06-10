import serviceClient from "./serviceClient";
const qs = require("qs");
export const serviceAPI = {
  getGlobalData(locale = "vi"): Promise<any> {
    const query = qs.stringify({
      populate: {
        logo: "*",
        favicon: "*",
        subLogo: "*",
        footer: "*",
        defaultSeo: {
          populate: "*",
        },
        socialLink: {
          populate: "*",
        },
        install: {
          populate: "*",
          backgroundImage: "*",
        },
      },
      locale,
    });
    return serviceClient.get(`/api/main-global-setting?${query}`);
  },
  getHomeData(locale = "vi"): Promise<any> {
    const query = qs.stringify({
      populate: {
        banner: {
          populate: "*",
        },
        map: {
          populate: {
            maps: {
              populate: "*",
            },
            titleImage: "*",
          },
        },
        carCollection: {
          populate: {
            image: "*",
            properties: "*",
          },
        },
      },
      locale,
    });
    return serviceClient.get(`/api/main-home-setting?${query}`);
  },
  getNews(locale = "vi", page = 1, pageSize = 4): Promise<any> {
    const query = qs.stringify({
      populate: "*",
      fields: ["title", "description", "publishedAt", "slug"],
      pagination: {
        page,
        pageSize,
      },
      sort: ["publishedAt:desc"],
      locale,
    });
    return serviceClient.get(`/api/main-news?${query}`);
  },
  getNewById(locale = "vi", id: number): Promise<any> {
    const query = qs.stringify({
      locale,
    });
    return serviceClient.get(`/api/main-news/${id}?${query}`);
  },
};
