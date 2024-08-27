/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["space.levo.so"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
