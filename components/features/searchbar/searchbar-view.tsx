import { Input } from "../../ui/input";
import { UseFormReturn } from "react-hook-form";
import { TSearchBarSchema } from "./types";
import { Button } from "../../ui/button";
interface Props {
  form: UseFormReturn<TSearchBarSchema>;
  onSubmit: any;
  formClass?: string;
  inputClass?: string;
  launchClass?: string;
  selectClass?: string;
  selectContainer?: string;
  buttonClass?: string;
}

const SearchBarView = ({
  form,
  onSubmit,
  formClass,
  inputClass,
  launchClass,
  selectClass,
  buttonClass,
  ...props
}: Props) => {
  const { formState, register, handleSubmit } = form;
  const { errors } = formState;
  return (
    <form className={formClass} onSubmit={handleSubmit(onSubmit)}>
      <div className="flex">
        <select className={selectClass} {...register("status")}>
          <option value="">Select Status</option>
          <option value="active">Active</option>
          <option value="retired">Retired</option>
          <option value="unknown">Unknown</option>
        </select>
        <Input
          {...register("original_launch")}
          placeholder="Launch Date"
          className={launchClass}
        />
      </div>
      <div className="flex">
        <Input
          placeholder="Enter to search"
          {...register("search")}
          autoComplete={"off"}
          className={inputClass}
        />
        {errors.search && (
          <p className="text-red-500 text-xs">{`${errors.search.message}`}</p>
        )}

        <Button type="submit" size={"default"} className={buttonClass}>
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchBarView;
