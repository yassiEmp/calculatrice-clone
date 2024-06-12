"use client";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { LuTriangleRight } from "react-icons/lu";
import { Lugrasimo } from "next/font/google";
import Button from "@/components/Button";

const lugrasimo = Lugrasimo({ weight: "400", subsets: ["latin"] });
const layout = () => {
  const [trig, setTrig] = useState(false);
  const [func, setFunc] = useState(false);

  function open(par: string,b?:boolean): void {
    if (par == "trig") {
      if(func){
        if(b){return}
        setFunc(!func)
      }
      setTrig(!trig);
    } else if (par == "func") {
      if(trig){
        if(b){return}
        setTrig(!trig)
      }
      setFunc(!func);
    }
  }
  return (
    <>
      <div className="h-50 w-full h-[60px] ">
        <div className="flex gap-2 h-full">
          <div>
            <div
              className="flex gap-1 h-full items-center justify-center hover:bg-[rgba(0,0,0,0.1)] p-5 rounded w-min"
              onClick={() => open("trig")}
            >
              <div className="flex items-center justify-center ">
                <LuTriangleRight width={"30px"} height={"30px"} />
                <button>Trigonométrie</button>
                <div>
                  <BsChevronDown />
                </div>
              </div>
            </div>
            <div
              className={
                "w-[25vw] grid grid-cols-4 h-[10vh] absolute gap-1 p-1 bg-[#e7e7e7] rounded " +
                (trig ? "" : " hidden")
              }
            >
              {["2nd", "sin", "cos", "tan", "hyp", "sec", "csc", "cot"].map(
                (item) => (
                  <Button name={item} handler={open} />
                )
              )}
            </div>
          </div>
          <div>
            <div
              className="flex gap-1 h-full items-center justify-center hover:bg-[rgba(0,0,0,0.1)] p-5 rounded w-min"
              onClick={() => open("func")}
            >
              <div className={lugrasimo.className + " p-2"}>
                {/*chevron down svg */}f
              </div>
              <button>Fonction</button>
              <BsChevronDown />
            </div>
            <div>
              <div
                className={
                  "w-[25vw] grid grid-cols-3 h-[10vh] absolute gap-1 p-1 bg-[#e7e7e7] rounded " +
                  (func ? "" : " hidden")
                }
              >
                {["|x|", "⌊x⌋", "⌈x⌉", "rand", "→dms", "→deg"].map((item) => (
                  <Button name={item} handler={()=>{open("func",true)}} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default layout;
