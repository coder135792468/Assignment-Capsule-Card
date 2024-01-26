"use client";

import { Landing, Capsule } from "@/features/index";

export default function Home({ ...props }) {
  return (
    <div>
      <Landing />
      <Capsule {...props} />
    </div>
  );
}
