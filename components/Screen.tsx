import React, { useState } from "react";

const Screen = ({ display }: { display: string }) => {
  const [ongoingOperation, setOngoingOperation] = useState(" 3  x ");
  return (
    <section className="w-full flex flex-col h-48">
      {/* CREATING A P TAG TO DISPLAY THE CURRENT OPERATION */}
      <p className="h-15 text-xs text-right grow text-gray-400 p-4">{ongoingOperation}</p>
      {/* CREATING A P TAG TO DISPLAY THE CURRENT RESULT */}
      <input className="text-right text-8xl h-23 bg-transparent w-full" value={display} readOnly />
    </section>
  );
};

export default Screen;
