import React, { useState } from 'react';
import './Contacts.scss'
import { Link } from "react-router-dom";
import VECTOR from "../../components/assets/delivery_vector.svg";
import SUP from "../../components/assets/delivery__macoron1.svg";


const Contacts = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <section className='contact'>
            <div className="contact__container">
                <span> »</span>    <span>Контакты</span>
                <div className="contact__coll">
                    <div className="contact__img">
                        <img className='contact__vector' src={VECTOR} alt="" />
                        <img className='contact__macoron' src={SUP} alt="" />
                    </div>
                </div>

                <div className="contact__info">
                    <h2 className='contact__infor'>Контакты</h2>

                    <h3 className='contact__tel'>Производство</h3>
                    <p className='contact__cofe'>Маршала Тухачевского, 22 <br /> Время работы: с 8 до 19:30.</p>

                    <h3 className='contact__tel'>Пункты самовывоза:</h3>
                    <p className='contact__cofe'>Кафе “Морошка”. Маршала Тухачевского, 22 <br /> (с 8 до 19:30) <br /> Кафе “Мята”. Наб канала Грибоедова, 37 <br /> (с 10 до 22)</p>

                    <h3 className='contact__tel'>Телефоны:</h3>
                    <p className='contact__cofe'>8 (812) 309-82-88 основной номер <br /> 8 (981) 841-85-25 для жалоб и предложений</p>
                    <button className="contact__button" onClick={toggleModal}>
                        Заказать
                    </button>
                </div>
            </div>

        </section>
    );
};

export default Contacts;