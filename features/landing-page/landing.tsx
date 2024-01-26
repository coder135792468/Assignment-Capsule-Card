import React from "react";
import LandingImage from "../../public/images/landing.svg";
import Image from "next/image";

export const Landing = () => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 p-10 ">
        <Image
          src={LandingImage}
          alt="Laning Image"
          className="md:w-[300px] md:h-[300px] sm:w-[250px] sm:h-[250px] xs:w-[200px] xs:h-[200px] mx-auto"
        />

        <div className="mt-10">
          <h1 className="font-medium text-[2rem]">Capsule Card</h1>
          <ul className={"list-disc ml-5 text-sm"}>
            <li>Elevate your knowledges about capsules.</li>
            <li>Filter by status, original_launch, and type</li>
            <li>Accquire the information you need</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
