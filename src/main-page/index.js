import "./main-page.css";
import Header from "./header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeaturedHouse from "./featured-house";
import SearchResults from "../search-results";
import HouseFilter from "./house-filter";
import HouseFromQuery from "../house/houseFromQuery";
import useHouses from "../hooks/useHouses";
import useFeaturedHouse from "../hooks/useFeaturedHouse";
import HousesContext from "../context/houseContext";

function App() {
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);

  return (
    <Router>
      <HousesContext.Provider value={allHouses}>
        <div>
          <Header subtitle="Providing houses all over the world" />
          <HouseFilter />
          <Routes>
            <Route path="/searchresults/:country" element={<SearchResults />} />
            <Route path="/house/:id" element={<HouseFromQuery />} />
            <Route path="/" element={<FeaturedHouse house={featuredHouse} />} />
          </Routes>
        </div>
      </HousesContext.Provider>
    </Router>
  );
}

export default App;
