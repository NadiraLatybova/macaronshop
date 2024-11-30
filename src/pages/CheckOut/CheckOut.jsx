import React from 'react';
import {Link} from "react-router-dom";
import './CheckOut.scss'
import {useDispatch, useSelector} from "react-redux";
import {animateScroll as scroll} from "react-scroll";


const CheckOut = ({item}) => {
    const dispatch = useDispatch();

    const user = useSelector((state)=> state.user)

    console.log(user)


    return (
        <div className='check'>
            <div className='container'>
                <div className='cart__path'>
                    <Link className='cart__link' to='/'>
                        <span>Главная страница</span>
                    </Link>
                    <span> »</span>
                    <span>Оформление заказа</span>
                </div>

                <div className='check__row'>
                    <div className='check__delivery'>
                        <h1 className='check__title'>Доставка</h1>
                        <h2 className='check__subtitle'>Укажите контактные данные и выберите способ доставки по СПб. При
                            заказе от 5000 <br/> рублей доставка бесплатная!</h2>
                        <label className='check__inputs'>
                            <div>
                                <p className='check__inputs-text'>Имя <abbr className="required"
                                                                            title="обязательно">*</abbr></p>
                                <input defaultValue={user.name} placeholder='Укажите имя' className='check__field' type="text"/>
                            </div>
                            <div>
                                <p className='check__inputs-text'>Телефон <abbr className="required"
                                                                                title="обязательно">*</abbr></p>
                                <input defaultValue={user.tel}    placeholder="+7 (___) ___-__-__"  className='check__field' type="tel"/>
                            </div>
                        </label>
                        <p className='check__inputs-text'>Email</p>
                        <input defaultValue={user.email} className='check__input' type="text"/>
                        <div className='check__checkBox'>
                            <input className='check__check' type="checkbox"/>
                            <p className='check__checkBox-text'>Получатель не я</p>
                        </div>
                        <p className='check__inputs-text'>Способ доставки:</p>
                        <div className='check__col'>
                            <div className='check__zone'>
                                <img
                                    src="http://localhost:3000/static/media/productCar.7a6aabf28f887ec27179daf3684de8d6.svg"
                                    alt=""/>
                                <div>
                                    <p className='check__text'>Курьерская доставка</p>
                                    <p style={{color: '#ff7273'}} className='check__text'>Красная зона</p>
                                </div>
                            </div>
                            <div className='check__zone'>
                                <img src="https://macaronshop.ru/wp-content/uploads/2021/06/handmacaroon.svg" alt=""/>
                                <div>
                                    <p className='check__text'>Самовывоз</p>
                                    <p style={{color: '#ff7273'}} className='check__text'>Бесплатно</p>
                                </div>
                            </div>
                        </div>


                        <label className='check__inputs'>
                            <div>
                                <p className='check__inputs-text'>Дата получения</p>
                                <input className='check__field' type="date"/>
                            </div>
                            <div>
                                <p className='check__inputs-text'>Время</p>
                                <input className='check__field' type="time"/>
                            </div>
                        </label>

                        <p className='check__inputs-text'>Адрес доставки <abbr className="required"
                                                                               title="обязательно">*</abbr></p>
                        <textarea className='check__textarea'
                                  placeholder='Город, улица, дом, парадная (подъезд), квартира' name="" id="" cols="2"
                                  rows="5"></textarea>
                        <p className='check__inputs-text'>Комментарий к заказу (необязательно)</p>
                        <textarea
                            className='check__textarea'
                            placeholder='Здесь Вы можете написать пожелания, относительно анонимной доставки, текста открытки и другое.'
                            name="" id="" cols="2" rows="5"></textarea>

                        <p className='check__inputs-text'>Метод оплаты</p>

                        <div className='check__card'>
                            <div className='check__card-info'>
                                <input className='check__radio' type="radio"/>
                                <p className='check__card-text'>Картой онлайн (рекомендуется)</p>
                            </div>
                            <div className='check__card-info'>
                                <input className='check__radio' type="radio"/>
                                <p className='check__card-text'>Картой, Сбер (менеджер пришлёт <br/> реквизиты)</p>
                            </div>

                        </div>
                        <div className='check__card-info'>
                            <input className='check__radio' type="radio"/>
                            <p className='check__card-text'>Оплата по счету (юрлицам)</p>
                        </div>


                        <div className='check__price'>
                            <p className='check__price-text'>Итоговая сумма заказа вместе с доставкой:</p>
                            <p className='check__price-info'>2140 руб</p>
                        </div>

                        <button className='check__btn'>Оформить заказ</button>

                        <p className='check__desc'>Нажимая на кнопку "Оформить заказ" Я принимаю и соглашаюсь с
                            Договором оферты и разрешаю обработку моих персональных данных в соответствии с <Link
                                className='check__link'
                                onClick={() => scroll.scrollToTop({smooth: true, duration: 0})}
                                to='/privacy-policy'>
                                Политикой <br/> конфиденциальности
                            </Link>
                        </p>

                    </div>


                    <div className='check__order'>
                        <h2 className='check__order-text'>Ваш заказ</h2>
                        <div className='check__order-box'>
                            <div className='check__content'>
                                <div className='check__info'>
                                    <p className='check__order-title'> Набор "Happy Day"</p>
                                    <span>×</span>
                                    <span style={{fontWeight: 'bold'}}>1</span>
                                </div>

                                <p className='check__content-price'>7100 руб</p>
                            </div>
                            <div className='check__pay'>
                                <p className='check__pay-order'>Доставка</p>
                                <p className='check__content-price'>0 руб.</p>
                            </div>
                            <div className='check__price'>
                                <p className='check__price-text'>Стоимость товаров</p>
                                <p className='check__price-info'>2140 руб</p>
                            </div>


                        </div>
                    </div>


                </div>

            </div>

        </div>
    );
};

export default CheckOut;