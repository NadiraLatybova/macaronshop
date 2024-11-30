import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart, removeCart } from "../../store/reducers/carts";
import "./Cart.scss";
import {Link} from 'react-router-dom'
import { FaTrashCan } from "react-icons/fa6";

const Cart = () => {
    const dispatch = useDispatch();
    const carts = useSelector((state) => state.carts);
    const products = useSelector((state) => state.products);

    const cartItems = products.data.filter((item) =>
        carts.data.some((el) => el.id === item.id)
    );

    const totalPrice = cartItems.reduce((total, item) => {
        const cartItem = carts.data.find((el) => el.id === item.id);
        return total + item.price * cartItem.count;
    }, 0);

    return (
        <section className="cart">
            <div className='container'>
                <div className='cart__path'>
                    <Link className='cart__link' to='/'>
                        <span>Главная страница</span>
                    </Link>
                    <span> »</span>
                    <span>Ваша корзина</span>
                </div>
                <h1 className="cart__title">Ваша корзина</h1>
                <div className="container cart__container">
                    {/* Левая колонка */}
                    <div className="cart__items">

                        {cartItems.map((item) => {
                            const cartItem = carts.data.find((el) => el.id === item.id);
                            return (
                                <div key={item.id} className="cart__item">
                                    <img
                                        className="cart__item-img"
                                        src={item.images[0]}
                                        alt={item.title}
                                    />
                                    <div className="cart__item-details">
                                        <h2 className="cart__item-title">{item.title}</h2>

                                    </div>
                                    <div className="cart__item-controls">
                                        <button
                                            onClick={() => dispatch(removeCart(item.id))}
                                            className="cart__item-btn"
                                        >
                                            -
                                        </button>
                                        <span className="cart__item-quantity">
                                            {cartItem.count}
                                        </span>
                                        <button
                                            onClick={() => dispatch(addCart(item.id))}
                                            className="cart__item-btn"
                                        >
                                            +
                                        </button>
                                    </div>

                                    <div className="cart__item-price">
                                        {item.price} руб
                                    </div>
                                    <button
                                        onClick={() => dispatch(removeCart(item.id, true))}
                                        className="cart__item-remove"
                                    >
                                        <FaTrashCan />
                                    </button>



                                </div>



                            );
                        })}
                        <div className='cart__menu'>
                            <div>
                                <h2 className='cart__menu-title'>Общая стоимость Вашей покупки без учета доставки составит:</h2>
                            </div>
                            <span className='cart__menu-price'>{totalPrice} руб</span>
                        </div>
                    </div>


                    <div className="cart__summary">
                        <h2 className="cart__summary-title">Итогo</h2>
                        <div className="cart__summary-total">
                            <span className='cart__summary-price'>Стоимость товаров</span>
                            <span className='cart__summary-sum'>{totalPrice} руб</span>
                        </div>
                        <p className='cart__summary-text'>Промокод:</p>
                        <div className="cart__promo">

                            <input
                                type="text"
                                placeholder="Введите промокод"
                                className="cart__promo-input"
                            />
                            <button className="cart__promo-btn">Применить</button>
                        </div>
                        <Link style={{textDecoration:'none'}} to='/checkout'>
                            <button className="cart__checkout-btn">Оформить заказ</button>
                        </Link>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Cart;
