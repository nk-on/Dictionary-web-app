import { useContext } from "react";
import { DictionaryConext } from "../Context";
export default function Heading() {
  const { darkModeOn, setDarkModeOn } = useContext(DictionaryConext);
  return (
    <>
      <div className="flex justify-between">
        <img src="public/logo.svg" alt="logo" />
        <div className="flex gap-[30px]">
          <div className="flex items-center gap-[5px]">
            <span className="dark:text-[#E9E9E9] font-bold">Sans serif</span>
            <img src="public/icon-arrow-down.svg" alt="arrow-doen" />
          </div>
          <div className="h-[40px] w-[2px] bg-[#E9E9E9]"></div>
          <img
            src={darkModeOn ? "public/Group-night.svg" : "public/Group-day.svg"}
            alt="Group-day"
            className="cursor-pointer"
            onClick={() => {
              setDarkModeOn(!darkModeOn);
            }}
          />
        </div>
      </div>
      <div className={`flex justify-between items-center px-[20px] h-[50px] w-[100%] bg-[#F4F4F4] dark:bg-[#1F1F1F] mt-[30px] rounded-[10px]`}>
        <input type="text" className="h-[100%] w-[80%]  bg-[#F4F4F4] dark:bg-[#1F1F1F] outline-none font-bold"/>
        <div>
          <img src="public/icon-search.svg" alt="search-bar" />
        </div>
      </div>
    </>
  );
}
