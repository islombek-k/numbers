import { useContext } from "react";
import { ResultContext } from "../context/ResultContext";

export const useResult = () => {
  const context = useContext(ResultContext);

  if (!context) throw new Error("Must be wrapped inside ResultProvider");

  return context;
};
