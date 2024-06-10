import Link from "next/link";
import React, { useState } from "react";
interface NavLinksProps {
  slide: boolean;
  handleClick: () => void;
}
const NavLink: React.FC<NavLinksProps> = ({ slide, handleClick }) => {
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
  return (
    <nav
      className={`absolute z-20 w-80 h-full bg-neutral-300 rounded flex flex-col pl-5 pr-5 gap-10 overflow-hidden                  ${
        slide ? "translate-x-0" : "-translate-x-full "
      }transition-transform duration-200`}
    >
      <div className="relative top-3 w-9 h-8"></div>
      <div className="overflow-y-auto">
        <div>
          <h4 className="text-xsl text-gray-600">Calculatrices</h4>
          {/* making an next js link to each calculatrices in the calculatrices folder*/}
          {calculatricesFolderStructure.map((folder) => (
            <Link
              href={`/calculatrices/${folder}`}
              key={folder}
              className="capitalize w-full h-10 flex items-center pl-3 hover:bg-neutral-400 rounded"
              onClick={() => handleClick()}
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
              onClick={() => handleClick()}
            >
              {folder}
            </Link>
          ))}
        </div>
      </div>

      <div className="bottom-0 ">
        <p>Parametre</p>
      </div>
    </nav>
  );
};

export default NavLink;
