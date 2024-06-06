/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["flagcdn.com", "upload.wikimedia.org"],
  },
  experimental: {
    forceSwcTransforms: true,
  },
};

export default nextConfig;
