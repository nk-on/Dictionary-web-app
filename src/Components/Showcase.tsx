import ErrorPage from "./ErrorPage";
import NounSection from "./NounSection";
import VerbSection from "./VerbSection";
import { DictionaryEntry, Phonetic} from "../interfaces";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Loading from "./Loading";
export default function Showcase() {
  const { id } = useParams();
  const [data, setData] = useState<DictionaryEntry | undefined | string>(undefined);
  const [audio, setAudio] = useState<string | undefined>("");
  async function fetchDictData() {
    if (id === "") return;
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${id}`);
    const data = await res.json();
    return data;
  }
  useEffect(() => {
    (async () => {
      const result = await fetchDictData();
      if (!result) return;
      if (result.title === "No Definitions Found") {
        setData("No Data");
        return;
      }
      const phonetics:Phonetic[] = result[0].phonetics;
      setAudio( phonetics.find((element) => {
          return element.audio.length !== 0;
        })?.audio);
      setData(result[0]);
      return;
    })();
  }, [id]);
  console.log(data)
  if (data === undefined) return <> 
   <Loading />
  </>;
  if (typeof data === "string") {
    return (
      <>
        <ErrorPage></ErrorPage>
      </>
    );
  }
  const meanings = data["meanings"]?.[0]?.definitions;
  const synonym = data["meanings"]?.[0]?.synonyms?.[0];
  const example = data["meanings"]?.[1]?.definitions?.[0]?.["example"];
  const sourceUrls = data["sourceUrls"];
  return (
    <>
      <div className="flex flex-col gap-[40px] w-[100%] dark:bg-[#050505] dark:text-[#fff]">
        <div className="flex justify-between items-center gap-[30px] w-[100%] ">
          <div>
            <h1 className="font-bold text-[64px]">{data.word}</h1>
            <p className="text-[#A445ED]">{data.phonetic}</p>
          </div>
          <div className="h-[20%] flex items-center">
            <img
              src="public/icon-play.svg"
              alt="play"
              onClick={() => {
                const audioElement = document.querySelector(".audioElement");
                if (audioElement instanceof HTMLAudioElement) {
                  audioElement.play();
                }
              }}
            />
            <audio controls className="audioElement w-[50px] h-[50px] bg-red opacity-0" key={audio}>
              <source src={audio} type="audio/mpeg" />
            </audio>
          </div>
        </div>
        <NounSection meanings={meanings} synonym={synonym} />
        {example && <VerbSection example={example} />}
        <div className="flex flex-col gap-[20px]">
          <div className="w-[90%] h-[1px] bg-[#E9E9E9] mt-[20px]"></div>
          <div className="text-[#757575] flex gap-[30px]">
            Soruce{" "}
            <span className="text-[#2D2D2D] flex gap-[5px]">
              <a href={`${sourceUrls}`} className="dark:text-[#fff]">
                {sourceUrls}
              </a>
              <img src="public/icon-new-window.svg" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
