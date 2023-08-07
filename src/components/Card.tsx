import Image from "next/image";
import React from "react";
import { UnplashImage } from "../interfaces/UnplashImage";

// this is for show blurry effect until image completely load.
// it will only work when we use placeholder blur and blurDataURL
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const Card = ({
  data,
  blurDataURL,
}: {
  data: UnplashImage;
  blurDataURL: string;
}) => {
  const width = Math.min(500, data.width);
  const height = Math.min(500, data.height);

  return (
    <div className="flex flex-col items-center my-6">
      <div className={`w-[500px]  bg-[#fff] shadow-md rounded-xl p-4`}>
        <div>
          <div className="flex justify-between flex-wrap gap-x-1 mb-1">
            <h4 className="text-lg">Name: {data.user.name}</h4>
            <h4 className="text-lg">Location: {data.user.location}</h4>
          </div>

          <p className="text-sm">Description: {data.description}</p>
          {/* <p>About: {data.user.bio}</p> */}
        </div>
        <div className="relative w-full h-[400px] rounded-xl my-2 overflow-hidden">
          <Image
            src={data.urls.raw}
            fill
            alt="unsplash-image"
            priority
            placeholder="blur"
            blurDataURL={blurDataURL}
            // blurDataURL={`data:image/svg+xml;base64,${toBase64(
            //   shimmer(400, 400)
            // )}`}
          />
        </div>
        <div className="flex justify-between">
          <p className="text-[15px]">Total Download: {data.downloads}</p>
          <p className="text-[15px]">
            Date: {new Date(data.created_at).toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
