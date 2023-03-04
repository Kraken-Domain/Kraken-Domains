import React from "react";
import { AiOutlineCopy } from "react-icons/ai";

const LookupCard = ({}) => {
  return (
    <div className="mt-6 bg-black-gradient mx-[240px] rounded-lg rex">
      <div className="px-12 py-6 text-secondary-white">
        <div className="flex gap-6 items-center">
          <h1 className="my-2">
            <span className="font-bold"> Domain Owner Address: </span>
            0xB52C9D7C7a155E5D...
          </h1>
          <button className="text-sm bg-purple-600 font-bold rounded-lg p-2">
            View on Fantom
          </button>
          <AiOutlineCopy className="text-xl cursor-pointer" />
        </div>
        <div className="flex gap-4 items-center">
          <h1 className="my-4">
            <span className="font-bold">Tld Contract Address:</span>{" "}
            &nbsp;&nbsp;&nbsp; 0xB52C9D7C7a155E5D...
          </h1>
          <button className="text-sm bg-purple-600 font-bold rounded-lg p-2 mt-4">
            View on Fantom
          </button>
          <AiOutlineCopy className="text-xl cursor-pointer" />
        </div>
        <h1 className="my-1">
          <span className="font-bold">Domain Token ID:</span>
          &nbsp;&nbsp; 0001
        </h1>
        <div className="flex items-center">
          <h1 className="my-4">
            <span className="font-bold">Domain Factory Address:</span>
            &nbsp; 0xB52C9D7C7a155E5D288D...
          </h1>
          <button className="text-sm bg-purple-600 font-bold rounded-lg p-2 ">
            View on Fantom
          </button>
          &nbsp;&nbsp;&nbsp;
          <AiOutlineCopy className="text-xl cursor-pointer" />
        </div>
        <h1 className="my-4">
          TLD Status: &nbsp;&nbsp;&nbsp;
          <span className="bg-green-600 p-2 rounded-xl font-bold">
            Active
          </span>{" "}
        </h1>
      </div>
    </div>
  );
};

export default LookupCard;
