import { FunctionComponent } from "react";

import arrowIcon from "../../../assets/icon-arrow.svg";
import SVGIcon from "../../UI/svg-icon/svgicon";

interface InputButtonProps {
  onChange: (event: { target: HTMLInputElement }) => void;
  value: string;
  className?: string;
}

const InputButton: FunctionComponent<InputButtonProps> = ({
  onChange: changeHandler,
  value,
  className,
}) => {
  return (
    <div className={className}>
      <input
        className="w-10/12 md:w-96 h-fit py-3 px-6 rounded-l-xl outline-none"
        placeholder="Search for any IP address"
        type="text"
        onChange={changeHandler}
        value={value}
      />
      <button
        className="w-2/12 md:w-12 h-full bg-black text-white rounded-r-xl flex justify-center items-center"
        type="submit"
      >
        <SVGIcon src={arrowIcon} />
      </button>
    </div>
  );
};

export default InputButton;
