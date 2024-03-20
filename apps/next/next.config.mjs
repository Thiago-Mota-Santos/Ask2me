/** @type {import('next').NextConfig} */
import relayConfig from './relay.config.js';
const nextConfig = {
  transpilePackages: ["@repo/ui"],
  reactStrictMode: true,
  compiler: {
    relay: relayConfig
  }
};

export default nextConfig;
