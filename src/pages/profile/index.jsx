import React from "react";
import Navbar from "../../components/navbar";
import { CgProfile } from "react-icons/cg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Card from "../../components/card";
import QrisPict from "../../assets/4.png";
import DanaPict from "../../assets/5.png";
import GopayPict from "../../assets/6.png";

import { BsCashStack } from "react-icons/bs";

const index = () => {
  const tabsActive = "focus:bg-white/60 px-2 rounded";
  return (
    <div className="w-full h-screen bg-black/70 p-4">
      <Navbar />
      <div className="w-full flex flex-col items-center justify-between gap-2 mt-2">
        <CgProfile className="text-8xl text-white" />
        <p className="text-4xl text-white">User</p>
      </div>
      <Tabs className="mt-4">
        <TabList className="flex items-center justify-center gap-4  mb-2 text-white">
          <Tab className={`${tabsActive} text-white`}>Recent</Tab>
          <Tab className={tabsActive}>Wallet</Tab>
        </TabList>

        <TabPanel className="flex flex-col items-center justify-between gap-4 bg-white p-4 ">
          <p className="text-2xl font-bold">Today</p>
          <div className="flex flex-col items-center justify-between gap-2">
            <Card />
            <Card />
          </div>
        </TabPanel>
        <TabPanel className="flex flex-col items-center justify-between gap-4 bg-white  p-4">
          <div className="flex flex-col items-center justify-between gap-2">
            <div className="w-full">
              <div className="border-2 border-gray-300 p-3 flex flex-row items-center justify-start gap-2">
                <img src={DanaPict} />
                <div className="flex flex-row items-center justify-between gap-2 w-full">
                  <p>Not Added</p>
                  <p>Add</p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="border-2 border-gray-300 p-3 flex flex-row items-center justify-start gap-2">
                <img src={GopayPict} />
                <div className="flex flex-row items-center justify-between gap-2 w-full">
                  <p>Not Added</p>
                  <p>Add</p>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default index;
