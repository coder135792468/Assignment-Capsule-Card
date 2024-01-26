import { z } from "zod";
export interface TSearchBarSchema {
  search?: string;
  status?: string;
  original_launch?: string;
}

export const searchBarSchema = z.object({
  search: z.string().optional(),
  status: z.string().optional(),
  original_launch: z.string().optional(),
});
