import { useState } from "react";

export default function useArray(defaultValue: any) {
  const [array, setArray] = useState(defaultValue);

  function push(element: any) {
    setArray((prevState: any) => [...prevState, element]);
  }

  function filter(callback: any) {
    setArray((prevState: any) => prevState.filter(callback));
  }

  function update(index: number, newElement: any) {
    setArray((prevState: any) => [
      ...prevState.slice(0, index),
      newElement,
      ...prevState.slice(index + 1, prevState.length),
    ]);
  }

  function remove(index: number) {
    setArray((prevState: any) => [
      ...prevState.slice(0, index),
      ...prevState.slice(index + 1, prevState.length),
    ]);
  }

  function clear() {
    setArray([]);
  }

  return { array, set: setArray, push, filter, update, remove, clear };
}
