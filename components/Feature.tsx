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
      return <div>i am the calculator programmeur</div>;
  }
};

export default Feature;
