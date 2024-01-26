import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const generateQueryStr = (baseString: string, query: Object): string => {
  const queryString: string =
    baseString +
    Object.entries(query)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

  return queryString;
};

export const capsuleApi = createApi({
  reducerPath: "notes-api",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.spacexdata.com/v3/`,
  }),

  endpoints: (builder) => ({
    getAllCapsules: builder.query<any, Object>({
      // <Type of data the call will return, Type of parameter being passed to the query function>
      query: (queryParams) => {
        const queryStr = generateQueryStr("capsules?", queryParams);

        return { url: queryStr };
      },
    }),
  }),
});

export const { useGetAllCapsulesQuery } = capsuleApi;
