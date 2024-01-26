"use client";
import { useEffect, useState } from "react";
import { SearchBarContainer, CardView } from "@/components/index";
import {
  useGetAllCapsulesQuery,
  addCapsule,
  useAppDispatch,
} from "@/store/index";
import { PaginationButton } from "../index";

export const Capsule = ({ ...props }) => {
  const CAPSULE_SIZE = 2;
  const [search, setSearch] = useState<any>({
    limit: CAPSULE_SIZE,
    offset: 0,
  });
  const [page, setPage] = useState<number>(0);
  const {
    data = [],
    isLoading,
    isError,
    refetch,
  } = useGetAllCapsulesQuery(search);
  const dispath = useAppDispatch();

  const handleSubmit = async (data: any) => {
    setSearch({
      limit: CAPSULE_SIZE,
      offset: 0,
      status: data.status,
      type: data.search,
      original_launch: data.original_launch,
    });
    await refetch();
    setPage(0);
  };

  useEffect(() => {
    dispath(addCapsule(data));
  }, [data]);
  return (
    <>
      <SearchBarContainer
        formClass="grid m-5 grid-cols-1 sm:grid-cols-2"
        inputClass="max-w-80"
        selectClass="w-full max-w-[350px] mb-5 mr-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        buttonClass="mx-3"
        onSubmit={handleSubmit}
      />
      {props.searchParams.search && (
        <h1 className="text-center text-xl">
          Showing Results for{" "}
          <span className="font-bold">"{props.searchParams.search}"</span>
        </h1>
      )}
      {isError && <h1 className="text-center">There is some error</h1>}
      {isLoading && <h1 className="text-center">Loading Data</h1>}
      <div className="w-[90%] mx-[5%] grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {data?.map((capsule: any) => (
          <CardView {...capsule} />
        ))}
      </div>

      {data.length === 0 && !isLoading ? (
        <h1 className="text-center">Capsule not found</h1>
      ) : (
        <PaginationButton
          isLoading={isLoading}
          page={page}
          setPage={setPage}
          refetch={refetch}
          search={search}
          setSearch={setSearch}
          CAPSULE_SIZE={CAPSULE_SIZE}
          pageLength={data.length}
        />
      )}
    </>
  );
};
