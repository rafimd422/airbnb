"use client";

import Image from "next/image";


const ListingCard = ({
  data,
}: any) => {


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
            unoptimized
          />
        </div>
        <div className="font-semibold text-lg">
          {data.title}
        </div>
        <div className="font-light text-neutral-500">
          {data.category}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 font-semibold">
            ${data.price}
          </div>
          <div className="flex gap-1 font-semibold text-gray-900">
          📍{data.locationValue}
          </div>
        </div>

      </div>
    </div>
  );
}

export default ListingCard;
