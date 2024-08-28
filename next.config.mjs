/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/aishwarya-hariharan-iyer.github.io",
    output: "export",
    reactStrictMode: true,
    images: {
      domains: [
        "api.microlink.io", // Microlink Image Preview
      ],
    },
  };
  
  export default nextConfig;
  
