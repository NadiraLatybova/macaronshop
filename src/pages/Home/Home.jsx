import color from '../../components/assets/color1.svg'
import color1 from '../../components/assets/color2.svg'
import './Home.scss'
import svg from '../../components/assets/svg1.svg'
import svg2 from '../../components/assets/svg2.svg'
import fon3 from '../../components/assets/fon3.svg'
import Cards from "../Cards/Cards";
import homeCard from '../../components/assets/homeCard.svg'
import homeCard2 from '../../components/assets/homeCard2.svg'
import homeCard3 from '../../components/assets/homeCard3.svg'
import homeCard4 from '../../components/assets/homeCard4.svg'
import homeSvg from '../../components/assets/homeSvg.svg'
import homeSvg1 from '../../components/assets/homeSvg1.svg'
import homeCardSvg from '../../components/assets/homeCardSvg.svg'
import homeParty1 from '../../components/assets/homeParty1.svg'
import homeParty2 from '../../components/assets/homeParty2.svg'
import homeParty3 from '../../components/assets/homeParty3.svg'
import homeParty4 from '../../components/assets/homeParty4.svg'
import homeParty5 from '../../components/assets/homeParty5.svg'
import homeParty6 from '../../components/assets/homeParty6.svg'
import homeParty7 from '../../components/assets/homeParty7.svg'
import Card from "../../components/Card/Card";
import news1 from '../../components/assets/news1.svg'
import news2 from '../../components/assets/news2.svg'
import news3 from '../../components/assets/news4.svg'
import care1 from '../../components/assets/care1.svg'
import care2 from '../../components/assets/care2.svg'
import care3 from '../../components/assets/care3.svg'
import care4 from '../../components/assets/care4.svg'
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/products?_sort=discount_price&order=desc&_limit=6')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Ошибка при загрузке продуктов:', error));
    }, []);
    return (


        <div className='home'>
            <div className='home__container'>
                <div className='home__row'>
                    <div className='home__images'>
                        <img className='home__img'
                             src='https://macaronshop.ru/wp-content/uploads/2024/11/main-image-spbng_1_11zon.png' alt=""/>
                        <div className='home__color'>
                            <img className='home__fon' src={color} alt=""/>
                            <img className='home__fon1' src={color1} alt=""/>
                        </div>
                    </div>
                    <div className='home__right'>
                        <div className='home__right-back'>
                            <img className='home__right-fon' src={svg} alt=""/>
                            <img className='home__right-fon2' src={svg2} alt=""/>
                            <img className='home__right-fon3' src={fon3} alt=""/>
                        </div>
                        <div className='home__right-items'>
                            <h1 className='home__title'>Macaronshop</h1>
                            <h2 className="home__subtitle">since 2013</h2>
                            <h3 className='home__text'>Настоящая любовь</h3>
                            <p className='home__desc'>Пирожные макарон и другие десерты из натуральных <br/> ингредиентов,
                                приготовленные с любовью</p>

                        </div>

                    </div>
                </div>
            </div>

            <div className='container'>
                <Cards/>
                <h2 className='home__promotion'>Акции</h2>

                <div className='home__col'>
                    <div className='home__card'>
                        <img className='home__icon' src={homeSvg1} alt=""/>
                        <img className='home__image' src={homeCard} alt=""/>
                        <div className='home__item'>
                            <p className='home__item-text'>По СПб в районе КАД – от <br/>3000₽ <br/>По МСК – от 5000₽
                            </p>
                        </div>


                    </div>
                    <div className='home__card'>
                        <img className='home__icon' src={homeSvg} alt=""/>
                        <img className='home__image' src={homeCard2} alt=""/>
                        <div className='home__item2'>
                            <p className='home__item-text'>Шоколадное пирожное <br/> картошка на основе <br/>бисквита!
                            </p>
                        </div>


                    </div>
                    <div className='home__card'>
                        <img className='home__icon' src={homeSvg} alt=""/>
                        <img className='home__image' src={homeCard3} alt=""/>
                        <div className='home__item3'>
                            <p className='home__item-text'>Аппетитные конфеты <br/> на основе миндального <br/> печенья
                                и крема</p>
                        </div>


                    </div>
                    <div className='home__card'>
                        <img className='home__icon' src={homeCardSvg} alt=""/>
                        <img className='home__image' src={homeCard4} alt=""/>
                        <div className='home__item4'>
                            <p className='home__item-text'>Карамель на палочке <br/> из натуральных <br/> ингредиентов
                            </p>
                        </div>


                    </div>
                </div>

                <h2 className='home__party-title'>Ближайшие праздники</h2>
                <div className='home__party-line'></div>
                <div className='home__party'>

                    <div className='home__party-item'>
                        <img className='home__party-img' src={homeParty1} alt=""/>
                        <img className='home__party-img1' src={homeParty2} alt=""/>
                        <p className='home__party-text'>Скоро <br/> День рождения <br/> близкого человека </p>
                    </div>
                    <div className='home__party-item'>
                        <img className='home__party-img' src={homeParty3} alt=""/>
                        <p className='home__party-text'>1 января <br/> Новый Год <br/> 2021</p>
                    </div>
                    <div className='home__party-item'>
                        <img className='home__party-img' src={homeParty4} alt=""/>
                        <p className='home__party-text'>14 февраля <br/>День Святого Валентина</p>
                    </div>
                    <div className='home__party-item'>
                        <img className='home__party-img' src={homeParty5} alt=""/>
                        <p className='home__party-text'>23 февраля <br/>День Защитника <br/>Отечестваа</p>
                    </div>
                    <div className='home__party-item'>
                        <img className='home__party-img' src={homeParty6} alt=""/>
                        <p className='home__party-text'>8 марта <br/> Международный <br/>Женский День </p>
                    </div>
                    <div className='home__party-item'>
                        <img className='home__party-img' src={homeParty7} alt=""/>
                        <p className='home__party-text'>9 марта <br/>День Сурка </p>
                    </div>
                </div>
                <h2 className='home__set-title'>Популярные наборы</h2>
                <div className='home__set'>

                    <div className='home__set-col'>
                        {products.map((product) => (
                            <Card key={product.id} item={product}/>
                        ))}
                    </div>
                    <button className='home__set-btn'>Каталог десертов</button>
                </div>
                <h2 className='home__news-title'>Новости</h2>
                <div className='home__news'>
                    <div className='home__news-col'>
                        <div className='home__news-row'>
                            <img className='home__news-img' src={news1} alt=""/>
                            <div className='home__news-item'>
                                <span className='home__news-date'>25.02.2023</span>
                                <h3 className='home__news-subtitle'>Скоро главный праздник весны!</h3>
                                <p className='home__news-text'>Девушки любят, когда вкусно, красиво и <br/> натурально.
                                    Смотрите больше наборов с <br/> десертами ручной работы</p>
                            </div>

                        </div>
                        <div className='home__news-row'>
                            <img className='home__news-img' src={news2} alt=""/>
                            <div className='home__news-item'>
                                <span className='home__news-date'>17.02.2023</span>
                                <h3 className='home__news-subtitle'>Конкурс на 23 февраля!</h3>
                                <p className='home__news-text'>День Защитника Отечества уже совсем скоро! Порадуйте
                                    своего сладкоежку с помощью аппетитных наборов от МакаронШоп</p>
                            </div>


                        </div>
                        <div className='home__news-row'>
                            <img className='home__news-img' src={news3} alt=""/>
                            <div className='home__news-item'>
                                <span className='home__news-date'>11.02.2023</span>
                                <h3 className='home__news-subtitle'>Экспресс-конкурс ко дню <br/> Святого Валентина</h3>
                                <p className='home__news-text'>Девушки любят, когда вкусно, красиво и <br/> натурально.
                                    Смотрите больше наборов с <br/> десертами ручной работы</p>
                            </div>

                        </div>


                    </div>
                    <button className='home__news-btn'>Все новости</button>
                </div>


                <h2 className='home__care-title'>Мы обо всём позаботились</h2>

                <div className='home__care-row'>
                    <div className='home__care-item'>
                        <img className='home__care-img' src={care1} alt=""/>
                        <h3 className='home__care-subtitle'>Лучшие ингрединты</h3>
                        <p className='home__care-text'>Что-то про суперкачество, лучших <br/> поваров, свежесть и т.д.
                        </p>
                    </div>
                    <div className='home__care-item'>
                        <img className='home__care-img' src={care2} alt=""/>
                        <h3 className='home__care-subtitle'>Упаковка</h3>
                        <p className='home__care-text'>Что-то про суперкоробочки и <br/> бантики и бла бла бла</p>
                    </div>
                    <div className='home__care-item'>
                        <img className='home__care-img' src={care3} alt=""/>
                        <h3 className='home__care-subtitle'>Получение в день заказа</h3>
                        <p className='home__care-text'>В день заказа доставка курьером или <br/>самовывоз</p>
                    </div>
                    <div className='home__care-item'>
                        <img className='home__care-img' src={care4} alt=""/>
                        <h3 className='home__care-subtitle'>Анонимная доставка</h3>
                        <p className='home__care-text'>Можем преподнести Ваш заказ как <br/> анонимный подарок</p>
                    </div>

                </div>


            </div>

        </div>
    );
};

export default Home;