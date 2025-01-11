import { ModelType } from "@/types/ModelType";
import { ResultType } from "@/types/ResultType";

export async function generateStaticParams() {
  const makes = await fetch(
    `${process.env.NEXT_PUBLIC_VEHICLE_API_URL}GetMakesForVehicleType/car?format=json`
  );
  const makesData = await makes.json();
  const makesList = makesData.Results;

  const years = Array.from(
    { length: new Date().getFullYear() - 2015 + 1 },
    (_, index) => 2015 + index
  );

  const params: ResultType[] = makesList.flatMap((make: ModelType) => {
    return years.map((year) => ({
      makeId: make.Model_ID,
      year: year.toString(),
    }));
  });

  return {
    paths: params.map(({ makeId, year }) => ({
      params: { makeId, year },
    })),
    fallback: true,
  };
}
