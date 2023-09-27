import { useNavigate } from "react-router-dom";

const SearchResultsRow = ({ house }) => {
  const navigate = useNavigate();
  const setActive = () => {
    navigate(`/house/${house.id}`);
  };

  return (
    <tr
      className="cursor-pointer hover:bg-gray-200 h-[60px]"
      onClick={setActive}
    >
      <td className="p-2">{house.address}</td>
      <td>{house.price}</td>
      <td>{house.likes}</td>
    </tr>
  );
};

export default SearchResultsRow;
