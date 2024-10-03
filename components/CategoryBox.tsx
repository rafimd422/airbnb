"use client";

// import { useRouter } from "next/navigation";
import React from "react";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  label: string;
  selected?: boolean;
};

function CategoryBox({ icon: Icon, label, selected }: Props) {
  // const router = useRouter();
  // const params = useSearchParams();


const handleClick = () => {}
  // const handleClick = useCallback(() => {
  //   // const current = new URLSearchParams(params?.toString() || "");

  //   // if (params?.get("category") === label) {
  //   //   current.delete("category");
  //   // } else {
  //   //   current.set("category", label);
  //   // }

  //   // const queryString = current.toString();
  //   // const newUrl = queryString ? `/?${queryString}` : "/";

  //   // console.log({
  //   //   current,
  //   //   queryString,
  //   //   newUrl
  //   // })

  //   // router.push(newUrl);
  // }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer ${
        selected ? "border-b-neutral-800" : "border-transparent"
      } ${selected ? "text-neutral-800" : "text-neutral-500"}`}
    >
      <Icon size={26} />
      <div className="font-medium text-xs">{label}</div>
    </div>
  );
}

export default CategoryBox;
