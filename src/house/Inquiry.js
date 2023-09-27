import { useState } from "react";

const Inquiry = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    remarks: "",
  });

  const onChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(contactInfo);
  };
  return (
    <form className="mt-5 space-y-3">
      <div>
        <div>
          <label className="font-bold text-lg">Name</label>
        </div>
        <div>
          <input
            type="text"
            className="border-black border-[1px] rounded px-2 w-80"
            placeholder="Name"
            id="name"
            value={contactInfo.name}
            onChange={onChange}
          ></input>
        </div>
      </div>
      <div>
        <div>
          <label className="font-bold text-lg">Email address</label>
        </div>
        <div>
          <input
            type="text"
            className="border-black border-[1px] rounded px-2 w-80"
            id="email"
            placeholder="Email"
            value={contactInfo.email}
            onChange={onChange}
          />
        </div>
      </div>
      <div>
        <div>
          <label className="font-bold text-lg">Remarks</label>
        </div>
        <div>
          <input
            type="text"
            className=" border-black border-[1px] rounded px-2 w-80"
            id="remarks"
            placeholder="Remarks"
            value={contactInfo.remarks}
            onChange={onChange}
          />
        </div>
      </div>
      <button
        disabled={!contactInfo.name || !contactInfo.email}
        onClick={onSubmit}
        className="h-10 w-20 bg-gray-200 p-2 rounded cursor-pointer hover:bg-gray-300 hover:border-[1px]"
      >
        Submit
      </button>
    </form>
  );
};

export default Inquiry;
