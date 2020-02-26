import { useState } from "react";

//local storage used in order to save the darkmode choices.
export function useLocalStorage(key) {
  const item = JSON.parse(localStorage.getItem(key));

  const [storedValue, setStoredValue] = useState(item);

  const setValue = value => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  };

  return [storedValue, setValue];
}