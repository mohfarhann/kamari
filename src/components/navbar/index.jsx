import React from "react";
import { IoIosArrowBack, IoIosHome, IoIosCart } from "react-icons/io";
import { Link } from "react-router-dom";

const index = () => {
  const flexBetween = "flex flex-row items-center justify-between";
  return (
    <div>
      <div className="w-full h-full mb-2">
        <div className={`${flexBetween}  bg-slate-600`}>
          <div className={`${flexBetween} w-full text-2xl text-white`}>
            <Link to={`/dashboard`}>
              <div className={flexBetween}>
                <IoIosArrowBack />
                <IoIosHome />
              </div>
            </Link>
            <Link to={`/dashboard/cart`}>
              <div className={flexBetween}>
                <p>Add</p>
                <IoIosCart />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
