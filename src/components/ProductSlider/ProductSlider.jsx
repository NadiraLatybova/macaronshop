import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import './ProductSlider.scss'



// import required modules
import { FreeMode, Thumbs } from 'swiper/modules';

const ProductSlider =({images})=> {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <div className='container'>
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    spaceBetween={10}
                    loop={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Thumbs]}
                    className="mySwiper3"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                style={{ width: '100%', height: '100%'}}
                                src={image} alt={`product-image-${index}`} />

                        </SwiperSlide>
                    ))}

                </Swiper>
                <Swiper

                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode,  Thumbs]}

                    className="mySwiper4"
                >

                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                style={{ width: '100%', height: '100%',}}
                                src={image} alt={`thumb-image-${index}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </>
    );
}
export default ProductSlider;