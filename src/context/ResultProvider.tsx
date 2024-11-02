import { ReactNode, useState } from "react";
import { factType, ResultContext } from "./ResultContext";

const ResultProvider = ({ children }: { children: ReactNode }) => {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(false);
  const [factType, setFactType] = useState<factType>("math");
  const [number, setNumber] = useState("");
  const [isRandom, setIsRandom] = useState(false);

  return (
    <ResultContext.Provider
      value={{
        fact,
        setFact,
        loading,
        setLoading,
        factType,
        setFactType,
        number,
        setNumber,
        isRandom,
        setIsRandom,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export default ResultProvider;
