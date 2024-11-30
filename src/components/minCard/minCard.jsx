import React, {useEffect} from 'react';
import combo3 from "../assets/catalogCombo3.svg";
import cart from "../assets/cart.svg";
import {useDispatch, useSelector} from "react-redux";
import {getProducts,getVisibleProducts} from "../../store/reducers/products";
import {Link} from "react-router-dom";

const MinCard = ({item}) => {

    const dispatch = useDispatch();
    const {data, status, error,filter} = useSelector((state) => state.products);


    useEffect(() => {
        dispatch(getProducts(filter.itemsPerPage))
    }, [dispatch,filter.itemsPerPage])
    return (
        <div>
            <div className='catalog__combo-block'>
                <Link to={`/product/${item.id}`}>
                    <img className="card__img" src={item.images[0]} alt={item.title} />
                </Link>
                <div className='catalog__combo-item'>
                    <h2 className='catalog__combo-subtitle'>{item.title}</h2>
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

            </div>
        </div>
    );
};

export default MinCard;