import {useState,  useEffect } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {


    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const popularItems = data.filter (item => item.category === 'popular');
            setMenu(popularItems);
        })
    }, [])

  return (
    <div>
      <section>
        <SectionTitle
          heading={"From Our Menu"}
          subHeading={"Check it out"}
        ></SectionTitle>
        <div>
            {
                menu.map(item => <MenuItem key={item._id} item={item} />)
            }
        </div>
      </section>
    </div>
  );
};

export default PopularMenu;
