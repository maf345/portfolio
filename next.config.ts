import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "public.tableau.com",
        pathname: "/static/images/**",
      },
    ],
  },
};

export default nextConfig;
