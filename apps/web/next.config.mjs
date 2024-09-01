import { join } from 'node:path';
import { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } from 'next/constants.js';

const __dirname = import.meta.dirname

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    loader: 'custom',
    loaderFile:
      process.env.DEPLOYED_URL !== undefined && process.env.NODE_ENV === 'production'
        ? './src/lib/image-loader.ts'
        : './src/lib/local-loader.ts',
    remotePatterns: [
      process.env.DEPLOYED_URL !== undefined
        ? {
            protocol: 'https',
            hostname: '**.laniakita.com',
            port: '',
          }
        : {
            protocol: 'http',
            hostname: 'localhost',
          },
    ],
  },

  webpack(config) {
    // shader support
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ['raw-loader'],
    });

    return config;
  },
  swcMinify: true,
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: join(__dirname, '../../')
  },
  async redirects() {
    return [
      {
        source: '/blog/posts/:slug*',
        destination: '/blog/:slug*',
        permanent: true,
      },
      {
        source: '/feed.xml',
        destination: '/atom.xml',
        permanent: true,
      },
      {
        source: '/blog/tags/d5f3af56/meta',
        destination: '/categories/meta',
        permanent: true,
      },
      {
        source: '/blog/tags/c6857539/full-stack',
        destination: '/tags/full-stack',
        permanent: true,
      },
      {
        source: '/projects/credits/bot-clicker',
        destination: '/credits/bot-clicker',
        permanent: true,
      },
    ];
  },
};

const nextConfigFunction = async (phase, { defaultConfig }) => {
  const plugins = [];

  if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
    const withSerwist = (await import('@serwist/next')).default({
      swSrc: 'src/app/sw.ts',
      swDest: 'public/sw.js',
    });
    plugins.push(withSerwist);

    // ignore webpack cache warnings (see: https://github.com/contentlayerdev/contentlayer/issues/313)
    const withContentLayer = (await import('next-contentlayer2')).withContentlayer;
    plugins.push(withContentLayer);
  }

  const withBundleAnalyzer = (await import('@next/bundle-analyzer')).default({
    enabled: process.env.ANALYZE === 'true',
  });
  plugins.push(withBundleAnalyzer);

  return plugins.reduce((acc, next) => next(acc), {
    ...defaultConfig,
    ...nextConfig,
  });
};

export default nextConfigFunction;