function Switch({
  isRandom,
  setIsRandom,
}: {
  isRandom: boolean;
  setIsRandom: (isRandom: boolean) => void;
}) {
  const toggleSwitch = () => setIsRandom(!isRandom);

  return (
    <div className="flex items-center gap-3 my-4">
      <div
        onClick={toggleSwitch}
        className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer ${
          isRandom ? "bg-black" : "bg-gray-300"
        }`}
      >
        <div
          className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${
            isRandom ? "translate-x-5" : ""
          }`}
        />
      </div>
      <p
        className="font-medium text-sm hover:cursor-pointer"
        onClick={toggleSwitch}
      >
        Use random number
      </p>
    </div>
  );
}

export default Switch;
