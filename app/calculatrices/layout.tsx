"use client";
import NavLink from "@/components/NavLink";
import TopBar from "@/components/TopBar";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll("*")
    ) as HTMLElement[];
    elements.forEach((element) => {
      window.addEventListener("keypress", (e) => {
        if (e.key === "b") {
          element.classList.add("borderS");
          element.style.backgroundColor = `rgba(${Math.random() * 255},${
            Math.random() * 255
          },${Math.random() * 255},${Math.random() * 255})`;
        }
        if (e.key === "r") {
          element.classList.remove("borderS");
          element.style.backgroundColor = "";
        }
      });
    });
  }, []);
  const [slide, setSlide] = useState(false);
  const handleClick: () => void = () => {
    setSlide(!slide);
    setClicked(!clicked);
  };
  const [clicked, setClicked] = useState(false);
  // getting the name from the url
  const name = usePathname().split("/")[2];
  return (
    <>
      <main className="w-full h-full flex flex-col relative">
        <header className="w-full h-2 flex items-center p-5">
          <Image width={14} height={15} src="./logo.png" alt="logo" />
          <p className="ml-3 w-fit text-xs ">Calculatrice</p>
        </header>
        <div className="relative w-full h-full flex flex-col">
          <NavLink slide={slide} handleClick={handleClick} />
          <TopBar name={name} handleClick={handleClick} clicked={clicked} />
          <div className="grow ">{children}</div>
        </div>
      </main>
    </>
  );
}
