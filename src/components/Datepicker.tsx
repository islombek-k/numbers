type DayMonthPickerProps = {
  day: string;
  setDay: (date: string) => void;
  month: string;
  setMonth: (month: string) => void;
};

function DayMonthPicker({ day, setDay, month, setMonth }: DayMonthPickerProps) {
  const days = Array.from(
    { length: month === "02" ? 28 : 31 },
    (_, i) => i + 1
  );
  const months = [
    { value: "01", name: "January" },
    { value: "02", name: "February" },
    { value: "03", name: "March" },
    { value: "04", name: "April" },
    { value: "05", name: "May" },
    { value: "06", name: "June" },
    { value: "07", name: "July" },
    { value: "08", name: "August" },
    { value: "09", name: "September" },
    { value: "10", name: "October" },
    { value: "11", name: "November" },
    { value: "12", name: "December" },
  ];

  return (
    <div className="flex flex-col items-start space-y-2 mt-4">
      <label className="font-medium">Select Day and Month</label>

      <div className="flex space-x-4">
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        >
          <option value="" disabled>
            Select month
          </option>
          {months.map((m) => (
            <option key={m.value} value={m.value}>
              {m.name}
            </option>
          ))}
        </select>

        <select
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        >
          <option value="" disabled>
            Select day
          </option>
          {days.map((d) => (
            <option key={d} value={d < 10 ? `0${d}` : d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      {day && month && (
        <p className="mt-2 text-sm text-gray-600">
          Selected: {month}-{day} (MM-DD)
        </p>
      )}
    </div>
  );
}

export default DayMonthPicker;
