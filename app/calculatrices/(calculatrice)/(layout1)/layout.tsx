"use client";
import Feature from "@/components/Feature";
//import the topbar and leftbar from the components folder
import LeftBar from "@/components/LeftBar.jsx";
import Screen from "@/components/Screen";
import TopBar from "@/components/TopBar.jsx";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const directory = path.split("/"); //get the current path
  const name = directory[2]; // get the name of the current calculator
  const [display, setDisplay] = useState("3");
  const calculatricesFolderStructure = [
    "standard",
    "scientifique",
    "graphique",
    "programmeur",
    "date",
  ];
  const converterFolderStructure = [
    "devise",
    "volume",
    "longueur",
    "poids et Masse",
    "temperature",
    "energie",
    "surface",
    "vitesse",
    "heure",
    "puissance",
    "donnée",
    "pression",
    "angle",
  ];
  const [slide, setSlide] = useState(true);
  const handleClick = () => {
    setSlide(!slide);
  };
  return (
    <>
      <section className="flex h-full relative">
        <section className="h-full w-4/5">
          <div className=" ">
            <nav
              className={`absolute w-80 h-full bg-neutral-300 rounded flex flex-col p-5 gap-4 ${
                slide ? "translate-x-0" : "-translate-x-full "
              }transition-transform duration-200`}
            >
              <div className="space w-9 h-8"></div>
              <div>
                <h4 className="text-xsl text-gray-600">Calculatrices</h4>
                {/* making an next js link to each calculatrices in the calculatrices folder*/}
                {calculatricesFolderStructure.map((folder) => (
                  <Link
                    href={`/calculatrices/${folder}`}
                    key={folder}
                    className="capitalize w-full h-10 flex items-center pl-3 hover:bg-neutral-400 rounded"
                  >
                    {folder}
                  </Link>
                ))}
              </div>
              <div>
                <h4 className="text-xsl text-gray-600">Convertisseur</h4>
                {/* making an next js link to each calculatrices in the calculatrices folder*/}
                {converterFolderStructure.map((folder) => (
                  <Link
                    href={`/calculatrices/${folder}`}
                    key={folder}
                    className="capitalize w-full h-10 flex items-center pl-3 hover:bg-neutral-400 rounded"
                  >
                    {folder}
                  </Link>
                ))}
              </div>

              <div className="end-0">
                <p>Parametre</p>
              </div>
            </nav>
            <TopBar name={name} handleClick={handleClick} clicked={slide} />
          </div>
          {/* Screen to display information to user */}
          <Screen display={display} />
          <Feature name={name} />
          {children}
        </section>
        <LeftBar />
      </section>
    </>
  );
}
