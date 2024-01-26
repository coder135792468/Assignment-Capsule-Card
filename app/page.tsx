"use client";

import { SearchBarContainer } from "@/components/index";
import { Landing } from "@/features/landing-page/landing";

export default function Home() {
  const handleSubmit = async (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <Landing />
      <SearchBarContainer
        show={true}
        formClass="grid m-5 grid-cols-1 sm:grid-cols-2"
        inputClass="max-w-80"
        selectClass="w-full max-w-[350px] mb-5 mr-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        buttonClass="mx-3"
        onSubmit={handleSubmit}
      />
    </div>
  );
}
