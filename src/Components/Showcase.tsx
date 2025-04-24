import { useContext} from "react";
import { DictionaryConext } from "../Context";
import SectionTitle from "./SectionTitle";
export default function Showcase() {
  const { data } = useContext(DictionaryConext);
  const meanings = data["meanings"]?.[0]?.definitions;
  const synonym = data["meanings"]?.[0]?.synonyms?.[0];
  const example = data["meanings"]?.[1]?.definitions?.[0]?.["example"];
  const sourceUrls = data["sourceUrls"];
  if ((Object.keys(data).length) === 0) {
    return (
      <>
      
      </>
    );
  }
  return (
      <>
        <div className="flex flex-col gap-[40px] w-[100%] dark:bg-[#050505] dark:text-[#fff]">
          <div className="flex justify-between items-center w-[100%] ">
            <div>
              <h1 className="font-bold text-[64px]">{data.word}</h1>
              <p className="text-[#A445ED]">{data.phonetic}</p>
            </div>
            <div className="h-[20%] flex items-center">
              <img src="public/icon-play.svg" className="cursor-pointer" />
            </div>
          </div>
          <SectionTitle title={"noun"} />
          <div className="flex flex-col">
            <h2 className="text-[#757575] text-[20px]">Meaning</h2>
            <ul className="marker:text-[#8F19E8] px-[30px]">
              {meanings?.map((element, idx) => {
                return (
                  <li key={idx} className="list-disc">
                    {element.definition}
                  </li>
                );
              })}
            </ul>
            <div className="text-[#757575] text-[20px] mt-[50px] font-normal">
              Synonyms: <span className="text-[#8F19E8] font-bold">{synonym}</span>
            </div>
          </div>
          <SectionTitle title="verb" />
          <div className="flex flex-col">
            <h2 className="text-[#757575] text-[20px]">Meaning</h2>
            <ul className="marker:text-[#8F19E8] px-[30px]">
              <li className="list-disc">
                <div className="flex flex-col">
                  {example} <span className="text-[#757575]">"{example}"</span>
                </div>
              </li>
            </ul>
            <div className="flex flex-col gap-[20px]">
              <div className="w-[90%] h-[1px] bg-[#E9E9E9]"></div>
              <div className="text-[#757575] flex gap-[10px]">
                Soruce{" "}
                <span className="text-[#2D2D2D] flex gap-[10px]">
                  <a href={`${sourceUrls}`}>{sourceUrls}</a>
                  <img src="public/icon-new-window.svg" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}
