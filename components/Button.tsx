import React from "react";
interface ButtonProps {
  name: string;
}
const Button: React.FC<ButtonProps> = ({ name }) => {
  return (
    <button
      className={`w-full h-full relative flex justify-center items-center text-center rounded shadow-[0px_0px_1px_1px_rgba(0,0,0,0.2)] text-xl hover:bg-[#cdcdcd20] ${
        name == "=" ? "bg-blue-700 text-white hover:bg-blue-500" : ""
      }`}
    >
      {name}
    </button>
  );
};

export default Button;
