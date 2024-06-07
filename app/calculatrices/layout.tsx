"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
  const elements = Array.from(document.querySelectorAll("*")) as HTMLElement[];
  elements.forEach((element) => {
    window.addEventListener("keypress", (e) => {
      if (e.key === "b") {
        element.classList.add("border");
        element.style.backgroundColor = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
      }
      if (e.key === "r") {
        element.classList.remove("border");
        element.style.backgroundColor = "";
      }
    });
  });
}, []);
  return (
    <>
      <main className="w-full h-full flex flex-col ">
        <header className="w-full h-2 flex items-center p-5">
          <Image width={14} height={15} src="/logo.png" alt="logo" />
          <p className="ml-3 w-fit text-xs">Calculatrice</p>
        </header>
        <div className="grow">{children}</div>
      </main>
    </>
  );
}
