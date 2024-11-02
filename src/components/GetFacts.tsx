import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";
import Switch from "./Switch";
import DatePicker from "./Datepicker";
import { useResult } from "../hooks/useResult";
import { factType } from "../context/ResultContext";
import { useFetchFact } from "../hooks/useFetchFact";

const GetFacts = () => {
  const {
    setLoading,
    // setFact,
    setFactType,
    factType,
    number,
    isRandom,
    setIsRandom,
  } = useResult();

  const fetchFact = useFetchFact();

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  const onSubmit = async () => {
    setLoading(true);

    const url =
      factType === "date"
        ? `http://numbersapi.com/${month}/${day}/date`
        : `http://numbersapi.com/${
            isRandom ? randomNumber : number
          }/${factType}`;

    await fetchFact(url);
  };

  const onSelectType = (type: factType) => {
    setFactType(type);
    setDay("");
    setMonth("");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="w-full max-w-lg mt-12"
    >
      <Card>
        <div className="mb-4">
          <h1 className="text-2xl font-semibold">Number Facts</h1>
          <p className="text-sm">
            Choose a number and fact type to learn something interesting!
          </p>
        </div>
        <div>
          <label htmlFor="countries" className="block font-medium mb-2">
            Select an option
          </label>
          <select
            name="fact_type"
            id="fact_type"
            value={factType}
            className="w-full border border-gray-300 rounded-md p-2"
            onChange={(e) => onSelectType(e.target.value as factType)}
          >
            <option value="math">Math</option>
            <option value="trivia">Trivia</option>
            <option value="date">Date</option>
          </select>
        </div>
        {factType !== "date" ? (
          <Switch isRandom={isRandom} setIsRandom={setIsRandom} />
        ) : null}
        {!isRandom && factType !== "date" ? <Input /> : null}
        {factType === "date" ? (
          <DatePicker
            day={day}
            setDay={setDay}
            month={month}
            setMonth={setMonth}
          />
        ) : null}
        <Button disabled={!isRandom && !number && !day && !month} />
      </Card>
    </form>
  );
};

export default GetFacts;
