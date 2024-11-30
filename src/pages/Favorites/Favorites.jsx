import React from 'react';
import {useSelector} from "react-redux";
import './Favorites.scss';
import Card from "../../components/Card/Card";
import {toggleFavorites} from "../../store/reducers/favorites";
import {Link} from "react-router-dom";

const Favorites = () => {
    const favorites = useSelector((state) => state.favorites);
    const {data} = useSelector((state) => state.products);

    // Отфильтровать товары, которые есть в избранном
    const favoriteItems = data.filter((item) => favorites.data.includes(item.id));

    return (
        <section className='favorites'>
            <div className='container'>
                <div className='cart__path'>
                    <Link className='cart__link' to='/'>
                        <span>Главная страница</span>
                    </Link>
                    <span> »</span>
                    <span>Избранные товары</span>
                </div>
                    <h1 className='favorites__title'>Избранные товары</h1>


                <div className='category__content'>
                    {
                        favoriteItems.length > 0 ? (
                            favoriteItems.map((item) => (
                                <Card key={item.id} item={item} />
                            ))
                        ) : (
                            <p className="favorites__empty">Ваш список избранного пуст.</p>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Favorites;
