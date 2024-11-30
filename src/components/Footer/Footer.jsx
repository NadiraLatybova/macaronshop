import React from 'react';
import footer1 from '../assets/footer1.svg'
import footer2 from '../assets/footer2.svg'
import footer3 from '../assets/footer3.svg'
import footer4 from '../assets/footer4.svg'
import footer5 from '../assets/footer5.svg'
import footer6 from '../assets/footer6.svg'
import './Footer.scss'
import {Link} from 'react-router-dom'
import {animateScroll as scroll} from "react-scroll";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer__row'>
                    <div className='footer__desc'>
                        <div className='footer__col'>
                            <div className='footer__item'>
                                <img className='footer__img' src={footer1} alt=""/>
                                <p className='footer__text'>Готовим вручную <br/> и с любовью</p>
                            </div>
                            <div className='footer__item'>
                                <img className='footer__img' src={footer2} alt=""/>
                                <p className='footer__text'>Доставим <br/> в день заказа</p>
                            </div>
                            <div className='footer__item'>
                                <img className='footer__img' src={footer3} alt=""/>
                                <p className='footer__text'>100% <br/> миндальная мука <br/>и натуральные <br/>ингредиенты
                                </p>
                            </div>
                        </div>

                        <p className='footer__loc'>© 2021 Макароншоп <br/> ООО "Квантум", Санкт-Петербург, улица Маршала
                            Тухачевского, <br/> дом 22
                        </p>
                    </div>
                    <div className='footer__info'>
                        <div onClick={()=>{
                            scroll.scrollToTop({ smooth: true, duration: 0 })
                        }} className='footer__item'>
                            <h2 className='footer__title'>Информация</h2>
                          <Link className='footer__link' to='/'>
                              О компании
                          </Link>    <br/>

                          <Link onClick={()=>{
                              scroll.scrollToTop({ smooth: true, duration: 0 })
                          }} className='footer__link' to='/guarantee'>
                              Гарантии вкуса <br/> и свежести
                          </Link>   <br/>


                            <Link onClick={()=>{
                                scroll.scrollToTop({ smooth: true, duration: 0 })
                            }} className='footer__link' to='/delivery'>
                                Доставка и оплата
                            </Link>  <br/>


                             <Link onClick={()=>{
                                 scroll.scrollToTop({ smooth: true, duration: 0 })
                             }} className='footer__link' to='/contacts'>
                                 Контакты
                             </Link>


                        </div>
                        <div className='footer__item'>
                            <h2 className='footer__title'>Каталог</h2>
                            <a className='footer__link' href="">Каталог десертов</a><br/>

                                <a className='footer__link' href=""> Готовые наборы</a><br/>


                            <a className='footer__link' href=""> Собрать свой набор</a><br/>
                            <a className='footer__link' href="">Наборы с печатью</a><br/>
                            <a className='footer__link' href=""> Свадебные предложения</a><br/>
                            <a className='footer__link' href="">Акции</a>
                        </div>
                        <div className='footer__item'>
                            <h2 className='footer__title'>ДЛЯ БИЗНЕСА</h2>
                            <a className='footer__link' href="">Корпоративные подарки</a><br/>

                            <Link onClick={()=>{
                                scroll.scrollToTop({ smooth: true, duration: 0 })
                            }} className='footer__link' to='/contacts'>
                                Политика конфиденциальности
                            </Link><br/>


                            <a className='footer__link' href="">Оповикам</a>
                        </div>
                    </div>
                    <div className='footer__contact'>
                        <h2 className='footer__tel'>+7 (812) 309 82 88</h2>
                        <p className='footer__time'>с 9:00 до 21:00</p>
                        <div className='footer__icon'>
                            <img className='footer__img' src={footer4} alt=""/>
                            <img className='footer__img' src={footer5} alt=""/>
                            <img className='footer__img' src={footer6} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;