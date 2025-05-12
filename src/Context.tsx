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
    font:string,
    setFont:React.Dispatch<React.SetStateAction<string>>
}

const DictionaryConext= createContext<AppContextType>({
    darkModeOn:false,
    setDarkModeOn:()=>{},
    font:'',
    setFont:()=>{}

});
export default function AppContext({children}:{children:ReactNode}){
    const [darkModeOn,setDarkModeOn] = useState(false);
    const [font,setFont] = useState<string>('')
    return (
        <DictionaryConext.Provider value={{darkModeOn,setDarkModeOn,font,setFont}}>
            {children}
        </DictionaryConext.Provider>
    )
};
export {DictionaryConext}