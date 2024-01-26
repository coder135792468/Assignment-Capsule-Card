"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Button,
} from "@/components/index";
import { CalendarIcon } from "@radix-ui/react-icons";

export function CardWrapper(props: any) {
  const { type, details, original_launch, status, missions } = props;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="w-full hover:opacity-40">View</Button>
      </SheetTrigger>
      <SheetContent side={"bottom"} className="p-10">
        <SheetHeader>
          <SheetTitle>{type}</SheetTitle>
          <SheetDescription>
            {details}{" "}
            <span className="text-[red] border-2 rounded-2xl border-text-gray-900 p-2">
              <strong className="text-[black]">Status:</strong>
              {status.toUpperCase()}
            </span>
          </SheetDescription>
          {original_launch && (
            <SheetDescription>
              <span className="flex items-center text-[#ff2f00]  text-[10px] mb-4">
                <CalendarIcon />
                <span className=" ml-1">Launched: {original_launch}</span>
              </span>
            </SheetDescription>
          )}
        </SheetHeader>
        {missions?.map((mission: any, index: number) => (
          <span
            key={index + 1}
            className="text-[12px] text-white bg-[#4488ff] py-2 px-4 rounded-3xl mr-2"
          >
            {mission.name}
          </span>
        ))}
      </SheetContent>
    </Sheet>
  );
}
