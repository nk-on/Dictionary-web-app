import { createContext, ReactNode, useState } from "react";
interface AppContextType{
    darkModeOn:boolean,
    setDarkModeOn:(value:boolean)=> void,
    data:object,
    setData: React.Dispatch<React.SetStateAction<boolean>>
}
const DictionaryConext= createContext<AppContextType>({
    darkModeOn:false,
    setDarkModeOn:()=>{},
    data:{},
    setData:()=>{}
});
export default function AppContext({children}:{children:ReactNode}){
    const [darkModeOn,setDarkModeOn] = useState(false);
    const [data,setData] = useState({})
    return (
        <DictionaryConext.Provider value={{darkModeOn,setDarkModeOn,data,setData}}>
            {children}
        </DictionaryConext.Provider>
    )
};
export {DictionaryConext}