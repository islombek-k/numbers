import GetFacts from "./components/GetFacts";
import ResultCard from "./components/ResultCard";
import ResultProvider from "./context/ResultProvider";

function App() {
  return (
    <ResultProvider>
      <div className="flex flex-col gap-6 items-center justify-center">
        <GetFacts />
        <ResultCard />
      </div>
    </ResultProvider>
  );
}

export default App;
