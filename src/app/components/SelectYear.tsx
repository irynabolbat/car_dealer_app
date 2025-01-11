"use client";

type SelectYearProps = {
  setSelectedYear: (year: string) => void;
};

const SelectYear = ({ setSelectedYear }: SelectYearProps) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2015 + 1 },
    (_, index) => 2015 + index
  );

  return (
    <div className="mb-4">
      <select
        onChange={(e) => setSelectedYear(e.target.value)}
        className="border p-2 rounded w-full bg-white"
      >
        <option value="">Select model year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectYear;
