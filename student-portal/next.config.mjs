/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/webdev2-assignment2-group4',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/webdev2-assignment2-group4',
  },
};

export default nextConfig;
