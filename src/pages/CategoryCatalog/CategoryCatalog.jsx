import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getProducts, changePage } from "../../store/reducers/products";
import Pagination from '@mui/material/Pagination';
import { animateScroll as scroll } from 'react-scroll';
import './CategoryCatalog.scss';
import FilterPrice from "../../components/FilterPrice/FilterPrice";
import Card from "../../components/Card/Card";
import { addCart, removeCart } from "../../store/reducers/carts";
import Categories from "../../components/Categories/CategoryPage";

const CategoryCatalog = () => {
    const { data = [], filter } = useSelector((state) => state.products); // Убедимся, что data всегда массив
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getProducts(filter.filterPrice));
    }, [dispatch, filter.filterPrice]);

    return (
        <section className="category">
            <div className="container">
                <FilterPrice />
                <Categories/>
                <div className="category__content">
                    {
                            data
                                .filter((item, idx) => {
                                    return idx >= filter.page * 8 - 8 && idx < filter.page * 8
                                })
                                .map((item) => (
                                     <Card key={item.id} item={item} />
                                ))
                    }
                </div>
                <div className="category__pagination">
                    <Pagination
                        onChange={(event, page) => {
                            dispatch(changePage(page));
                            scroll.scrollToTop({ smooth: true, duration: 0 });
                        }}
                        page={filter.page}
                        count={Math.ceil(data.length / 8)}
                        variant="outlined"
                        shape="rounded"
                    />
                </div>
            </div>
        </section>
    );
};

export default CategoryCatalog;
