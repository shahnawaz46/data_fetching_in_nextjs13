import Card from "@/src/components/Card";
import { UnplashImage } from "@/src/interfaces/UnplashImage";
import { getPlaiceholder } from "plaiceholder";

// this revalidate for all the api inside ISR page
// export const revalidate = 15;

const ISR = async () => {
  const res = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${process.env.UNPLASH_ACCESS_KEY}`,
    {
      next: { revalidate: 15 }, // this revalidate for specific api
    }
  );
  const data: UnplashImage = await res.json();

  const resBuffer = await fetch(data.urls.raw);
  const buffer = await resBuffer.arrayBuffer();

  const { base64 } = await getPlaiceholder(Buffer.from(buffer));

  return (
    <div className="flex flex-col items-center mt-4">
      <div className="bg-[#fff] shadow-md rounded-xl p-4 max-w-[75%]">
        <p className="mb-1">
          <span className="font-bold">Incremental Static Regeneration:</span>{" "}
          Revalidation is the process of removing the cache and re-fetching the
          latest data at a specific interval.
        </p>

        <p>
          This Page use{" "}
          <span className="font-bold">Incremental Static Regeneration.</span> A
          new image will be fetched in every 15 seconds (after refreshing the
          page).
        </p>
      </div>
      <Card data={data} blurDataURL={base64} />
    </div>
  );
};

export default ISR;
