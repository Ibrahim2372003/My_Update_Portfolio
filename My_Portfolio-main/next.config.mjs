/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Images are small, pre-sized assets or inline SVG, so the built-in image
  // optimizer is switched off. This removes its server endpoint entirely,
  // which matters because several remaining npm-audit advisories for Next 14
  // concern that endpoint when self-hosted.
  images: { unoptimized: true },
  poweredByHeader: false,
}

export default nextConfig
