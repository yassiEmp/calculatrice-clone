import React, { useState } from "react";

const Screen = ({ display }: { display: string }) => {
  const [ongoingOperation, setOngoingOperation] = useState(" 3  x ");
  return (
    <section className="w-full flex flex-col h-1/8">
      {/* CREATING A P TAG TO DISPLAY THE CURRENT OPERATION */}
      <p className="h-6 text-xs text-right text-gray-400 p-4">{ongoingOperation}</p>
      {/* CREATING A P TAG TO DISPLAY THE CURRENT RESULT */}
      <input className="text-right text-6xl bg-transparent w-full lg:text-8xl min-[100px]:text-xl" value={display} readOnly />
    </section>
  );
};

export default Screen;
