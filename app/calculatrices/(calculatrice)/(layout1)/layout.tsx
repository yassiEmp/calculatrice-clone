"use client";
import Feature from "@/components/Feature";
//import the topbar and leftbar from the components folder
import LeftBar from "@/components/LeftBar.jsx";
import Screen from "@/components/Screen";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const directory = path.split("/"); //get the current path
  const name = directory[2]; // get the name of the current calculator
  const [display, setDisplay] = useState("3");
  const setNumber = ()=>{
    const c: any = localStorage.getItem("display")
    setDisplay(c)
  }
  return (
    <>
      <section className="flex h-full">
        <section className="h-full w-4/5 flex flex-col p-2">
          {/* Screen to display information to user */}
          <Screen display={display} />
          <Feature name={name} />
          {children}
        </section>
      </section>
      <LeftBar />
    </>
  );
}
