import React from 'react';
import mac from '../../components/assets/catalogImg.svg'
import './Catalog.scss'
import img1 from '../../components/assets/catalogImg2.svg'
import img2 from '../../components/assets/catalogImg5.svg'
import fon1 from '../../components/assets/catalogFon.svg'
import combo from '../../components/assets/catalogCombo.svg'
import cart from '../../components/assets/cart.svg'
import combo2 from '../../components/assets/catalogCombo2.svg'
import combo3 from '../../components/assets/catalogCombo3.svg'
import combo4 from '../../components/assets/catalogCombo4.svg'
import {Link} from "react-router-dom";

const Catalog = () => {
    return (
        <div className='catalog'>
            <div className='container'>
                <div className='cart__path'>
                    <Link className='cart__link' to='/'>
                        <span>Главная страница</span>
                    </Link>
                    <span> »</span>
                    <span>Каталог десертов</span>
                </div>
                <h1 className='catalog__title'>Каталог десертов</h1>
                <div className='catalog__row'>
                    <div className='catalog__right'>
                        <img className='catalog__img' src={mac} alt=""/>
                    </div>
                    <div className='catalog__left'>
                        <h2 className='catalog__subtitle'>Пирожные макарон</h2>
                        <p className='catalog__text'>Самые классные, самые лучшие, свежие, воздушные, хрустящие
                            макарушки. лучшее, что мы умеем делать.</p>
                        <div className='catalog__btns'>
                            <button className='catalog__btn'>Готовые наборы</button>
                            <button className='catalog__btn'>Собрать свой набор</button>
                        </div>
                    </div>
                </div>

                <div className='catalog__col'>
                    <div className='catalog__col-row'>
                        <div className='catalog__col-item'>
                            <img className='catalog__col-img' src={img1} alt=""/>
                            <p className='catalog__col-text'>Трубочки со сгущенкой</p>
                        </div>

                        <img className='catalog__col-fon' src={fon1} alt=""/>
                    </div>
                    <div className='catalog__col-row2'>
                        <div className='catalog__col-item'>
                            <img className='catalog__col-img' src={img2} alt=""/>
                            <p className='catalog__col-text'>Трубочки со сгущенкой</p>
                        </div>

                        <img className='catalog__col-fon' src={fon1} alt=""/>
                    </div>
                    <div className='catalog__col-row'>
                        <div className='catalog__col-item'>
                            <img className='catalog__col-img' src={img1} alt=""/>
                            <p className='catalog__col-text'>Трубочки со сгущенкой</p>
                        </div>
                        <img className='catalog__col-fon' src={fon1} alt=""/>

                    </div>
                </div>
                <h2 className='catalog__combo-title'>Хотите попробовать <br/> всё сразу?</h2>
                <p className='catalog__combo-text'>Тогда взгляните на наши комбо-наборы</p>
                <div className='catalog__combo-row'>
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
                    <div className='catalog__combo-block'>
                        <img src={combo2} alt=""/>
                        <div className='catalog__combo-item'>
                            <h2 className='catalog__combo-subtitle'>Всего понемногу </h2>
                            <p className='catalog__combo-desc'>3 эклера, 4 трубочки, 6 макарун. <br/>  Вкусы: клубника - базилик, кокос, <br/>голубой сыр, пармезан</p>
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
                    <div className='catalog__combo-block'>
                        <img src={combo3} alt=""/>
                        <div className='catalog__combo-item'>
                            <h2 className='catalog__combo-subtitle'>Ещё побольше</h2>
                            <p className='catalog__combo-desc'>3 эклера, 4 трубочки, 6 макарун. <br/> Вкусы: клубника - базилик, кокос,<br/> голубой сыр, пармезан</p>
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

                    </div>     <div className='catalog__combo-block'>
                        <img src={combo4} alt=""/>
                        <div className='catalog__combo-item'>
                            <h2 className='catalog__combo-subtitle'>Ещё побольше</h2>
                            <p className='catalog__combo-desc'>3 эклера, 4 трубочки, 6 макарун. <br/> Вкусы: клубника - базилик, кокос, <br/> голубой сыр, пармезан</p>
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
                </div>

            </div>

        </div>
    );
};

export default Catalog;