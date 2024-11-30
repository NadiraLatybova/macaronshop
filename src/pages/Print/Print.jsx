import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Logos } from '../../store/reducers/print'; // Экшен для получения данных
import './Print.scss';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const LogoList = () => {
    const dispatch = useDispatch();

    // Получение данных из Redux
    const { data, loading, error } = useSelector((state) => state.logos);

    // Локальный стейт для выбора категории
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Фильтрация данных по категории
    const filteredData = selectedCategory === 'All'
        ? data
        : data.filter((item) => item.category === selectedCategory);

    // Вызов экшена для загрузки данных при монтировании компонента
    useEffect(() => {
        dispatch(Logos());
    }, [dispatch]);

    // Динамические категории из данных
    const categories = ['All', ...new Set(data.map((item) => item.category))];



    return (
        <section className="print">
            <div className="container">
                <h1 className="print__title">Выберите изображения</h1>
                <p className="print__desc">Загрузите собственные изображения или выберите из нашей галереи</p>

                <div className="print__items">
                    <div className="print__block">
                        {/* Компонент выбора категории */}
                        <Autocomplete
                            className="print__autoCom"
                            disablePortal
                            options={categories} // Опции категорий
                            sx={{ width: 270 }}
                            value={selectedCategory} // Текущая выбранная категория
                            onChange={(event, value) => setSelectedCategory(value || 'All')} // Установка выбранной категории
                            renderInput={(params) => (
                                <TextField {...params} label="Тема" variant="outlined" />
                            )}
                        />

                        <div className="print__row">
                            {loading && <p>Загрузка данных...</p>}
                            {error && <p className="error">Ошибка: {error}</p>}

                            {/* Вывод отфильтрованных данных */}
                            {filteredData.map((item) => (
                                <div className="print__content" key={item.id}>
                                    <div className="print__images">
                                        <img className="print__img" src={item.img} alt="Logo" />
                                    </div>
                                    <div className="print__control">
                                        <div className="print__quantity">
                                            <button className="print__btn">-</button>
                                            <div className="print__input">
                                                <input
                                                    className="print__field"
                                                    inputMode="numeric"
                                                    min="0"
                                                    max="12"
                                                    type="number"
                                                />
                                            </div>
                                            <button className="print__btn">+</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Боковая корзина */}
                    <div className="print__sideCart">
                        <div className="print__psc">
                            {/*<p className="print__subtitle">{`${filteredData.length} из 12шт`}</p>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoList;
