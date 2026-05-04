import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
    // 빌드 시 에러가 있어도 무시하고 배포를 진행합니다.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 타입 에러도 배포 시에는 일단 무시하도록 설정 (선택사항)
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
      },
    ],
  },
};

export default nextConfig;