import { useContext,  useState } from "react";
import { DictionaryConext } from "../../Context";
import FontMenu from "./FontMenu";
import { Outlet} from "react-router";
import {navigatePage} from "./useNavigatePage";
import { useNavigate } from "react-router";
export default function Heading() {
  const { darkModeOn, setDarkModeOn} = useContext(DictionaryConext);
  const [inputValue, setInputValue] = useState("");
  const [error, setErrorState] = useState(false);
  const [fontMenuIsVisable, setFontMenuIsVisable] = useState(false);
   const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between">
        <img src="public/logo.svg" alt="logo" />
        <div className="flex gap-[30px]">
          <div className="flex items-center gap-[5px]">
            <span className="dark:text-[#E9E9E9] lg:text-[15px] font-bold">
              Sans serif
            </span>
            <img
              src="public/icon-arrow-down.svg"
              alt="arrow-down"
              className="cursor-pointer"
              onClick={() => setFontMenuIsVisable((prev) => !prev)}
            />
            {fontMenuIsVisable && <FontMenu />}
          </div>
          <div className="h-[40px] w-[2px] bg-[#E9E9E9]"></div>
          <img
            src={darkModeOn ? "public/Group-night.svg" : "public/Group-day.svg"}
            alt="Group-day"
            className="cursor-pointer"
            onClick={() => {
              setDarkModeOn(!darkModeOn);
              console.log(darkModeOn)
            }}
          />
        </div>
      </div>
      <div
        className={`flex justify-between items-center px-[20px] h-[50px] w-[100%] ${
          error && "border border-red-500"
        } bg-[#F4F4F4] dark:bg-[#1F1F1F] mt-[30px] rounded-[10px]  hover:border border-[#A345ed]`}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
          className="h-[100%] w-[80%] dark:text-[#fff]  bg-[#F4F4F4] dark:bg-[#1F1F1F] outline-none font-bold"
        />
        <div>
          <img
            src="public/icon-search.svg"
            alt="search-bar"
            
            onClick={() => {
              navigatePage(inputValue, setErrorState, navigate)
            }}
          />
        </div>
      </div>
      <div>{error && <p className="text-red">Whoops, can’t be empty…</p>}</div>
      <div className="lg:w-[100%] w-[80%] h-[90%]">
        <Outlet />
      </div>
    </>
  );
}
