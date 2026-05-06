import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import Features from "../../../assets/home/featured.jpg"
import './Featured.css'

const Featured = () => {
  return (
    <div className="feature-item bg-fixed text-white my-20">

      <SectionTitle 
        heading="Featured Item"
        subHeading="Check it out"
      />

      {/* Overlay + Full Width */}
      <div className="w-full bg-black/40 backdrop-blur-sm py-16">
        
        <div className="max-w-6xl mx-auto px-6 md:flex items-center gap-10">
          
          {/* Image */}
          <div className="md:w-1/2">
            <img 
              src={Features} 
              alt="Featured Item" 
              className="w-full h-72 md:h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2 mt-8 md:mt-0 space-y-4">
            <p className="text-sm text-gray-200">Aug 20, 2023</p>

            <h2 className="text-2xl md:text-3xl font-bold uppercase leading-snug">
              Where can I get some?
            </h2>

            <p className="text-gray-200 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <button className="mt-4 px-6 py-2 border-b-4 border-yellow-500 hover:bg-yellow-600 transition-all duration-300 rounded text-white font-semibold">
              Order Now
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Featured