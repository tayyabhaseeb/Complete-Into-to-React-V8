import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "../fetchData/fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery(["breed", animal], fetchBreedList);

  return [results?.data?.breeds ?? [], results.status];
}
