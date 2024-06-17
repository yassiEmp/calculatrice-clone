import React from "react";
interface ButtonProps {
  name: string;
  handler?: (par:string,b?:boolean) => void;
}
const Button: React.FC<ButtonProps> = ({ name, handler }) => {
  return (
    <button
      className={`bg-[#f9f9f9] w-full h-full relative flex justify-center items-center text-center rounded shadow-[0px_0px_1px_1px_rgba(0,0,0,0.2)] sm:text-sm lg:text-xl min-[300px]:text-xs hover:bg-[#cdcdcd20] ${
        name == "=" ? "bg-blue-700 text-white hover:bg-blue-500" : ""
      }`}  onClick={()=>{
        if(handler){
          handler("trig")
        }
      }}
    >
      {name}
    </button>
  );
};

export default Button;
