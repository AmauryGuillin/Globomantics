import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import HousesContext from "../context/houseContext";

const HouseFilter = () => {
  const navigate = useNavigate();
  const allHouses = useContext(HousesContext);

  const countries = allHouses
    ? Array.from(new Set(allHouses.map((h) => h.country)))
    : [];
  console.log(countries);

  const onSearchChange = (e) => {
    const country = e.target.value;
    if (country === "Select a country") {
      navigate("/");
    } else {
      navigate(`/searchresults/${country}`);
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-end items-center gap-x-2">
        <div>Look for you dream house in country:</div>
        <div>
          <select className="w-80 h-10 pl-3" onChange={onSearchChange}>
            <option>Select a country</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default HouseFilter;
