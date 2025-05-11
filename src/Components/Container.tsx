import { useContext } from "react";
import AppContext, { DictionaryConext } from "../Context";
import { Outlet, useParams } from "react-router";
import Showcase from "./Showcase";
export default function Container() {
  const params = useParams();
  console.log(params)
  const { darkModeOn, font } = useContext(DictionaryConext);
  return (
    <AppContext>
      <div
        className={`max-w-[100vw] min-h-[100vh] flex justify-center ${font} ${
          darkModeOn && "bg-[#050505]"
        } pt-[5%] pb-[50px] ${darkModeOn && "dark"}`}
      >
        <div className="lg:w-[50%] w-[80%] h-[90%]">
          <Outlet />
          <Showcase />
        </div>
      </div>
    </AppContext>
  );
}
