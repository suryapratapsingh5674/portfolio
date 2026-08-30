/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable optimized images
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Disable powered-by header for cleanliness
  poweredByHeader: false,
  // Compress responses
  compress: true,
  // React strict mode for better error catching
  reactStrictMode: true,
};

export default nextConfig;
