import React from "react";
import { Button } from "@/components/index";

export const PaginationButton = ({
  isLoading,
  page,
  setPage,
  refetch,
  search,
  setSearch,
  CAPSULE_SIZE,
  pageLength,
}: any) => {
  return (
    !isLoading && (
      <div className="flex justify-center items-center text-sm m-5">
        <Button
          onClick={() => {
            setSearch({
              ...search,
              offset: (page - 1) * (CAPSULE_SIZE * 2),
            });
            setPage(page - 1);
            refetch();
          }}
          className="mx-2"
          disabled={page == 0}
        >
          Prev
        </Button>
        <p>
          Page No:<strong>{page + 1}</strong>
        </p>
        <Button
          onClick={() => {
            setSearch({
              ...search,
              offset: (page + 1) * (CAPSULE_SIZE * 2),
            });
            setPage(page + 1);
            refetch();
          }}
          disabled={pageLength < CAPSULE_SIZE * 2}
          className="mx-2"
        >
          Next
        </Button>
      </div>
    )
  );
};
