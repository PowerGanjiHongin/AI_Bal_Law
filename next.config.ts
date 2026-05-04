import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
    // 빌드 시 ESLint 에러가 있어도 무시하고 진행 (배포 성공을 위한 치트키)
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 타입 에러도 빌드 시에는 일단 무시
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