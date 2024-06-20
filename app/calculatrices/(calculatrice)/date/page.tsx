"use client";
import React, { useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const layout = () => {
  const [type, setType] = useState("difference");
  const [clicked, setClicked] = useState(false);
  const [message,setMessage]= useState("Date identique")
  const inp1:any = useRef(null)
  const inp2:any = useRef(null)
  function getDurée(Date1:number,Date2:number):number{
    const Duree = Date1 - Date2 
    return Duree
  }
  function handleDateChange(date1:string,date2:string){
    const Date1 = new Date(date1)
    console.log("Date1: ", Date1);
    const Date2 = new Date(date2)
    console.log("Date2: ", Date2);
    return 
  }
  /// remember to fix the date it must work evenn if the month or the date return 1 digit ex = 1
  const dateString = `${new Date().getFullYear()}-0${new Date().getMonth()}-0${new Date().getDay()}`
  let c= Array(999);
  const handleClick = (word: string) => {
    switch (word) {
      case "difference":
        if (!clicked) {
          return;
        }
        setType((type) => (type = "difference"));
        break;
      case "operation":
        if (!clicked) {
          return;
        }
        setType((type) => (type = "operation"));
        break;
    }
  };
  return (
    <div className="relative p-4">
      <div className="w-[250px] overflow-hidden h-9 "></div>
      <div
        className={`w-[300px] overflow-hidden absolute top-0 rounded flex flex-col justify-around ${
          clicked
            ? " h-20 bg-[#e7e7e7] p-2 shadow-[0px_0px_15px_5px] shadow-[#00000025] "
            : " h-9 "
        } `}
        onClick={() => {
          setClicked((clicked) => !clicked);
        }}
      >
        <button
          onClick={() => handleClick("difference")}
          className={`w-full text-left h-7 relative flex items-center p-2 hover:bg-[#e0e0e0] rounded justify-between ${!clicked&&type=="operation" ? "hidden" : ""}`}
        >{clicked&&type!=="operation"?
          <div className="absolute h-1/2 w-1 bg-blue-900 left-0 rounded "></div>:<></>}
          Difference entre les dates
          <BsChevronDown />
        </button>
        <button
          onClick={() => handleClick("operation")}
          className={`w-full text-left h-7 relative flex items-center p-2 hover:bg-[#e0e0e0] justify-between rounded ${
            !clicked&&type!=="operation" ? "hidden" : ""} `}
        >{clicked&&type=="operation"?
          <div className="absolute h-1/2 w-1 bg-blue-900 left-0 rounded "></div>:<></>}
          Ajouter ou soustraire des jours
          <BsChevronDown />
        </button>
      </div>
      {type == "difference" ? (
        <>
          <div className="flex flex-col w-[300px] gap-4 mt-3 ">
            <p className="text-[#5c5c5c]">De</p>
            <input
              ref={inp1}
              type="date"
              className="bg-transparent w-[150px]"
              defaultValue={dateString }
              onChange={(e)=>handleDateChange(e.currentTarget.value,inp2.current.value)}
              
            />
          </div>
          <div className="flex flex-col w-[300px] gap-4 mt-3 ">
            <p className="text-[#5c5c5c]">A</p>
            <input
              ref={inp2}
              type="date"
              className="bg-transparent w-[150px]"
              defaultValue={dateString }
              onChange={(e)=>handleDateChange(e.currentTarget.value,inp1.current.value)}
              
            />
          </div>
          <div className="flex flex-col w-[300px] gap-4 mt-3 ">
            <p className="text-[#5c5c5c]">Difference</p>
            <p className="text-2xl">{message}</p>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col w-[300px] gap-4 mt-3 ">
            <p className="text-[#5c5c5c]">De</p>
            <input
              type="date"
              className="bg-transparent w-[150px]"
              defaultValue={dateString }
            />
          </div>
          <div className="flex gap-4 pt-3">
            <div className=" flex gap-3 justify-center items-center"><input type="radio" className="w-5 h-5 " name="type" id="Ajouter"/><label htmlFor="Ajouter">Ajouter</label></div>
            <div className=" flex gap-3 justify-center items-center"><input type="radio" className="w-5 h-5 " name="type" id="Soustraire"/><label htmlFor="Soustraire">Soustraire</label></div>
          </div>
          <div>
            <select name="annee" id="annee">
            </select>
          </div>
        </>
      )}
    </div>
  );
};

export default layout;
