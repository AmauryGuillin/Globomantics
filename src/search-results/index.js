import SearchResultsRow from "./search-results-row";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import HousesContext from "../context/houseContext";

const SearchResults = () => {
  const { country } = useParams();
  const allHouses = useContext(HousesContext);
  const filteredHouses = allHouses.filter((h) => h.country === country);

  return (
    <div className="space-y-2">
      <h4 className="font-bold text-xl">Results for {country}:</h4>
      <table className="w-full">
        <tbody>
          {filteredHouses.map((h) => (
            <SearchResultsRow key={h.id} house={h}></SearchResultsRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
