import { Control, Controller } from "react-hook-form";
import { Input } from "antd";

interface RHFInputFieldProps {
  control: Control<any>; // chokh pokh yema :D
  name: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

const RHFInputField = (props: RHFInputFieldProps) => {
  return (
    <Controller
      control={props.control}
      name={props.name}
      rules={{
        required: "This field is required",
      }}
      render={({ field, fieldState }) => {
        return (
          <>
            <Input
              placeholder={props.placeholder}
              status={fieldState.error ? "error" : undefined}
              ref={field.ref}
              name={field.name}
              onBlur={field.onBlur}
              value={field.value}
              onChange={(e) => {
                console.log(e);
                field.onChange(e.target.value);
                if (props.onChange) {
                  props.onChange(e.target.value);
                }
              }}
            />

            <br />
            {fieldState.error ? (
              <span style={{ color: "red" }}>{fieldState.error?.message}</span>
            ) : null}
          </>
        );
      }}
    />
  );
};

export default RHFInputField;
