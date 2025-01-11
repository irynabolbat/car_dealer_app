"use client";
import { useState } from "react";
import SelectCar from "./components/SelectCar";
import SelectYear from "./components/SelectYear";
import NextButton from "./components/NextButton";

export default function Home() {
  const [selectedCar, setSelectedCar] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");

  return (
    <div className="flex flex-col min-h-screen p-6">
      <h1 className="text-5xl font-bold text-center text-sky-400 mb-8">
        Car Dealer
      </h1>

      <SelectCar setSelectedCar={setSelectedCar} />
      <SelectYear setSelectedYear={setSelectedYear} />

      <div className="mt-6 text-center">
        <NextButton selectedCar={selectedCar} selectedYear={selectedYear} />
      </div>
    </div>
  );
}
