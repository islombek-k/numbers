import { useResult } from "./useResult";

export const useFetchFact = () => {
  const { setLoading, setFact } = useResult();
  const fetchFact = async (url: string) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network error");
      const data = await response.text();
      setFact(data);
    } catch (error) {
      console.error("Error fetching fact:", error);
      setFact("An error occurred while fetching the fact.");
    } finally {
      setLoading(false);
    }
  };
  return fetchFact;
};
