"use client";
import Link from "next/link";

type NextButtonProps = {
  selectedCar: string;
  selectedYear: string;
};

const NextButton = ({ selectedCar, selectedYear }: NextButtonProps) => {
  return (
    <Link
      href={
        selectedCar && selectedYear
          ? `/result/${selectedCar}/${selectedYear}`
          : "#"
      }
    >
      <button
        disabled={!selectedCar || !selectedYear}
        className={`py-2 px-4 text-white rounded ${
          !selectedCar || !selectedYear
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-sky-500 cursor-pointer"
        }`}
      >
        Next
      </button>
    </Link>
  );
};

export default NextButton;
