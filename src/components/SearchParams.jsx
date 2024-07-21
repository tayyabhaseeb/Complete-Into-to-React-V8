import { useDeferredValue, useEffect, useState, useMemo } from "react";
import Pet from "./Pet";
import useBreedList from "../hooks/useBreedList";
import Results from "./Results";
import { useQuery } from "@tanstack/react-query";
import fetchAll from "../fetchData/fetchAll";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [formData, setformData] = useState({
    location: "",
    animal: "",
    breed: "",
  });

  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });

  const [breeds, isLoaded] = useBreedList(requestParams.animal);

  const results = useQuery(
    ["search", formData.animal, formData.location, formData.breed],
    fetchAll
  );

  const pets = results?.data?.pets ?? [];

  const deferredPets = useDeferredValue(pets);
  const renderPets = useMemo(
    () => <Results pets={deferredPets} />,
    [deferredPets]
  );

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setformData(requestParams);
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            placeholder="Location"
            name="location"
            value={requestParams.location}
            onChange={(e) =>
              setRequestParams((prev) => ({
                ...prev,
                location: e.target.value,
              }))
            }
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
            onChange={(e) => {
              setRequestParams((prev) => ({
                ...prev,
                animal: e.target.value,
                breed: "", // Reset breed when animal changes
              }));
            }}
            onBlur={(e) => {
              setRequestParams((prev) => ({
                ...prev,
                animal: e.target.value,
                breed: "", // Reset breed when animal changes
              }));
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            name="breed"
            value={requestParams.breed}
            onChange={(e) =>
              setRequestParams((prev) => ({ ...prev, breed: e.target.value }))
            }
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {renderPets}
    </div>
  );
};

export default SearchParams;
