/**
 * @type {import('next').NextConfig}
 */

//array buat remotePatterns

const domainList = ["tecdn.b-cdn.net", "www.w3.org", "i.dummyjson.com"];

const rpArray = domainList.map((id) => {
  return {
    protocol: "https",
    hostname: id,
  };
});

const nextConfig = {
  /* config options here */

  images: {
    remotePatterns: [...rpArray],
  },
};

export default nextConfig;
