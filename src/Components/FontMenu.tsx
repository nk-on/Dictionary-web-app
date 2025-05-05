import { useContext } from "react";
import { DictionaryConext } from "../Context";
const fontItems = [
  {
    title: "Sans Serif",
    fontName: "font-inter",
    id: 0,
  },
  {
    title: "Serif",
    fontName: "font-lora",
    id: 1,
  },
  {
    title: "Mono",
    fontName: "font-inconsolata",
    id: 2,
  },
];
function FontMenu() {
  const { setFont } = useContext(DictionaryConext);
  return (
    <div className="w-[183px] h-[152px] bg-[#fff] shadow-custom absolute top-[7vh] dark:bg-[#1F1F1F] dark:text-[#fff] lg:top-[18vh] lg:left-[55vw] rounded-[18px] flex justify-center items-center">
      <ul>
        {fontItems.map((item) => (
          <li
            className={`${item.fontName} font-bold cursor-pointer  hover:text-[#A445ED]`}
            onClick={() => setFont(item.fontName)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FontMenu;
