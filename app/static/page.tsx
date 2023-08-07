import Card from "@/src/components/Card";
import { UnplashImage } from "@/src/interfaces/UnplashImage";
import { getPlaiceholder } from "plaiceholder";

export const metadata = {
  title: "static data fetching",
};

const Static = async () => {
  const res = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${process.env.UNPLASH_ACCESS_KEY}`,
    {
      method: "Get",
    }
  );
  const data: UnplashImage = await res.json();

  const resBuffer = await fetch(data.urls.raw);
  const buffer = await resBuffer.arrayBuffer();

  const { base64 } = await getPlaiceholder(Buffer.from(buffer));

  return (
    <div className="flex flex-col items-center mt-4">
      <div className="bg-[#fff] shadow-md rounded-xl p-4 max-w-[75%]">
        <p>
          <span className="font-bold">Static Data Fetching:</span> By default,
          Next.js automatically does static fetches. This means that the data
          will be fetched at build time, cached, and reused on each request.
          (cache: 'force-cache' is the default).
        </p>
      </div>
      <Card data={data} blurDataURL={base64} />
    </div>
  );
};

export default Static;
