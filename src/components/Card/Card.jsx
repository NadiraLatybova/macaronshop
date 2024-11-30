import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../store/reducers/carts';
import { toggleFavorites } from '../../store/reducers/favorites';
import { IoMdSettings } from 'react-icons/io';
import { FcOk } from 'react-icons/fc';
import carts from '../assets/cart.svg';
import './Card.scss';
import { animateScroll as scroll } from 'react-scroll';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Card = ({ item }) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.carts.data);
    const favorites = useSelector((state) => state.favorites.data);

    const [iconState, setIconState] = useState(
        cart.some((cartItem) => cartItem.id === item.id) ? 'added' : 'default'
    );

    const handleBuyClick = () => {
        if (iconState === 'loading' || iconState === 'added') return;

        setIconState('loading');
        setTimeout(() => {
            dispatch(addCart(item.id));
            setIconState('added');
        }, 2000);
    };

    return (
        <div className="card">
            <div className="container">
                <div className="card__row">
                    {/* Избранное */}
                    <div className="card__fav">
                        <p
                            onClick={() => dispatch(toggleFavorites(item.id))}
                            className={`card__fav-svg ${
                                favorites.includes(item.id) ? 'active' : ''
                            }`}
                        >
                            <svg
                                width="30"
                                height="21"
                                viewBox="0 0 21 18"
                                xmlns="http://www.w3.org/2000/svg"
                                className="heart-icon"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.31802 2.31802C4.07538 0.56066 6.92462 0.56066 8.68198 2.31802L10.5 4.13604L12.318 2.31802C14.0754 0.56066 16.9246 0.56066 18.682 2.31802C20.4393 4.07538 20.4393 6.92462 18.682 8.68198L10.5 16.864L2.31802 8.68198C0.56066 6.92462 0.56066 4.07538 2.31802 2.31802Z"
                                    stroke="red"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </p>
                    </div>


                    <Link to={`/product/${item.id}`}>
                        <LazyLoadImage
                            onClick={() => scroll.scrollToTop({ smooth: true, duration: 0 })}
                            className="card__img"
                            alt={item.title}
                            effect="blur"
                            wrapperProps={{
                                style: {transitionDelay: "1s"},
                            }}
                            src={item.images[0]}/>

                    </Link>

                    {/* Описание товара */}
                    <div className="card__desc">
                        <h2 className="card__title">{item.title}</h2>
                        <p className="card__text">{item.description}</p>
                    </div>

                    {/* Цена и кнопки */}
                    <div className="card__items">
                        <div className="card__price-wrapper">
                            {item.discounted_price && item.discounted_price < item.price && (
                                <span className="card__old-price">{item.price} руб</span>
                            )}
                            <span className="card__price">
                                {item.discounted_price && item.discounted_price < item.price
                                    ? item.discounted_price
                                    : item.price}{' '}
                                руб
                            </span>
                        </div>

                        {/* Кнопка "Купить" */}
                        <div className="card__cart">
                            <div className="settings-icon">
                                {iconState === 'loading' ? (
                                    <IoMdSettings className="spinning" />
                                ) : iconState === 'added' ? (
                                    <FcOk />
                                ) : (
                                    <img className="card__icon" src={carts} alt="Cart" />
                                )}
                            </div>
                            {iconState === 'added' ? (
                                <Link
                                    style={{ textDecoration: 'none' }}
                                    to="/cart"
                                    className="card__item card__item--added"
                                >
                                    В корзину
                                </Link>
                            ) : (
                                <p onClick={handleBuyClick} className="card__item">
                                    Купить
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
