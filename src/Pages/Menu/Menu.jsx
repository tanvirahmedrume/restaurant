import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Menu | Bistro Boss</title>
      </Helmet>
      <Cover
        img={menuImg}
        title="Our Menu"
        paragraph="Discover our delicious selection of dishes made with the finest ingredients."
      ></Cover>
      <SectionTitle
        heading={"Today's Offer"}
        subHeading={"Don't miss"}
      ></SectionTitle>

      {/* Offered MEnu */}
      <MenuCategory
        items={offered}
        title="Today's Offer"
        coverImg={menuImg}
      ></MenuCategory>

      {/* Desserts itmes */}

      <SectionTitle
        heading={"Desserts"}
        subHeading={"Sweet Treats"}
      ></SectionTitle>
      <MenuCategory
        items={desserts}
        title="Desserts"
        coverImg={dessertImg}
      ></MenuCategory>

      {/* Soup items */}
      <SectionTitle
        heading={"Soups"}
        subHeading={"Warm and Comforting"}
      ></SectionTitle>

      <MenuCategory items={soup} title="Soup" coverImg={soupImg}></MenuCategory>

      {/* Salad items */}
      <SectionTitle
        heading={"Salads"}
        subHeading={"Fresh and Healthy"}
      ></SectionTitle>
      <MenuCategory
        items={salad}
        title="Salads"
        coverImg={saladImg}
      ></MenuCategory>

      {/* Pizza items */}
      <SectionTitle
        heading={"Pizzas"}
        subHeading={"Delicious and Satisfying"}
      ></SectionTitle>
      <MenuCategory
        items={pizza}
        title="Pizza"
        coverImg={pizzaImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
