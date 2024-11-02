const ResultShimmer = () => {
  return (
    <div className="w-full max-w-lg animate-pulse">
      <div className="border rounded-lg p-4 shadow-md bg-white">
        <div className="border-b border-b-gray-300 pb-4">
          <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
          <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        </div>
        <div className="pt-4">
          <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
          <div className="h-3 bg-gray-300 rounded w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ResultShimmer;
