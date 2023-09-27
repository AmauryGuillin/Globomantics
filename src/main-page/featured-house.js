import House from "../house";

const FeaturedHouse = ({ house }) => {
  if (house)
    return (
      <div>
        <div className="">
          <h3 className="flex justify-center items-center bg-orange-300 h-10 text-2xl font-semibold">
            Featured house
          </h3>
        </div>
        <House house={house} />
      </div>
    );

  return <div>No featured house at this time</div>;
};

export default FeaturedHouse;
