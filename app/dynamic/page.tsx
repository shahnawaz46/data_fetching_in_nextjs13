import React from "react";
import { UnplashImage } from "@/src/interfaces/UnplashImage";
import Card from "@/src/components/Card";
import { getPlaiceholder } from "plaiceholder";

export const metadata = {
  title: "dynamic data fetching",
};

const Dynamic = async () => {
  const res = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${process.env.UNPLASH_ACCESS_KEY}`,
    {
      cache: "no-store",
    }
  );
  const data: UnplashImage = await res.json();

  const resBuffer = await fetch(data.urls.raw);
  const buffer = await resBuffer.arrayBuffer();

  const { base64 } = await getPlaiceholder(Buffer.from(buffer));
  // console.log(base64);

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="bg-[#fff] shadow-md rounded-xl p-4 max-w-[75%]">
        <p className="mb-1">
          <span className="font-bold">Dynamic Data Fetching:</span> To fetch
          fresh data on every fetch request, use the cache: 'no-store' option.
        </p>

        <p>
          This Page <span className="font-bold">Fetches Data Dynamically.</span>{" "}
          Every Time you refresh the page, you will get a new image from the
          UNSPLASH API.
        </p>
      </div>
      <Card data={data} blurDataURL={base64} />
    </div>
  );
};

export default Dynamic;
