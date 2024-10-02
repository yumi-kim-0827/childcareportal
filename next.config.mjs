/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["www.mogef.go.kr"], // 여기에 허용할 외부 이미지 도메인을 추가
  },
};

export default nextConfig;
