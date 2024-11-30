import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Pagination, Navigation, Keyboard} from 'swiper/modules';
import combo from "../assets/catalogCombo.svg";
import cart from "../assets/cart.svg";
import combo2 from "../assets/catalogCombo2.svg";
import combo3 from "../assets/catalogCombo3.svg";
import combo4 from "../assets/catalogCombo4.svg";

const NewsSwiper = () => {
    return (
        <div>
            <>
                <Swiper
                    cssMode={true}
                    navigation={true}

                    modules={[Navigation,]}
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}

                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='catalog__combo-block'>
                            <img src={combo} alt=""/>
                            <div className='catalog__combo-item'>
                                <h2 className='catalog__combo-subtitle'>1 макарон и 1 эклер </h2>
                                <p className='catalog__combo-desc'>промо-набор</p>
                            </div>
                            <div className='catalog__combo-line'></div>
                            <div className='catalog__combo-box'>
                                <div className='catalog__combo-items'>
                                    <p className='catalog__combo-price'>750 руб</p>
                                </div>
                                <div className='catalog__combo-cart'>
                                    <img src={cart} alt=""/>
                                    <p className='catalog__combo-carts'>В корзину</p>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='catalog__combo-block'>
                            <img src={combo2} alt=""/>
                            <div className='catalog__combo-item'>
                                <h2 className='catalog__combo-subtitle'>Всего понемногу </h2>
                                <p className='catalog__combo-desc'>3 эклера, 4 трубочки, 6 макарун. <br/> Вкусы:
                                    клубника - базилик, кокос, <br/>голубой сыр, пармезан</p>
                            </div>
                            <div className='catalog__combo-line'></div>
                            <div className='catalog__combo-box'>
                                <div className='catalog__combo-items'>
                                    <p className='catalog__combo-price'>750 руб</p>
                                </div>
                                <div className='catalog__combo-cart'>
                                    <img src={cart} alt=""/>
                                    <p className='catalog__combo-carts'>В корзину</p>
                                </div>
                            </div>

                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='catalog__combo-block'>
                            <img src={combo3} alt=""/>
                            <div className='catalog__combo-item'>
                                <h2 className='catalog__combo-subtitle'>Ещё побольше</h2>
                                <p className='catalog__combo-desc'>3 эклера, 4 трубочки, 6 макарун. <br/> Вкусы:
                                    клубника - базилик, кокос,<br/> голубой сыр, пармезан</p>
                            </div>
                            <div className='catalog__combo-line'></div>
                            <div className='catalog__combo-box'>
                                <div className='catalog__combo-items'>
                                    <p className='catalog__combo-price'>750 руб</p>
                                </div>
                                <div className='catalog__combo-cart'>
                                    <img src={cart} alt=""/>
                                    <p className='catalog__combo-carts'>В корзину</p>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='catalog__combo-block'>
                            <img src={combo4} alt=""/>
                            <div className='catalog__combo-item'>
                                <h2 className='catalog__combo-subtitle'>Ещё побольше</h2>
                                <p className='catalog__combo-desc'>3 эклера, 4 трубочки, 6 макарун. <br/> Вкусы:
                                    клубника - базилик, кокос, <br/> голубой сыр, пармезан</p>
                            </div>
                            <div className='catalog__combo-line'></div>
                            <div className='catalog__combo-box'>
                                <div className='catalog__combo-items'>
                                    <p className='catalog__combo-price'>750 руб</p>
                                </div>
                                <div className='catalog__combo-cart'>
                                    <img src={cart} alt=""/>
                                    <p className='catalog__combo-carts'>В корзину</p>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide> <SwiperSlide>
                    <div className='catalog__combo-block'>
                        <img src={combo4} alt=""/>
                        <div className='catalog__combo-item'>
                            <h2 className='catalog__combo-subtitle'>Ещё побольше</h2>
                            <p className='catalog__combo-desc'>3 эклера, 4 трубочки, 6 макарун. <br/> Вкусы: клубника -
                                базилик, кокос, <br/> голубой сыр, пармезан</p>
                        </div>
                        <div className='catalog__combo-line'></div>
                        <div className='catalog__combo-box'>
                            <div className='catalog__combo-items'>
                                <p className='catalog__combo-price'>750 руб</p>
                            </div>
                            <div className='catalog__combo-cart'>
                                <img src={cart} alt=""/>
                                <p className='catalog__combo-carts'>В корзину</p>
                            </div>
                        </div>

                    </div>
                </SwiperSlide> <SwiperSlide>
                    <div className='catalog__combo-block'>
                        <img src={combo4} alt=""/>
                        <div className='catalog__combo-item'>
                            <h2 className='catalog__combo-subtitle'>Ещё побольше</h2>
                            <p className='catalog__combo-desc'>3 эклера, 4 трубочки, 6 макарун. <br/> Вкусы: клубника -
                                базилик, кокос, <br/> голубой сыр, пармезан</p>
                        </div>
                        <div className='catalog__combo-line'></div>
                        <div className='catalog__combo-box'>
                            <div className='catalog__combo-items'>
                                <p className='catalog__combo-price'>750 руб</p>
                            </div>
                            <div className='catalog__combo-cart'>
                                <img src={cart} alt=""/>
                                <p className='catalog__combo-carts'>В корзину</p>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>

                </Swiper>
            </>
        </div>
    );
};

export default NewsSwiper;