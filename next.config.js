const envsConfig = require('./envs')


const envs = envsConfig[process.env.MODE]
if (envs) {
  console.log(`process.env.MODE: ${process.env.MODE}`);
  Object.keys(envs).forEach((key) => {
    process.env[key] = envs[key]
  })
}
console.log(process.env.NEXT_PUBLIC_DOMAIN_URL);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: [
      "src/components",
      "src/configs",
      "src/constants",
      "src/containers",
      "src/hooks",
      "src/layouts",
      "src/models",
      "src/pages",
      "src/recoils",
      "src/utils",
    ],
  },
  experimental: {
    scrollRestoration: true,
  },
  images: {
    domains: [],
  },
  i18n: {
    locales: ["vi", "en"],
    defaultLocale: "vi",
    localeDetection: false,
  },
};

module.exports = nextConfig;
