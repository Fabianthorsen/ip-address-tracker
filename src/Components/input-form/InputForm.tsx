import { FormEvent, FunctionComponent } from "react";

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
    <form className="bg-yellow-400" action="submit" onSubmit={submitHandler}>
      <input type="text" onChange={changeHandler} value={value} />
      <button type="submit">&gt;</button>
    </form>
  );
};

export default InputForm;
