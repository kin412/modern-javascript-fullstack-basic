import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //데이터 페칭 로그
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
