import React from "react";
import { GrLocation } from "react-icons/gr";
import "../../App.css";
import SearchBar from "../../components/searchbar"
import BgPict from "../../assets/2.png"
import Carousel from "../../components/carousel";
import Tabs from "../../components/tabs";
import { CiShoppingCart } from "react-icons/ci";

const index = () => {
  return (
    <>
      <div className="w-full h-full bgcolordashboard">
        <div className="flex flex-col items-center justify-between ">
          <div className="w-11/12 h-full">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="w-full flex items-center justify-start text-xs text-start text-white py-4 px-2">
                <GrLocation />
                <p>Citra Batam C.07, Kota Batam, Kepulauan Riau 29444</p>
              </div>
              <SearchBar />
              <div className="w-full h-full bg-cover bg-center" style={{backgroundImage : `url(${BgPict})`}}>
                <p className="text-white text-2xl font-semibold">Favorite</p>
                <div className="p-4">
                  <Carousel />
                </div>
                <div className="mb-10">
                  <Tabs/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute bottom-10 right-2 ">
            <button className="rounded-full bg-slate-300/80 text-4xl p-4">
              <CiShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
