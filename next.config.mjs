/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // <--- ADD THIS LINE
  reactStrictMode: true,
  images: {
    domains: [],
  },
};

export default nextConfig;