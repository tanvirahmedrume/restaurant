import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useState, useEffect } from 'react';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonial = () => {

  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch('reviews.json')
      .then(res => res.json())
      .then(data => {
        setReview(data);
      });
  }, []);

  return (
    <section className="my-20">

      {/* Section Title */}
      <SectionTitle
        heading="What Our Clients Say"
        subHeading="Testimonial"
      />

      {/* Swiper Slider */}
      <Swiper
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Navigation, Autoplay]}
        className="max-w-4xl mx-auto mt-10"
      >
        {
          review.map(rev => (
            <SwiperSlide key={rev._id}>
              
              <div className="flex flex-col items-center text-center gap-4 px-6 py-10 bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 transition-all duration-500 hover:scale-105">
                
                {/* Quote */}
                <p className="text-5xl text-yellow-500">❝</p>

                {/* Review Text */}
                <p className="text-gray-700 italic leading-relaxed max-w-xl">
                  {rev.details}
                </p>

                {/* ⭐ Dynamic Stars */}
                <div className="flex gap-1 text-yellow-500 text-lg">
                  {
                    [...Array(5)].map((_, index) => (
                      <span key={index}>
                        {index < rev.rating ? "★" : "☆"}
                      </span>
                    ))
                  }
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-gray-800 mt-2">
                  {rev.name}
                </h3>

              </div>

            </SwiperSlide>
          ))
        }
      </Swiper>

    </section>
  );
};

export default Testimonial;