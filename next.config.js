/** @models {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["https://coyo-hm.github.io/"],
    loader: "imgix",
    path: "https://coyo-hm.github.io/",
  },
  env: {
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },
};
