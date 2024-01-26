import { z } from "zod";
export interface TSearchBarSchema {
  search?: string;
  college?: string;
}

export const searchBarSchema = z.object({
  search: z.string().nonempty(),
  college: z.string().optional(),
});
