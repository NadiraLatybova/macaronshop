import React from 'react';
import './Warranty.scss';
import { Link } from 'react-router-dom';




const elements = [
    { index: 0, img: "https://macaronshop.ru/wp-content/uploads/2021/06/almond.jpg", procent: '100%', text: 'миндальная мука' },
    { index: 1, img: "https://macaronshop.ru/wp-content/uploads/2021/06/food-color.jpg", procent: '100%', text: 'натуральные красители' },
    { index: 2, img: "https://macaronshop.ru/wp-content/uploads/2021/06/fruits.jpg", procent: '100%', text: 'натуральные ингредиенты' },
];

const Warranty = () => {
    return (
        <section className='warranty'>
            <div className='warranty__container'>
                <div className='warranty__text'>
                    <div className='cart__path'>
                        <Link className='cart__link' to='/'>
                            <span>Главная страница</span>
                        </Link>
                        <span> »</span>
                        <span>Гарантии вкуса и качества</span>
                    </div>
                    <h2>Гарантии вкуса и качества</h2>
                    <p className='warranty__get'>
                        При изготовлении пирожных мы используем только натуральные <br/> ингредиенты, избегая использования конвер
                    </p>
                </div>
                <div className='warranty__info'>
                    {elements.map((item) => (
                        <div key={item.index} className='warranty__item'>
                            <img  style={{width:"300px"}} src={item.img} alt={item.text} />
                            <p className='warranty__pro'>{item.procent} <br/> {item.text}</p>
                        </div>
                    ))}
                </div>
.
            </div>
        </section>
    );
};

export default Warranty;

