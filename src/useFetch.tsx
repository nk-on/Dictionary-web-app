import { useEffect, useState } from "react";
import { DictionaryEntry } from "./interfaces";
import { Phonetic } from "./interfaces";
export const useFetch = (url: string) => {
  const [result, setResult] = useState(undefined);
  const [audio, setAudio] = useState<string | undefined>("");
  const [data, setData] = useState<DictionaryEntry | undefined | string>(undefined);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setResult(data));
  }, [url]);
  useEffect(() => {
    if (!result) return;
    if (result.title === "No Definitions Found") {
      setData("No Data");
      return;
    }
    const phonetics: Phonetic[] = result[0].phonetics;
    setAudio(
      phonetics.find((element) => {
        return element.audio.length !== 0;
      })?.audio
    );
    setData(result[0]);
  },[result]);
  return { data, audio };
};
