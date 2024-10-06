"use client";

import { useState } from "react";
import ListingCard from "@/components/ListingCard";
import useListings from "@/hook/useListings";

export default function Home() {
  
  const { listings, loading } = useListings();

  if (loading) {
    return <div className="min-h-[80vh] w-screen flex justify-center items-center">Loading...</div>;
  }


  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 min-h-[60vh]">
      <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8 overflow-x-hidden">
        {listings.map((listing: any) => (
          <ListingCard key={listing.id} data={listing} />
        ))}
      </div>
    </div>
  );
}
