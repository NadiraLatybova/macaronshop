import React from 'react';
import img404 from '../../components/assets/404.svg'
import mac from '../../components/assets/errorMac.svg'
import slice from '../../components/assets/errorslice.svg'
import './NotFound.scss'

const NotFound = () => {
    return (
        <div className='error'>
            <div className='container'>
                <h2 className='error__title'>Извините, страница не найдена</h2>
                <div className='error__images'>
                    <div className='error__item'>
                        <img className='error__img' src={img404} alt=""/>
                    </div>

                    <img className='error__mac' src={mac} alt=""/>
                    <img className='error__mac2' src={slice} alt=""/>

                </div>

                <button className='error__btn'>Назад</button>
            </div>
            
        </div>
    );
};

export default NotFound;