import React, { useEffect, useState } from 'react';
import './oneProduct.scss';
import car from '../../components/assets/productCar.svg';
import NewsSwiper from "../../components/NewsSwiper/NewsSwiper";
import { useDispatch, useSelector } from "react-redux";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import {Link, useParams} from 'react-router-dom';

const OneProduct = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/products/${params.id}`)
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, [params.id]);

    const [tabs, setTabs] = useState(1);

    return (
        <div className='product'>
            <div className='container'>
                <div className='cart__path'>
                    <Link className='cart__link' to='/'>
                        <span>Главная страница</span>
                    </Link>
                    <span> »</span>
                    <span>Готовые наборы</span>
                </div>
                <div className='product__content'>
                    <div className='product__left'>
                        {products  && (
                            <>
                                <ProductSlider images={products.images} />
                            </>
                        )}
                    </div>
                    <div className='product__right'>
                        <h1 className='product__title'>{products?.title || 'Загрузка...'}</h1>
                        <p className='product__text'>{products?.description || 'Загрузка...'}</p>
                        <div className='product__taste'>
                            <h2 className='product__taste-title'>Вкусы:</h2>
                            {products?.flavors?.map((item, index) => (
                                <div key={index} className='product__taste-items'>
                                    <p className='product__taste-text'>{item.name}</p>
                                    <div className='product__taste-line' />
                                    <p className='product__taste-text'>{item.count}</p>
                                </div>
                            )) || <p>Вкусы недоступны</p>}
                        </div>

                        <div className='product__cart'>
                            <div>
                                <h2 className='product__cart-title'>{products?.price || 'Цена не доступна'} руб</h2>
                                <h2 className='product__cart-title'>{products?.discounted_price}</h2>
                            </div>
                            <div>
                                <Link style={{textDecoration:'none'}} to='/cart'>
                                <button className='product__cart-btn'>
                                        В корзину
                                     </button>
                            </Link>
                            </div>

                        </div>
                        <div className='product__row'>
                            <div className='product__row-items'>
                                <img src={car} alt="" />
                                <p className='product__row-text'>Доставка от 400 руб. в день заказа с 12 до 17 или с 17 до 21. <br /> Бесплатно при заказе на сумму от 2000 руб</p>
                            </div>
                            <div className='product__row-items'>
                                <img src='https://macaronshop.ru/wp-content/uploads/2021/06/handmacaroon.svg' alt="" />
                                <p className='product__row-text'>Самовывоз бесплатно.<br /> Через 3 часа после оплаты заказа<br /> Бесплатно при заказе на сумму от 2000 руб</p>
                            </div>
                            <div className='product__row-items'>
                                <div className='product__row-img'>
                                    <img src='https://macaronshop.ru/wp-content/uploads/2021/06/gift.svg' alt="" />
                                </div>
                                <p className='product__row-text'>Можем преподнести как анонимный подарок:) </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='product__block'>
                    <ul className='product__list'>
                        <li className={`product__item ${tabs === 1 ? 'active' : ''}`} onClick={() => setTabs(1)}>
                            Описание
                        </li>
                        <li className={`product__item ${tabs === 2 ? 'active' : ''}`} onClick={() => setTabs(2)}>
                            Состав и пищевая ценность
                        </li>
                        <li className={`product__item ${tabs === 3 ? 'active' : ''}`} onClick={() => setTabs(3)}>
                            Условия и срок хранения
                        </li>
                    </ul>

                    <div style={{ display: tabs === 1 ? 'block' : 'none' }} className='product__first'>Макароншоп — это пирожные макарон, изготовленные вручную из натуральных ингредиентов. <br /><br /> Эффектная упаковка и оригинальная печать на макаронсах — лучшие презенты для любых праздников! <br /><br /> Цвета макаронс могут отличаться.</div>
                    <div style={{ display: tabs === 2 ? 'block' : 'none' }} className='product__second'>Мука миндальная, сахар, яйцо куриное (белок), ганаш. <br /><br /> На 100 г: Белки 7.45 г, Жиры 16.84 г, Углеводы 53.03 г, 393 ккал.</div>
                    <div style={{ display: tabs === 3 ? 'block' : 'none' }} className='product__third'>Мы рекомендуем наслаждаться вкусом макарун первые 72 часа после покупки. Далее они могут начать терять свои вкусовые качества и текстуру. <br /><br /> Срок хранения в холодильнике 7 дней, в морозилке – 14 дней.</div>
                </div>
                <h2 className='product__subtitle'>Вам могут понравиться</h2>
                <NewsSwiper />
                <div className='product__btns'>
                    <button className='product__btn'>Все готовые наборы</button>
                </div>
            </div>
        </div>
    );
};

export default OneProduct;
