import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import Features from "../../../assets/home/featured.jpg"
import './Featured.css'

const Featured = () => {
  return (
    <div className="feature-item">
        <SectionTitle
            heading={"Featured Item"}
            subHeading={"Check it out"}
        >

        </SectionTitle>
       <div className="md:flex py-8 px-16 justify-center items-center">
        <div>
         <img src={Features} alt="Featured Item" className="w-100 h-70 cover" />

       </div>
       <div className="md:ml-10 lg:ml-20">
        <p>Aug 20, 2023</p>
        <p className="uppercase font-bold">Where can i get some?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">Order Now</button>
       </div>
       </div>
    </div>
  )
}

export default Featured