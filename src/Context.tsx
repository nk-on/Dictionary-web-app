import { createContext, ReactNode, useState } from "react";

interface AppContextType {
  darkModeOn: boolean;
  setDarkModeOn: (value: boolean) => void;
  font: string;
  setFont: React.Dispatch<React.SetStateAction<string>>;
}

const DictionaryConext = createContext<AppContextType>({
  darkModeOn: false,
  setDarkModeOn: () => {},
  font: "",
  setFont: () => {},
});
export default function AppContext({ children }: { children: ReactNode }) {
  const [darkModeOn, setDarkModeOn] = useState(false);
  const [font, setFont] = useState<string>("");
  return (
    <DictionaryConext.Provider value={{ darkModeOn, setDarkModeOn, font, setFont }}>
      {children}
    </DictionaryConext.Provider>
  );
}
export { DictionaryConext };
