"use client";
import { useEffect, useState } from "react";

type SelectCarProps = {
  setSelectedCar: (car: string) => void;
};

type VehicleMake = {
  MakeId: string;
  MakeName: string;
};

const SelectCar = ({ setSelectedCar }: SelectCarProps) => {
  const [vehicles, setVehicles] = useState<VehicleMake[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchMakes = async () => {
      setError("");

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_VEHICLE_API_URL}GetMakesForVehicleType/car?format=json`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch vehicle makes");
        }

        const data = await response.json();
        setVehicles(data.Results);
      } catch (err) {
        setError("Failed to load vehicle makes.");
        console.error("Failed to load data:", err);
      }
    };

    fetchMakes();
  }, []);

  if (error !== "") return <div>Error: {error}</div>;

  return (
    <div className="mb-4">
      <select
        onChange={(e) => setSelectedCar(e.target.value)}
        className="border p-2 rounded w-full bg-white"
      >
        <option value="">Select a vehicle make</option>
        {vehicles.map((vehicle) => (
          <option key={vehicle.MakeId} value={vehicle.MakeId}>
            {vehicle.MakeName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCar;
