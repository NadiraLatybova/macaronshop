import React from 'react';
import {Link, useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import './CategoryPage.scss';




const CategoryPage = () => {
    const { categoryName } = useParams(); // Получение имени категории из URL
    const { data } = useSelector((state) => state.products); // Данные из Redux

    const uniqueCategoriesRu = [
        { ru: 'Все', en: 'All' },
        { ru: 'Эклеры', en: 'eclair' },
        { ru: 'Макаронс', en: 'macaron' },
        { ru: 'Зефир', en: 'marshmallows' },
        { ru: 'Вафельные трубочки', en: 'Waffle roll' },
        { ru: 'Кейк-попсы', en: 'cake pops' },
        { ru: 'Комбо-наборы', en: 'Combo sets' },
        { ru: 'Десерт картошка', en: 'Potato dessert' },
    ];

    // Фильтрация продуктов по категории
    const filteredProducts = categoryName === 'All'
        ? data
        : data.filter((product) => product.category === categoryName);

    // Поиск перевода категории
    const translatedCategory =
        categoryName === 'All'
            ? 'Все продукты'
            : uniqueCategoriesRu.find((item) => item.en === categoryName)?.ru || categoryName;

    return (
        <div className="categoryPage">
            <div className="container">
                <div className='cart__path'>
                    <Link className='cart__link' to='/'>
                        <span>Главная страница</span>
                    </Link>
                    <span> »</span>
                    <span>Каталог десертов</span>
                </div>
                <h1 className='categoryPage__title'>{translatedCategory}</h1>
                <div className="products">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((item) => (
                            <Card key={item.id} item={item} />
                        ))
                    ) : (
                        <p>Нет продуктов в этой категории.</p>
                    )}
                </div>
            </div>

        </div>

    );
};

export default CategoryPage;
