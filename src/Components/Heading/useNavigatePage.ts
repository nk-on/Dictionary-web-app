import { useNavigate } from "react-router";
import type { Dispatch, SetStateAction } from "react";
export function navigatePage(inputValue: string,
  setErrorState: Dispatch<SetStateAction<boolean>>,
  navigate: ReturnType<typeof useNavigate> ):void {
    if (inputValue === "") {
        setErrorState(true);
        return;
    }
    setErrorState(false);
    navigate(`/${inputValue}`)
}