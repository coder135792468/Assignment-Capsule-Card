"use client";

import { SearchBarContainer } from "@/components/index";
import { Landing, Capsule } from "@/features/index";

export default function Home({ ...props }) {
  const handleSubmit = async (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <Landing />
      <Capsule {...props} />
    </div>
  );
}
