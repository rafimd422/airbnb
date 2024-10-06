"use client";

import useCountries from "@/hook/useCountries";
import Image from "next/image";




const ListingCard = ({
  data,
}: any) => {
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);


  return (
    <div
      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            className="object-cover h-full w-full group-hover:scale-110 transition"
            src={data.imageSrc}
            alt="listing"
          />
        </div>
        <div className="font-semibold text-lg">
          {location?.region}, {location?.label}
        </div>
        <div className="font-light text-neutral-500">
          {data.category}
        </div>
        <div className="flex flex-row items-center gap-">
          <div className="flex gap-1 font-semibold">
            ${data.price}
          </div>
        </div>

      </div>
    </div>
  );
}

export default ListingCard;
