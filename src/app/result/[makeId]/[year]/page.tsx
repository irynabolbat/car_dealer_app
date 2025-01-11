"use client";
import { ModelType } from "@/types/ModelType";
import { ResultType } from "@/types/ResultType";
import React, { useEffect, useState } from "react";

const ResultPage = ({ params }: { params: ResultType }) => {
  const { makeId, year } = params;
  const [models, setModels] = useState<ModelType[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setError("");

    const fetchModels = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_VEHICLE_API_URL}GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch vehicle models");
        }

        const data = await response.json();
        setModels(data.Results);
      } catch (err) {
        setError("Failed to load vehicle makes.");
        console.error("Failed to load data:", err);
      }
    };

    fetchModels();
  }, [makeId, year]);

  if (error !== "") return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">
        Vehicle Models for {makeId} - {year}:
      </h1>
      {models.length > 0 ? (
        <ul className="grid grid-cols-2 gap-4">
          {models.map((model, index) => (
            <li key={index} className="border bg-white p-4 mb-2">
              🚙 {`${model.Model_ID} - ${model.Model_Name}`}
            </li>
          ))}
        </ul>
      ) : (
        <div>No models found.</div>
      )}
    </div>
  );
};

export default ResultPage;
