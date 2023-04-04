import { FormEvent, FunctionComponent } from "react";

import arrowIcon from "../../assets/icon-arrow.svg";
import SVGIcon from "../ui/svg-icon/svgicon";
import InputButton from "./input-button/InputButton";

interface InputFormProps {
  //onSubmit: (event: FormEvent<Element>) => Promise<void>;
  onSubmit: (event: FormEvent<Element>) => void;
  onChange: (event: { target: HTMLInputElement }) => void;
  value: string;
}

const InputForm: FunctionComponent<InputFormProps> = ({
  onSubmit: submitHandler,
  onChange: changeHandler,
  value,
}) => {
  return (
    <form
      className="w-10/12 flex items-center justify-center"
      action="submit"
      onSubmit={submitHandler}
    >
      <InputButton
        className="flex md:basis-1 h-full w-full"
        onChange={changeHandler}
        value={value}
      />
    </form>
  );
};

export default InputForm;
