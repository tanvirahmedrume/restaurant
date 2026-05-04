import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'



const Category = () => {
  return (
    <div>
         <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide><img src={slide1} alt="Slide 1" />
            <h4 className='text-center text-gray-500 -mt-25 uppercase font-semibold text-xl'>Salad</h4>
        </SwiperSlide>
        <SwiperSlide><img src={slide2} alt="Slide 2" />
            <h4 className='text-center text-gray-500 -mt-25 uppercase font-semibold text-xl'>Pizza</h4>
        </SwiperSlide>
        <SwiperSlide><img src={slide3} alt="Slide 3" />
            <h4 className='text-center text-gray-500 -mt-25 uppercase font-semibold text-xl'>Tea</h4>
        </SwiperSlide>
        <SwiperSlide><img src={slide4} alt="Slide 4" />
            <h4 className='text-center text-gray-500 -mt-25 uppercase font-semibold text-xl'>Dessert</h4>
        </SwiperSlide>
        <SwiperSlide><img src={slide5} alt="Slide 5" />
            <h4 className='text-center text-gray-500 -mt-25 uppercase font-semibold text-xl'>Vegitable</h4>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Category