import { useAppDispatch, useAppSelector } from "./hook";
import { capsuleSlice, addCapsule } from "./slices/capsuleSlice";
import { capsuleApi, useGetAllCapsulesQuery } from "./slices/capsuleApiSlice";

export {
  useAppDispatch,
  useAppSelector,
  capsuleSlice,
  useGetAllCapsulesQuery,
  capsuleApi,
  addCapsule,
};
