import { useState } from "react";
import emailIcon from "./Email.png";
import Inquiry from "./Inquiry";

const House = ({ house }) => {
  const [inquiryShown, setInquirySown] = useState(false);
  const inquiryClick = () => {
    setInquirySown(!inquiryShown);
  };
  return (
    <div className="space-y-2 p-2">
      <div>
        <h5 className="font-semibold text-xl">{house.country}</h5>
      </div>
      <div>
        <h3 className="font-semibold text-2xl">{house.address}</h3>
      </div>
      <div className="flex gap-10">
        <div className="w-[50%]">
          <img src={`/images/${house.photo}.jpeg`} alt="House" />
        </div>
        <div className="w-[50%]">
          <p className="text-2xl text-orange-400 mb-4">${house.price}</p>
          <p className="text-justify">{house.description}</p>
          <img
            src={emailIcon}
            alt="inquiry"
            className="h-10 mt-3 cursor-pointer"
            onClick={inquiryClick}
          />
          {inquiryShown && <Inquiry house={house} />}
        </div>
      </div>
    </div>
  );
};

export default House;
