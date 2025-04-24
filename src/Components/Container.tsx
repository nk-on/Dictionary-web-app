import Heading from "./Heading";
import { useContext } from "react";
import { DictionaryConext } from "../Context";
import Showcase from "./Showcase";
export default function Container() {
  const {darkModeOn} = useContext(DictionaryConext);
  return (
    <div
      className={`max-w-[100vw] min-h-[100vh] flex justify-center ${darkModeOn && 'bg-[#050505]'} items-center ${
        darkModeOn && "dark"
      }`}
    >
      <div className="lg:w-[50%] w-[80%] h-[90%]">
        <Heading />
        <Showcase />
      </div>
    </div>
  );
}
