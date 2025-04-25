import { createContext, ReactNode, useState } from "react";
export interface DictionaryEntry {
    word: string;
    phonetic?: string;
    phonetics: Phonetic[];
    origin?: string;
    sourceUrls:string
    meanings: Meaning[];
  }
  
  export interface Phonetic {
    text?: string;
    audio?: string;
  }
  
  export interface Meaning {
    partOfSpeech: string;
    synonyms:string[];
    definitions: Definition[];
  }
  
  export interface Definition {
    definition: string;
    example?: string;
    synonyms: string[];
    antonyms: string[];
  }
  
interface AppContextType{
    darkModeOn:boolean,
    setDarkModeOn:(value:boolean)=> void,
    data:DictionaryEntry | undefined,
    setData: React.Dispatch<React.SetStateAction<undefined>>
}

const DictionaryConext= createContext<AppContextType>({
    darkModeOn:false,
    setDarkModeOn:()=>{},
    data:undefined,
    setData:()=>{}
});
export default function AppContext({children}:{children:ReactNode}){
    const [darkModeOn,setDarkModeOn] = useState(false);
    const [data,setData] = useState(undefined)
    return (
        <DictionaryConext.Provider value={{darkModeOn,setDarkModeOn,data,setData}}>
            {children}
        </DictionaryConext.Provider>
    )
};
export {DictionaryConext}