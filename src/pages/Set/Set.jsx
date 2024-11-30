import React from 'react';
import './Set.scss'
import Card from "../../components/Card/Card";

const Set = () => {
    return (
        <div className='set'>

            <div className='container'>
                <p className='set__path'>Главная > Каталог > Готовые наборы</p>
                <h1 className='set__title'>Готовые наборы</h1>
                <div className='set__row'>
                    <button className='set__btn'>Свадьба</button>
                    <button className='set__btn'>Девичник</button>
                    <button className='set__btn'>День рождения</button>
                    <button className='set__btn'>8 марта</button>
                    <button className='set__btn'>23 февраля</button>
                    <button className='set__btn'>Новый год</button>
                    <button className='set__btn'>День учителя</button>
                    <button className='set__btn'>День тренера</button>
                    <button className='set__btn'>1 сентября</button>
                    <button className='set__btn'>Пасха</button>
                    <button className='set__btn'>Без печати</button>
                    <img src="" alt=""/>
                </div>

                <div className='set__col'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div className='set__item'>
                    <button className='set__btn2'>Показать ещё</button>
                </div>


            </div>
        </div>
    );
};

export default Set;