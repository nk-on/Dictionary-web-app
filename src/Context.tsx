import { createContext, ReactNode, useState } from "react";
interface AppContextType{
    darkModeOn:boolean,
    setDarkModeOn:(value:boolean)=> void,
}
const DictionaryConext= createContext<AppContextType>({
    darkModeOn:false,
    setDarkModeOn:()=>{},
});
export default function AppContext({children}:{children:ReactNode}){
    const [darkModeOn,setDarkModeOn] = useState(false);
    return (
        <DictionaryConext.Provider value={{darkModeOn,setDarkModeOn}}>
            {children}
        </DictionaryConext.Provider>
    )
};
export {DictionaryConext}