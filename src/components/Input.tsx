import { useResult } from "../hooks/useResult";

const Input = () => {
  const { number, setNumber } = useResult();
  return (
    <div>
      <label htmlFor="input" className="block font-medium mb-1.5">
        Number
      </label>
      <input
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        name="input"
        id="input"
        className="w-full border border-gray-300 rounded-md p-2"
        placeholder="Enter a number"
      />
    </div>
  );
};

export default Input;
