import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Autoplay,EffectFade} from 'swiper/modules';
import './MySwiper.scss'
import 'swiper/css/effect-fade';


const MySwiper = () => {
    return (
        <div className='mySwiper'>

                <Swiper
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{

                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    speed={1000}

                    modules={[Autoplay]}
                    className="mySwiper"

                >
                    <div className='mySwiper__content'>
                        <SwiperSlide>

                            <div className='mySwiper__row'>
                                <img src="https://macaronshop.ru/wp-content/uploads/2021/06/Almond.svg" alt=""/>
                                <p className='mySwiper__text'>МИНДАЛЬНАЯ МУКА </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='mySwiper__row'>
                                <img src="  https://macaronshop.ru/wp-content/uploads/2021/06/delivery.svg" alt=""/>
                                <p className='mySwiper__text'>ОПТОВЫЕ ПОСТАВКИ</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='mySwiper__row'>
                                <img src="https://macaronshop.ru/wp-content/uploads/2021/06/cake.svg" alt=""/>
                                <p className='mySwiper__text'>ВСЕГДА СВЕЖЕЕ</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='mySwiper__row'>
                                <img src="https://macaronshop.ru/wp-content/uploads/2021/06/truck-delivery.svg" alt=""/>
                                <p className='mySwiper__text'>БЕРЕЖНАЯ ДОСТАВКА</p>
                            </div>
                        </SwiperSlide>
                    </div>


                </Swiper>
            </div>




    );
};

export default MySwiper;