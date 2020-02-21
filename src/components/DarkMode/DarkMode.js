import { useEffect } from "react";
import { useLocalStorage } from "./LocalStorage";

///Dark mode, adds a class that targets the body in order to use the LESS stylings for the darkmode
export function useDarkMode() {
  const [value, setValue] = useLocalStorage("darkMode");

  useEffect(() => {
    const body = window.document.body;
    if (value) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [value]);

  return [value, setValue];
}