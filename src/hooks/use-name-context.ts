import { useContext } from "react";
import NameContext from "../context/NameContext";

export default function useNameContext() {
  const context = useContext(NameContext);

  if (!context) {
    throw new Error(`Context not exist`);
  }

  return context;
}