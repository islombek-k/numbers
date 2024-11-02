import { createContext } from "react";

export type factType = "math" | "date" | "trivia";

type ContextTypes = {
  fact: string;
  setFact: (value: string) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
  factType: factType;
  setFactType: (value: factType) => void;
  number: string;
  setNumber: (value: string) => void;
  isRandom: boolean;
  setIsRandom: (value: boolean) => void;
};

export const ResultContext = createContext<ContextTypes | undefined>(undefined);
