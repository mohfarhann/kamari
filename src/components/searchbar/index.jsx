import React from "react";

import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-4 w-full">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Latte, Expresso, Irish Kurimu, etc..."
            className="w-full border border-gray-300 rounded-lg py-2 pl-8 pr-4 focus:outline-none focus:border-blue-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <CiSearch className="text-gray-400" />
          </div>
        </div>
        <div className="text-4xl rounded-full bg-white">
          <Link to={`/dashboard/profile`}>
            <CgProfile />
          </Link>
        </div>
      </div>
    </>
  );
};

export default index;
