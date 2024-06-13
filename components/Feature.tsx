import React from "react";

const Feature = ({ name }: { name: string }) => {
  switch (name) {
    case "standard":
      return (
        <div className="flex ">
          <button className="w-[60px] h-[60px] flex items-center justify-center rounded-lg hover:bg-gray-200">
            MC
          </button>
          <button className="w-[60px] h-[60px] flex items-center justify-center rounded-lg hover:bg-gray-200">
            MR
          </button>
          <button className="w-[60px] h-[60px] flex items-center justify-center rounded-lg hover:bg-gray-200">
            M+
          </button>
          <button className="w-[60px] h-[60px] flex items-center justify-center rounded-lg hover:bg-gray-200">
            M-
          </button>
          <button className="w-[60px] h-[60px] flex items-center justify-center rounded-lg hover:bg-gray-200">
            MS
          </button>
        </div>
      );

    case "scientifique":
      return (
        <div className="flex flex-col">
          <div className="flex ">
            <div className="w-[60px] h-[60px] flex items-center justify-center rounded-lg hover:bg-gray-200">
              DEG
            </div>
            <div className="w-[60px] h-[60px] flex items-center justify-center rounded-lg hover:bg-gray-200">
              F-E
            </div>
          </div>
          <div className="flex ">
            <button className="w-[60px] h-[60px] flex items-center justify-center rounded-lg hover:bg-gray-200">
              MC
            </button>
            <button className="w-[60px] h-[60px] flex items-center justify-center rounded-lg hover:bg-gray-200">
              MR
            </button>
            <button className="w-[60px] h-[60px] flex items-center justify-center rounded-lg hover:bg-gray-200">
              M+
            </button>
            <button className="w-[60px] h-[60px] flex items-center justify-center rounded-lg hover:bg-gray-200">
              M-
            </button>
            <button className="w-[60px] h-[60px] flex items-center justify-center rounded-lg hover:bg-gray-200">
              MS
            </button>
          </div>
        </div>
      );

    case "programmeur":
      return (
        <div className="h-1/5 ">
          <div className="h-full flex flex-col">
          <div className="flex h-1/4 gap-2 relative pl-4 m-1 items-center hover:bg-[#5f5f5f40] rounded">
            <div className="absolute w-1 bg-blue-500 rounded h-1/2 left-0"></div>
            <p className="uppercase w-20">hex</p>
            <p>56</p>
          </div>
          <div className="flex h-1/4 gap-2 relative pl-4 m-1 items-center hover:bg-[#5f5f5f40] rounded">
            <div className="absolute w-1 bg-blue-500 rounded h-1/2 left-0"></div>
            <p className="uppercase w-20">dec</p>
            <p>2151</p>
          </div>
          <div className="flex h-1/4 gap-2 relative pl-4 m-1 items-center hover:bg-[#5f5f5f40] rounded">
            <div className="absolute w-1 bg-blue-500 rounded h-1/2 left-0"></div>
            <p className="uppercase w-20">oct</p>
            <p>4505</p>
          </div>
          <div className="flex h-1/4 gap-2 relative pl-4 m-1 items-center hover:bg-[#5f5f5f40] rounded">
            <div className="absolute w-1 bg-blue-500 rounded h-1/2 left-0"></div>
            <p className="uppercase w-20">bin</p>
            <p>14541</p>
          </div>
          </div>
        </div>
      )
  }
};

export default Feature;
