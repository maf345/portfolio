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
  async redirects() {
    return [{ source: "/visualizations", destination: "/dashboards", permanent: true }];
  },
};

export default nextConfig;
