"use client";
import Button from "@/components/Button";
import Image from "next/image";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { TbLogicNor } from "react-icons/tb";

const Page = () => {
  const [boardType, setBoardType] = useState("standard");
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);
  function handler(d: number): void {
    switch (d) {
      case 1:
        setMenu1(!menu1);
        break;
      case 2:
        setMenu2(!menu2);
      default:
        break;
    }
  }
  const buttonsStandard = [
    "A",
    "«",
    "»",
    "C",
    "⨁",
    "B",
    "(",
    ")",
    "%",
    "÷",
    "C",
    "7",
    "8",
    "9",
    "×",
    "D",
    "4",
    "5",
    "6",
    "−",
    "E",
    "1",
    "2",
    "3",
    "+",
    "F",
    "+/−",
    "0",
    ",",
    "=",
  ];
  return (
    <div className="w-full h-full">
      <div className="w-full h-1/6 flex justify-between border-b">
        {/* making the board type chooser */}
        <div className="w-1/6 h-full flex gap-3 p-2">
          <div className="rounded w-[50%] h-[full] flex justify-center items-center relative hover:bg-[#dedede] ">
            <button>
              <Image
                src="./board.svg"
                width={16}
                height={22}
                alt=""
                className="h-auto "
              />
            </button>
            <div className="w-5 border border-blue-500 absolute bottom-0"></div>
          </div>
          <div className="rounded w-1/2 h-[full] flex justify-center items-center relative hover:bg-[#dedede] ">
            <button>
              <Image
                src="./board2.svg"
                width={16}
                height={16}
                alt=""
                className="w-auto "
              />
            </button>
            <div className="w-5 border border-blue-500 absolute bottom-0"></div>
          </div>
        </div>
        <div className="w-20 h-full flex flex-col justify-center text-center hover:bg-[#dedede] rounded">
          QWORD
        </div>
        <div className="w-20 h-full flex flex-col justify-center text-center hover:bg-[#dedede] rounded">
          MS
        </div>
      </div>
      <div className="w-full h-5/6 flex justify-center items-center">
        {/* making the board */}

        {boardType == "standard" ? (
          <div className="w-full h-full flex flex-col ">
            <div className="w-full h-1/6 flex ">
              <div className="w-1/6 h-full min-w-40">
                <button
                  className="flex gap-1 items-center justify-center w-full p-2 h-full hover:bg-[#dedede] rounded "
                  onClick={() => {
                    handler(1);
                  }}
                >
                  <TbLogicNor />
                  Au niveau du bit
                  <BsChevronDown />
                </button>
                <div
                  className={
                    "w-[25vw] grid grid-cols-3 h-[15vh] absolute gap-1 p-1 bg-[#e7e7e7] z-10 rounded " +
                    (menu1 ? "" : " hidden")
                  }
                >
                  {["And", "OR", "NOT", "NAND", "NOR", "XOR"].map((item) => (
                    <Button name={item} key={item} />
                  ))}
                </div>
              </div>
              <div className="w-1/6 h-full min-w-40 relative ">
                <button
                  className="flex gap-1 items-center justify-center w-full p-2 h-full hover:bg-[#dedede] rounded "
                  onClick={() => {
                    handler(2);
                  }}
                >
                  <TbLogicNor />
                  decallage du bit
                  <BsChevronDown />
                </button>
                <div
                  className={`w-full min-w-[200] h-[38vh] bg-[#d0d0d0] z-10 absolute p-3 flex flex-col justify-around rounded overflow-y-auto overflow-hidden ${
                    menu2 ? "" : " hidden"
                  }`}
                >
                  <div className="w-full h-fit flex items-start justify-around gap-5">
                    <div>
                      <input
                        type="radio"
                        className="w-[22px] h-[22px] selection:bg-white "
                        id="arith"
                        name="movement"
                      />
                    </div>
                    <label htmlFor="arith" className="grow lg:text-sm ">
                      Décalage arithmétique
                    </label>
                  </div>
                  <div className="w-full h-fit flex items-start justify-around gap-5">
                    <div>
                      <input
                        type="radio"
                        className="w-[22px] h-[22px]"
                        id="log"
                        name="movement"
                      />
                    </div>
                    <label htmlFor="log" className="grow lg:text-sm ">
                      Décalage logique
                    </label>
                  </div>
                  <div className="w-full h-fit flex items-start justify-around gap-5">
                    <div>
                      <input
                        type="radio"
                        className="w-[22px] h-[22px]"
                        id="par"
                        name="movement"
                      />
                    </div>
                    <label htmlFor="par" className="grow lg:text-sm ">
                      Faire pivoter par le deplacement circulaire
                    </label>
                  </div>
                  <div className="w-full h-fit flex items-start justify-around gap-5">
                    <div>
                      <input
                        type="radio"
                        className="w-[22px] h-[22px]"
                        id="via"
                        name="movement"
                      />
                    </div>
                    <label htmlFor="via" className="grow lg:text-sm ">
                      Faire pivoter via le deplacement circulaire de transport
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full grid grid-cols-5 gap-1">
              {buttonsStandard.map((name) => (
                <Button key={name} name={name} />
              ))}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Page;
