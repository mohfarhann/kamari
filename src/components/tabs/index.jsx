import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProductCard from "../cardproduct";
import { coffeeProduct, foodProduct, snackProduct } from "../../utils";
import { CiCoffeeBean } from "react-icons/ci";

const tabsActive = "focus:bg-white/60 px-2 rounded";

export default () => (
  <div className="text-2xl text-white">
    <Tabs>
      <TabList className="flex items-center justify-between gap-4  mb-2">
        <Tab className={tabsActive}>Coffee</Tab>
        <Tab className={tabsActive}>Food</Tab>
        <Tab className={tabsActive}>Snack</Tab>
      </TabList>

      <TabPanel className="flex flex-col items-center justify-between gap-4">
          <div className="w-full bg-black flex items-center justify-between gap-2 p-2 rounded">
            <p>Coffeebased</p>
            <CiCoffeeBean  className="text-4xl"/>
          </div>
        
        <div className="grid grid-cols-2 gap-4 w-full">
          {coffeeProduct.map((items, index) => (
              <ProductCard product={items} key={index} />
          ))}
        </div>
      </TabPanel>
      <TabPanel className="flex flex-col items-center justify-between gap-4">
        <div className="w-full bg-black flex items-center justify-between gap-2 p-2 rounded">
          <p>Food</p>
          <CiCoffeeBean  className="text-4xl"/>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
          {foodProduct.map((items, index) => (
            <ProductCard product={items} key={index} />
          ))}
        </div>
      </TabPanel>
      <TabPanel className="flex flex-col items-center justify-between gap-4">
        <div className="w-full bg-black flex items-center justify-between gap-2 p-2 rounded">
          <p>Snack</p>
          <CiCoffeeBean  className="text-4xl"/>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
          {snackProduct.map((items, index) => (
            <ProductCard product={items} key={index} />
          ))}
        </div>
      </TabPanel>
    </Tabs>
  </div>
);
