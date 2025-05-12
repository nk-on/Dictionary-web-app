import { useContext } from "react";
import AppContext, { DictionaryConext } from "./Context";
// import { Outlet} from "react-router";
import { BrowserRouter, Routes, Route } from "react-router";
import Heading from "./Components/Heading/Heading";
import Showcase from "./Components/Showcase";
function AppContent() {
  const { darkModeOn, font } = useContext(DictionaryConext);
  return (
    <div className={`max-w-[100vw] min-h-[100vh] flex justify-center ${font} ${
      darkModeOn && "bg-[#050505]"
    } pt-[5%] pb-[50px] ${darkModeOn && "dark"}`}>
      <div
        className={`lg:w-[50%] w-[80%] h-[90%]`}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Heading />}>
              <Route path="/:id" element={<Showcase />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default function App() {
  return (
    <>
      <AppContext>
        <AppContent></AppContent>
      </AppContext>
    </>
  );
}
