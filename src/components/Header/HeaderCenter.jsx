import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import './HeaderCenter.scss';
import sale from '../assets/sale.svg';
import vector from '../assets/vector.svg';
import Logo from '../assets/Logo.svg';

const HeaderCenter = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const {data} = useSelector((state) => state.products);
    const navigate = useNavigate();


    const uniqueCategories = ['All', ...new Set(data.map((product) => product.category))];

    // Обработчик выбора категории
    const handleCategoryClick = (category) => {
        navigate(`/category/${category}`);
        setIsDropdownVisible(false);
    };

    const uniqueCategoriesRu = [
        {
            ru: 'Все',
            en: 'All',
        },
        {
            ru: 'Эклеры',
            en: 'eclair',
        },
        {
            ru: 'Макаронс',
            en: 'macaron',
        },
        {
            ru: 'Зефир',
            en: 'marshmallows',
        },
        {
            ru: 'Вафельные трубочки',
            en: 'Waffle roll',
        },
        {
            ru: 'Кейк-попсы',
            en: 'cake pops',
        },
        {
            ru: 'Комбо-наборы',
            en: 'Combo sets',
        },
        {
            ru: 'Десерт картошка',
            en: 'Potato dessert',
        },

    ]

    return (
        <div className='headerCenter'>
            <div className='container'>
                <nav className='headerCenter__nav'>
                    <div className='headerCenter__left'>
                        <div className='headerCenter__sale'>
                            <a className='headerCenter__link' href="">СЛАДКИЕ ДНИ</a>
                            <img src={sale} alt=""/>
                        </div>
                        <div className='headerCenter__gift'>
                            <a className='headerCenter__link' href="">подарочные наборы</a>
                            <img src={vector} alt=""/>
                        </div>
                        <a className='headerCenter__link' href="">Собрать набор</a>
                    </div>

                    <div className='headerCenter__logo'>
                        <Link to={'/'}>
                            <img src={Logo} alt=""/>
                        </Link>
                    </div>

                    <div className='headerCenter__right'>
                        <a className='headerCenter__link' href="">Создать дизайн</a>
                        <div className='headerCenter__gift'>
                            <a className='headerCenter__link' href="">КОМПАНИЯМ</a>
                            <img src={vector} alt=""/>
                        </div>
                        <div
                            className='headerCenter__gift headerCenter__catalog'
                            onMouseEnter={() => setIsDropdownVisible(true)}
                            onMouseLeave={() => setIsDropdownVisible(false)}
                        >
                            <a className='headerCenter__link' href="#">ВЕСЬ КАТАЛОГ</a>
                            <img src={vector} alt=""/>

                            {isDropdownVisible && (
                                <div className="headerCenter__dropdown">
                                    {uniqueCategories.map((category, index) => (
                                        <div
                                            key={index}
                                            className="headerCenter__dropdown-item"
                                            onClick={() => handleCategoryClick(category)}
                                        >
                                            {

                                                uniqueCategoriesRu.find(item => item.en === category)?.ru || category
                                            }
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default HeaderCenter;
