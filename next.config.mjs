/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "www.mogef.go.kr",
        pathname: "/thumb/**",
      },
    ],
  },
};

export default nextConfig;
