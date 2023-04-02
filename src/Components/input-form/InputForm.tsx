import { FormEvent, FunctionComponent } from "react";
import arrowIcon from "../../assets/icon-arrow.svg";

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
    <form className="w-10/12" action="submit" onSubmit={submitHandler}>
      <input
        className="w-10/12 py-3 px-6 rounded-l-xl"
        type="text"
        onChange={changeHandler}
        value={value}
      />
      <button
        className="inline-block w-2/12 h-full bg-black text-white rounded-r-xl"
        type="submit"
      >
        &gt;
      </button>
    </form>
  );
};

export default InputForm;
