import ErrorPage from "./ErrorPage";
import NounSection from "./NounSection";
import VerbSection from "./VerbSection";
import { useParams } from "react-router";
import Loading from "./Loading";
import { useFetch } from "../useFetch";
export default function Showcase() {
  const { id } = useParams();
  const {data,audio} = useFetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${id}`)
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
