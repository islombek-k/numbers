import Card from "./Card";
import { useResult } from "../hooks/useResult";
import ResultShimmer from "./ResultShimmer";

const ResultCard = () => {
  const { fact, factType, loading, number, isRandom } = useResult();

  if (loading) return <ResultShimmer />;

  if (!fact) return null;

  return (
    <div className="w-full max-w-lg">
      <Card>
        <div className=" border-b border-b-gray-300 pb-4">
          <h2 className="font-semibold">Your input:</h2>
          <p className="text-sm">
            {factType === "date"
              ? ""
              : `Number: ${isRandom ? "Random" : number} |`}{" "}
            Type:
            <span className="capitalize"> {factType}</span>
          </p>
        </div>
        <div className="pt-4">
          <h2 className="font-semibold">Fact:</h2>
          <p className="text-sm">{fact}</p>
        </div>
      </Card>
    </div>
  );
};

export default ResultCard;
