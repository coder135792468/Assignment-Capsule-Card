import React from "react";
import { cn } from "@/components/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/index";
export const CardView = ({ type, details, original_launch, status }: any) => {
  return (
    <div
      className={cn(
        "group transition-all after:transition-all h-[170px] relative p-4 outline-none shadow-md bg-slate-100 mx-auto max-w-[300px]  rounded-lg mt-[25px]",
        "after:w-[50px] after:h-[25px] after:absolute after:top-[-12px] after:rounded-md  after:left-0 after:z-[-1] after:bg-slate-100",
        "hover:bg-[#3E63DD] after:hover:bg-[#3E63DD] hover:text-white"
      )}
    >
      <Card className="shadow-none border-none w-full h-full p-2 group-hover:text-white bg-transparent">
        <CardHeader className="flex flex-col">
          <CardTitle className="text-sm flex">
            {type}{" "}
            <span className="flex items-center justify-center text-[10px] text-white rounded-xl  group-hover:text-white bg-[#248000] px-1 pr-2 mx-2">
              <span className="ml-1"> {status}</span>
            </span>
          </CardTitle>
          <CardDescription className="text-[10px] text-gray-500 group-hover:text-white">
            {details}
          </CardDescription>
        </CardHeader>
        {original_launch && (
          <CardContent className="flex flex-col text-[8px] font-medium">
            <span className="flex items-center text-[#ff2f00] group-hover:text-white">
              <CalendarIcon />
              <span className=" ml-1">Launched: {original_launch}</span>
            </span>
          </CardContent>
        )}
      </Card>
    </div>
  );
};
