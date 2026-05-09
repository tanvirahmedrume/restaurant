import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";



const Menu = () => {


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
    </div>
  );
};

export default Menu;
