import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar";
import { IoMdStar } from "react-icons/io";
import {
  Radio,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";

const ProductPages = () => {
  const location = useLocation();
  const data = location.state.data;
  return (
    <>
      <div className="w-full h-full bg-black/80 p-4">
        <Navbar />
        <div className="flex flex-row items-center justify-between gap-4">
          <img src={data.img} className="rounded" />
          <div className="w-full">
            <p className="text-4xl font-bold text-white">{data.name}</p>
            <p className="text-white text-xs">{data.tags}</p>
            <div className="flex flex-row items-center justify-between w-2/12">
              <IoMdStar className="text-yellow-400" />
              <p className="text-white">{data.ratings}</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[500px] mt-2 py-2 overflow-auto">
          <div className="flex flex-row items-center justify-between gap-4 mt-2">
            <div className="w-full">
              <div className="flex flex-col items-center justify-between gap-2">
                <div className="w-full bg-black text-white p-2">
                  <p>
                    Size <span className="text-gray-300">(Choose 1)</span>
                  </p>
                </div>
                <div className="w-full rounded bg-white/90 p-2">
                  <List>
                    <ListItem className="p-0">
                      <label
                        htmlFor="vertical-list-size"
                        className="flex w-full cursor-pointer items-center py-2"
                      >
                        <ListItemPrefix className="mr-3">
                          <Radio
                            name="vertical-list"
                            id="vertical-list-size"
                            ripple={false}
                            className="hover:before:opacity-0"
                            containerProps={{
                              className: "p-2",
                            }}
                            label={
                              <div>
                                <Typography
                                  color="blue-gray"
                                  className="font-medium"
                                >
                                  Large
                                </Typography>
                                <Typography
                                  variant="small"
                                  color="gray"
                                  className="font-normal"
                                >
                                  4000
                                </Typography>
                              </div>
                            }
                          />
                        </ListItemPrefix>
                      </label>
                    </ListItem>
                    <ListItem className="p-0">
                      <label
                        htmlFor="vertical-list-size"
                        className="flex w-full cursor-pointer items-center py-2"
                      >
                        <ListItemPrefix className="mr-3">
                          <Radio
                            name="vertical-list"
                            id="vertical-list-size"
                            ripple={false}
                            className="hover:before:opacity-0"
                            containerProps={{
                              className: "p-2",
                            }}
                            label={
                              <div>
                                <Typography
                                  color="blue-gray"
                                  className="font-medium"
                                >
                                  Normal
                                </Typography>
                                <Typography
                                  variant="small"
                                  color="gray"
                                  className="font-normal"
                                >
                                  0
                                </Typography>
                              </div>
                            }
                          />
                        </ListItemPrefix>
                      </label>
                    </ListItem>
                  </List>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between gap-4 mt-2">
            <div className="w-full">
              <div className="flex flex-col items-center justify-between gap-2">
                <div className="w-full bg-black text-white p-2">
                  <p>
                    Avaible in <span className="text-gray-300">(Choose 1)</span>
                  </p>
                </div>
                <div className="w-full rounded bg-white/90 p-2">
                  <List>
                    <ListItem className="p-0">
                      <label
                        htmlFor="vertical-list-available"
                        className="flex w-full cursor-pointer items-center py-2"
                      >
                        <ListItemPrefix className="mr-3">
                          <Radio
                            name="vertical-list"
                            id="vertical-list-available"
                            ripple={false}
                            className="hover:before:opacity-0"
                            containerProps={{
                              className: "p-2",
                            }}
                            label={
                              <div>
                                <Typography
                                  color="blue-gray"
                                  className="font-medium"
                                >
                                  Ice
                                </Typography>
                                <Typography
                                  variant="small"
                                  color="gray"
                                  className="font-normal"
                                >
                                  0
                                </Typography>
                              </div>
                            }
                          />
                        </ListItemPrefix>
                      </label>
                    </ListItem>
                    <ListItem className="p-0">
                      <label
                        htmlFor="vertical-list-available"
                        className="flex w-full cursor-pointer items-center py-2"
                      >
                        <ListItemPrefix className="mr-3">
                          <Radio
                            name="vertical-list"
                            id="vertical-list-available"
                            ripple={false}
                            className="hover:before:opacity-0"
                            containerProps={{
                              className: "p-2",
                            }}
                            label={
                              <div>
                                <Typography
                                  color="blue-gray"
                                  className="font-medium"
                                >
                                  Hot
                                </Typography>
                                <Typography
                                  variant="small"
                                  color="gray"
                                  className="font-normal"
                                >
                                  0
                                </Typography>
                              </div>
                            }
                          />
                        </ListItemPrefix>
                      </label>
                    </ListItem>
                  </List>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between gap-4 mt-2">
            <div className="w-full">
              <div className="flex flex-col items-center justify-between gap-2">
                <div className="w-full bg-black text-white p-2">
                  <p>
                    Sugar Level{" "}
                    <span className="text-gray-300">(Choose 1)</span>
                  </p>
                </div>
                <div className="w-full rounded bg-white/90 p-2">
                  <List>
                    <ListItem className="p-0">
                      <label
                        htmlFor="vertical-list-sugar"
                        className="flex w-full cursor-pointer items-center py-2"
                      >
                        <ListItemPrefix className="mr-3">
                          <Radio
                            name="vertical-list"
                            id="vertical-list-sugar"
                            ripple={false}
                            className="hover:before:opacity-0"
                            containerProps={{
                              className: "p-2",
                            }}
                            label={
                              <div>
                                <Typography
                                  color="blue-gray"
                                  className="font-medium"
                                >
                                  1
                                </Typography>
                                <Typography
                                  variant="small"
                                  color="gray"
                                  className="font-normal"
                                >
                                  0
                                </Typography>
                              </div>
                            }
                          />
                        </ListItemPrefix>
                      </label>
                    </ListItem>
                    <ListItem className="p-0">
                      <label
                        htmlFor="vertical-list-sugar"
                        className="flex w-full cursor-pointer items-center py-2"
                      >
                        <ListItemPrefix className="mr-3">
                          <Radio
                            name="vertical-list"
                            id="vertical-list-sugar"
                            ripple={false}
                            className="hover:before:opacity-0"
                            containerProps={{
                              className: "p-2",
                            }}
                            label={
                              <div>
                                <Typography
                                  color="blue-gray"
                                  className="font-medium"
                                >
                                  2
                                </Typography>
                                <Typography
                                  variant="small"
                                  color="gray"
                                  className="font-normal"
                                >
                                  0
                                </Typography>
                              </div>
                            }
                          />
                        </ListItemPrefix>
                      </label>
                    </ListItem>
                    <ListItem className="p-0">
                      <label
                        htmlFor="vertical-list-sugar"
                        className="flex w-full cursor-pointer items-center py-2"
                      >
                        <ListItemPrefix className="mr-3">
                          <Radio
                            name="vertical-list"
                            id="vertical-list-sugar"
                            ripple={false}
                            className="hover:before:opacity-0"
                            containerProps={{
                              className: "p-2",
                            }}
                            label={
                              <div>
                                <Typography
                                  color="blue-gray"
                                  className="font-medium"
                                >
                                  3
                                </Typography>
                                <Typography
                                  variant="small"
                                  color="gray"
                                  className="font-normal"
                                >
                                  0
                                </Typography>
                              </div>
                            }
                          />
                        </ListItemPrefix>
                      </label>
                    </ListItem>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full absolute bottom-0 ">
          <div className="w-full bg-white p-4">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center justify-between gap-4 w-6/12 ">
                <button className="rounded bg-gray-600 w-4/12">-</button>
                <p>1</p>
                <button className="rounded bg-yellow-700 w-4/12">+</button>
              </div>
              <div className="flex flex-col items-end justify-between w-4/12 font-bold">
                <p>Total</p>
                <p className="text-3xl">4000000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPages;
