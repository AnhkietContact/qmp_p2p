/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  devIndicators: {
    appIsrStatus: false,
  },
  images: {
    unoptimized: true,
    domains: ["p2p.qunest.com"],
  },
};

export default nextConfig;
