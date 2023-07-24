import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-20">
            <Swiper navigation={true} className="mySwiper">
                
                {
                  reviews.map(review =><SwiperSlide
                  key={review._id}
                  >
                    <div className=" flex flex-col items-center mx-24 my-16">
                        <h3 className="text-7xl font-bold space-x-0">❛ ❛</h3>
                        <p className="py-4">{review.collegeName}</p>
                        <h3 className="text-2xl text-orange-400">{review.reviewerName}</h3>
                        <p className="">{review.rating}</p> 
                        <p className="">{review.comments}</p> 
                    </div>
                  </SwiperSlide> )
                }
             </Swiper>
        </section>
    );
};

export default Review;