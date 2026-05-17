import order from "../../../assets/shop/order.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();

  // 🔥 Filter items by category
  const categories = {
    pizza: menu.filter((item) => item.category === "pizza"),
    burgers: menu.filter((item) => item.category === "burger"),
    salads: menu.filter((item) => item.category === "salad"),
    soups: menu.filter((item) => item.category === "soup"),
    drinks: menu.filter((item) => item.category === "drinks"),
  };

  // 🔥 Reusable component
  const renderItems = (items) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {items.map((item) => (
        <FoodCard key={item._id} items={item} />
      ))}
    </div>
  );

  return (
    <div>
      {/* Cover Section */}
      <Cover
        img={order}
        title="Order Food"
        paragraph="Delicious meals delivered to your doorstep. Order now and enjoy!"
      />

      {/* Tabs Section */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <Tabs
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList className="flex justify-center gap-6 text-lg font-semibold">
            <Tab>Pizza</Tab>
            <Tab>Burgers</Tab>
            <Tab>Salads</Tab>
            <Tab>Soups</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          {/* Pizza */}
          <TabPanel>
            <h2 className="text-2xl text-center mt-6">Pizza</h2>
            <p className="text-center text-gray-500">
              Delicious pizzas for you!
            </p>
            {renderItems(categories.pizza)}
          </TabPanel>

          {/* Burgers */}
          <TabPanel>
            <h2 className="text-2xl text-center mt-6">Burgers</h2>
            <p className="text-center text-gray-500">
              Juicy burgers to satisfy your cravings!
            </p>
            {renderItems(categories.burgers)}
          </TabPanel>

          {/* Salads */}
          <TabPanel>
            <h2 className="text-2xl text-center mt-6">Salads</h2>
            <p className="text-center text-gray-500">
              Fresh and healthy salads!
            </p>
            {renderItems(categories.salads)}
          </TabPanel>

          {/* Soups */}
          <TabPanel>
            <h2 className="text-2xl text-center mt-6">Soups</h2>
            <p className="text-center text-gray-500">
              Warm and comforting soups!
            </p>
            {renderItems(categories.soups)}
          </TabPanel>

          {/* Drinks */}
          <TabPanel>
            <h2 className="text-2xl text-center mt-6">Drinks</h2>
            <p className="text-center text-gray-500">
              Refreshing drinks to quench your thirst!
            </p>
            {renderItems(categories.drinks)}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;