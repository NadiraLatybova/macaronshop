import React from 'react';
import './News.scss';
import img from '../../components/assets/newsimg.svg';
import {Link} from "react-router-dom";

const News = () => {
    return (
        <div className='news'>
            <div className='container'>
                <div className='cart__path'>
                    <Link className='cart__link' to='/'>
                        <span>Главная страница</span>
                    </Link>
                    <span> »</span>
                    <span>Новости</span>
                </div>
                <h1 className='news__title'>Новости</h1>
                <div className='news__row'>
                    <button className='news__btn'>Все новости</button>
                    <button className='news__btn'>Обновления ассортимента</button>
                    <button className='news__btn'>Акции</button>
                    <button className='news__btn'>Конкурсы</button>
                    <button className='news__btn'>Подарок на 8 марта</button>
                    <button className='news__btn'>Весна</button>
                </div>
                <div className='news__col'>
                    <div className='news__block'>
                        <img src={img} alt=""/>
                        <div className='news__item'>
                            <p className='news__data'>05.04.2023</p>
                            <h2 className='news__subtitle'>Впереди праздник Пасхи</h2>
                            <p className='news__text'>Порадуйте своих близких вкусными пасхальными наборами макарон. Наша новая коллекция подарков уже в продаже.</p>
                        </div>
                    </div>
                    <div className='news__block'>
                        <img src={img} alt=""/>
                        <div className='news__item'>
                            <p className='news__data'>05.04.2023</p>
                            <h2 className='news__subtitle'>Впереди праздник Пасхи</h2>
                            <p className='news__text'>Порадуйте своих близких вкусными пасхальными наборами макарон. Наша новая коллекция подарков уже в продаже.</p>
                        </div>
                    </div>
                    <div className='news__block'>
                        <img src={img} alt=""/>
                        <div className='news__item'>
                            <p className='news__data'>05.04.2023</p>
                            <h2 className='news__subtitle'>Впереди праздник Пасхи</h2>
                            <p className='news__text'>Порадуйте своих близких вкусными пасхальными наборами макарон. Наша новая коллекция подарков уже в продаже.</p>
                        </div>
                    </div> <div className='news__block'>
                        <img src={img} alt=""/>
                        <div className='news__item'>
                            <p className='news__data'>05.04.2023</p>
                            <h2 className='news__subtitle'>Впереди праздник Пасхи</h2>
                            <p className='news__text'>Порадуйте своих близких вкусными пасхальными наборами макарон. Наша новая коллекция подарков уже в продаже.</p>
                        </div>
                    </div> <div className='news__block'>
                        <img src={img} alt=""/>
                        <div className='news__item'>
                            <p className='news__data'>05.04.2023</p>
                            <h2 className='news__subtitle'>Впереди праздник Пасхи</h2>
                            <p className='news__text'>Порадуйте своих близких вкусными пасхальными наборами макарон. Наша новая коллекция подарков уже в продаже.</p>
                        </div>
                    </div> <div className='news__block'>
                        <img src={img} alt=""/>
                        <div className='news__item'>
                            <p className='news__data'>05.04.2023</p>
                            <h2 className='news__subtitle'>Впереди праздник Пасхи</h2>
                            <p className='news__text'>Порадуйте своих близких вкусными пасхальными наборами макарон. Наша новая коллекция подарков уже в продаже.</p>
                        </div>
                    </div><div className='news__block'>
                        <img src={img} alt=""/>
                        <div className='news__item'>
                            <p className='news__data'>05.04.2023</p>
                            <h2 className='news__subtitle'>Впереди праздник Пасхи</h2>
                            <p className='news__text'>Порадуйте своих близких вкусными пасхальными наборами макарон. Наша новая коллекция подарков уже в продаже.</p>
                        </div>
                    </div><div className='news__block'>
                        <img src={img} alt=""/>
                        <div className='news__item'>
                            <p className='news__data'>05.04.2023</p>
                            <h2 className='news__subtitle'>Впереди праздник Пасхи</h2>
                            <p className='news__text'>Порадуйте своих близких вкусными пасхальными наборами макарон. Наша новая коллекция подарков уже в продаже.</p>
                        </div>
                    </div><div className='news__block'>
                        <img src={img} alt=""/>
                        <div className='news__item'>
                            <p className='news__data'>05.04.2023</p>
                            <h2 className='news__subtitle'>Впереди праздник Пасхи</h2>
                            <p className='news__text'>Порадуйте своих близких вкусными пасхальными наборами макарон. Наша новая коллекция подарков уже в продаже.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
