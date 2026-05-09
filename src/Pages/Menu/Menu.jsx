import {Helmet} from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from '../../assets/menu/banner3.jpg'

const Menu = () => {
  return (
    <div>
        <Helmet>
            <title>Menu | Bistro Boss</title>
        </Helmet>
        <Cover img={menuImg}></Cover>
        <h2 className="text-3xl text-center">This is Menu page</h2>
    </div>
  )
}

export default Menu