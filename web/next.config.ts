import type {NextConfig} from "next";
const { codeInspectorPlugin } = require('code-inspector-plugin');

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { dev, isServer }) => {
    config.plugins.push(codeInspectorPlugin({ bundler: 'webpack' }));
    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/chat',
        permanent: false,
      },
    ]
  },
  output: 'standalone',
};

export default nextConfig;
