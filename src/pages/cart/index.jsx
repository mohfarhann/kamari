import React from "react";
import Card from "../../components/card";
import { BsCashStack } from "react-icons/bs";
import { FaListUl } from "react-icons/fa6";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import QrisPict from "../../assets/4.png";
import DanaPict from "../../assets/5.png";
import GopayPict from "../../assets/6.png";
import { Link } from "react-router-dom";

const index = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <div className="w-full h-screen bg-black/70 p-4">
      <Card />
      <div>
        <div className="w-full absolute bottom-0 left-0">
          <div className="w-full bg-white p-4">
            <div className="w-full  flex flex-row items-center justify-between">
              <div className="flex flex-col items-start justify-between w-6/12 text-start ">
                <p className="font-bold">Bill</p>
                <p className="text-xs">current use</p>
                <button className="rounded bg-white border-2 border-yellow-300 flex flex-row items-center justify-between gap-2 px-2">
                  <BsCashStack className="text-yellow-200" />
                  <p className="">Cash Payment</p>
                </button>
              </div>
              <div className="flex flex-col items-end justify-between w-4/12 font-bold">
                <p>Total</p>
                <p className="text-3xl">4000000</p>
              </div>
            </div>
            <div className="w-full  flex flex-row items-center justify-between mt-2">
              <div className="flex flex-col items-start justify-between w-2/12 text-start ">
                <Button onClick={() => handleOpen("md")} variant="gradient">
                  <FaListUl className="text-white text-4xl" />
                </Button>
              </div>
              <div className="flex flex-col items-end justify-between w-8/12 font-bold">
                <Link to={`/dashboard/payments/done`} className="w-full">
                  <button className="w-full rounded bg-yellow-800 p-4">
                    <p className="font-bold text-2xl">PAY</p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={open} size={"md"} handler={handleOpen}>
        <DialogHeader>Payment Method</DialogHeader>
        <DialogBody>
          <div className="flex flex-col items-center justify-between gap-2">
            <div className="w-full">
              <p>current method</p>
              <div className="border-2 border-yellow-300 p-3 flex flex-row items-center justify-start gap-2">
                <BsCashStack className="text-yellow-200 text-4xl" />
                <p className="">Cash Payment</p>
              </div>
            </div>
            <div className="w-full">
              <p>Choose your Payments</p>
              <div className="border-2 border-yellow-300 p-3 flex flex-row items-center justify-start gap-2">
              <img src={QrisPict}/>
                <p className="">Qris Payment</p>
              </div>
            </div>
            <div className="w-full">
              <p>Guess can't use this payment method</p>
              <div className="border-2 border-gray-300 p-3 flex flex-row items-center justify-start gap-2">
                <img src={DanaPict}/>
                <div className="flex flex-row items-center justify-between gap-2 w-full">
                  <p>Not Added</p>
                  <p>Add</p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="border-2 border-gray-300 p-3 flex flex-row items-center justify-start gap-2">
                <img src={GopayPict}/>
                <div className="flex flex-row items-center justify-between gap-2 w-full">
                  <p>Not Added</p>
                  <p>Add</p>
                </div>
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen(null)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => handleOpen(null)}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default index;
