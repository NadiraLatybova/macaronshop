import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../../store/reducers/products";
import './Discount.scss'
import { Link } from "react-router-dom";

const Discounts = () => {
    const { data, status, error } = useSelector(state => state.products);
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = currentPage * productsPerPage;

    const currentProducts = data.slice(startIndex, endIndex);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'error') {
        return <div>Error: {error}</div>;
    }

    const handleNextPage = () => {
        if (currentPage * productsPerPage < data.length) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    return (
        <section className="discount">
            <div className="discount__container">
                <div>
                    <div className='discount__title'>
                        <Link style={{ 'color': 'rgba(78, 157, 211, 1)' }} to='/'>
                            <p className='discount__link'>Главная страница >> </p>
                        </Link>
                        <p className='discount__link'>Сладкие дни</p>
                    </div>
                    <div style={{ paddingTop: "100px", height: "100%" ,zIndex:"2"}}>
                        <h2>Акция: сладкие дни!</h2>
                        <p style={{ fontSize: "35px" }}>Неделя скидок на авторские и подарочные наборы макарон</p>
                    </div>
                </div>
                <div className="flying-images-container">
                    <img src="https://macaronshop.ru/wp-content/themes/macaronshop/assets/img/holidays/bday.svg" alt="bday" className="flying-image1" />
                    <img src="https://macaronshop.ru/wp-content/themes/macaronshop/assets/img/holidays/green.svg" alt="green" className="flying-image1" />
                    <img src="https://macaronshop.ru/wp-content/themes/macaronshop/assets/img/holidays/pink.svg" alt="pink" className="flying-image1" />
                    <img src="https://macaronshop.ru/wp-content/themes/macaronshop/assets/img/holidays/orange.svg" alt="orange" className="flying-image1"  />
                    <img src="https://macaronshop.ru/wp-content/themes/macaronshop/assets/img/holidays/green.svg" alt="green" className="flying-image1"  />
                    <img src="https://macaronshop.ru/wp-content/themes/macaronshop/assets/img/holidays/pink-1.svg" alt="pink-1" className="flying-image1"  />
                </div>

                <div className="discount__product">
                    <div className="product-item">
                        {currentProducts.map(product => (
                            <div className="product-block" key={product.id}>
                                <img className='image' src={product.image} alt={product.name} />
                                <h3 className="product-title">{product.name}</h3>
                                <p className="product-description">{product.description}</p>
                                <div className="product-pricing">
                                    <div className="original">
                                        <p className="product-original-price">{product.original_price} руб</p>
                                        <p className="product-discounted-price">{product.discounted_price} руб</p>
                                    </div>
                                    <div className="buy">
                                        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 7h16v13H4V7zm0 0l8-5 8 5M8 7v-2a4 4 0 118 0v2" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <p style={{ fontSize: "20px", margin: "6px", cursor: "pointer" }}>{product.by}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className="pagination-buttons">
                        <button className="animated-button" onClick={handlePreviousPage} disabled={currentPage === 1}>Предыдущие  товары</button>
                        <button className="animated-button" onClick={handleNextPage} disabled={currentPage * productsPerPage >= data.length}>Следующие  товары</button>
                    </div>

                </div>
                <div className="flying">
                    <img src="https://macaronshop.ru/wp-content/themes/macaronshop/assets/img/holidays/bday.svg" alt="bday" className="flying" />
                    <img src="https://macaronshop.ru/wp-content/themes/macaronshop/assets/img/holidays/green.svg" alt="green" className="flying" />
                    <img src="https://macaronshop.ru/wp-content/themes/macaronshop/assets/img/holidays/pink.svg" alt="pink" className="flying" />
                    <img src="https://macaronshop.ru/wp-content/themes/macaronshop/assets/img/holidays/orange.svg" alt="orange" className="flying"  />
                </div>
            </div>



        </section>
    );
};

export default Discounts;