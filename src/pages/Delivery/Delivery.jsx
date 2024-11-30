import React, { useState } from 'react';
import "./Delivery.scss";

import { Link } from "react-router-dom";
import delivery from "../../components/assets/delivery__transport.svg";
import macoron1 from "../../components/assets/delivery__macoron1.svg";
import macoron2 from "../../components/assets/delivery__macoron2.svg";
import leaves from "../../components/assets/delivery__leaves.svg";
import yellow from '../../components/assets/delivery__yellow.svg';
import pink from "../../components/assets/delivery__pink.svg";
import vector from "../../components/assets/delivery_vector.svg";
import MACORON from "../../components/assets/delivery-MACORON.svg";
import money from "../../components/assets/delivery-MACORON2.svg";


const Delivery = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className='delivery'>
            <div className="delivery__container">
                <div className='delivery'>
                    <div className="delivery__container">

                        <div className='cart__path'>    <Link className='cart__link' to='/'>
                            <span>Главная страница</span>    </Link>
                            <span> »</span>    <span>Контакты</span>
                        </div>

                        <div className="delivery__collection">
                            <div className="delivery__img">
                                <img className="delivery__sport" src={delivery} alt="transport" />
                                <img className='delivery__maca' src={macoron1} alt="macaron1" />
                                <img className='delivery__coron' src={macoron2} alt="macaron2" />
                                <img className='delivery__tran' src={leaves} alt="leaves" />
                                <img className="delivery__yellow" src={yellow} alt="yellow" />
                                <img className='delivery__pink' src={pink} alt="pink" />
                            </div>
                        </div>

                        <div className="delivery__info">
                            <h2>Доставка и оплата</h2>
                            <p className='delivery__text'>
                                Для наших покупателей доступны 2 способа доставки: <br />
                                курьерская доставка по Санкт-Петербургу в пределах <br /> КАД и самовывоз.
                            </p>
                            <p className='delivery__task'>Курьерская доставка:</p>
                            <p className='delivery__all'>
                                Курьеры работают каждый день с 11 до 21 часа. <br />
                                Доставка макарон осуществляется только по Санкт-Петербургу в пределах кольцевой автомобильной дороги (КАД). <br />
                                Если Вы готовы принять заказ в интервале с 12 до 17 часов или с 17 до 21 часа, то доставка будет стоить 300 рублей. <br />
                                При заказе от 3000 рублей доставка БЕСПЛАТНАЯ. <br />
                                При оформлении заказа до 15 часов возможна доставка в тот же день в промежутке с 17 до 21 часа. <br />
                                Курьер предупредит Вас о своём прибытии за 30-40 минут.
                            </p>
                        </div>

                        <section className="delivery__work">
                            <div className="deliver__first-work">
                                <h3 className='delivery__money'>Самовывоз</h3>
                                <p className="delivery__clock">Вы можете сделать заказ и забрать его самостоятельно с <br /> нашего производства по адресу: ул. Маршала Тухачевского 22 <br /> БЦ "Сова" <br /><br /> Заказ необходимо сделать до 20 часов, чтобы забрать его на <br /> следующий день в пункте самовывоза в любое удобное время <br /> в промежутке с 13 до 22 часов. <br /><br /> Оплатить заказ банковской картой можно заранее при <br /> оформлении. Непосредственно при получении банковской <br /> картой расплатиться нельзя.</p>
                                <h3 className='delivery__money'>Оплата</h3>
                                <p className="delivery__clock">Вы можете оплатить заказ при получении наличными или <br /> заранее оплатить заказ банковской картой. <br /> Для этого укажите выбранный способ при оформлении <br /> заказа. <br /><br />Оплата банковской картой удобна, если вы хотите отправить <br /> десерты в подарок или не желаете возиться с наличными при <br /> получении заказа. <br /><br /> Если у Вас нет карты российского банка, мы можем принять <br /> оплату через платёжную систему PayPal.</p>

                            </div>
                            <div className="delivery__second-work">
                                <img src={vector} alt="" />
                                <img className='delivery__macoron' src={MACORON} alt="" />
                                <img className='delivery__cusok' src={money} alt="" />
                            </div>

                        </section>

                    </div>
                </div>
            </div>
            <div className='delivery__map'>    <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.4521684916963!2d30.325153877275692!3d59.90804277489974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469633be5c839807%3A0x674935e0976eeeeb!2sMacaronshop!5e0!3m2!1sru!2skg!4v1730262420861!5m2!1sru!2skg"        width="100%" height="387px" style={{border:0}} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"/></div>
        </div>

    );
};

export default Delivery;

