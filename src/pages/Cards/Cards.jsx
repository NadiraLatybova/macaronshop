import React from 'react';
import './Cards.scss'
import icon1 from '../../components/assets/icon1.svg'
import icon2 from '../../components/assets/icon2.svg'
import icon3 from '../../components/assets/icon3.svg'
import icon4 from '../../components/assets/icon4.svg'
import icon5 from '../../components/assets/icon5.svg'
import icon6 from '../../components/assets/icon6.svg'
import icon7 from '../../components/assets/icon7.svg'
import cardFon from '../../components/assets/cardsfon.svg'
import cardFon1 from '../../components/assets/cardFon.svg'
import cardFon2 from '../../components/assets/cardFon2.svg'
import cardFon3 from '../../components/assets/cardFon3.svg'
import cardFon4 from '../../components/assets/cardFon5.svg'
import cardFon11 from '../../components/assets/cardFon11.svg'
import {useNavigate} from 'react-router-dom'
import {animateScroll as scroll} from "react-scroll";



const Cards = () => {
    const navigate = useNavigate();
    const goToAboutPage = () => {
        navigate('/print'); // Переход на страницу "О нас"
    };
    return (
        <div className='cards'>
            <div className='container'>
                <div className='cards__row'>
                    <div className='cards__block'
                         onClick={goToAboutPage}
                         style={{
                             backgroundImage: `url(${cardFon})`,
                             backgroundSize: 'cover',
                             backgroundPosition: 'center'
                         }}>
                        <img className='cards__img' src={icon1} alt=""/>
                        <div className='cards__items'>
                            <h2 className='cards__title'>Готовые наборы</h2>
                            <img src={icon2} alt=""/>
                        </div>
                        <p className='cards__text'>Готовые наборы со скидкой. <br/> Вы можете подобрать набор на
                            подходящий случай.</p>
                    </div>


                    <div className='cards__block'
                         style={{
                             backgroundImage: `url(${cardFon1})`,
                             backgroundSize: 'cover',
                             backgroundPosition: 'center'
                         }}>

                        <img className='cards__img' src={icon3} alt=""/>
                        <div className='cards__items'>
                            <h2 className='cards__title'>Собрать свой набор</h2>
                            <img src={icon2} alt=""/>
                        </div>
                        <p className='cards__text'>Выбрать количество макарун, и выбрать вкусы</p>
                    </div>

                        <div className='cards__block'
                             onClick={()=>{  scroll.scrollToTop({ smooth: true, duration: 0 })}}
                             style={{
                                 backgroundImage: `url(${cardFon2})`,
                                 backgroundSize: 'cover',
                                 backgroundPosition: 'center'
                             }}>

                            <img className='cards__img' src={icon4} alt=""/>
                            <div className='cards__items'>
                                <h2 className='cards__title'>Набор с индивидуальной печатью</h2>
                                <img src={icon2} alt=""/>
                            </div>
                            <p className='cards__text'>Собрать набор макарон с уникальным дизайном. </p>
                        </div>





                    <div className='cards__block'
                         style={{
                             backgroundImage: `url(${cardFon11})`,
                             backgroundSize: 'cover',
                             backgroundPosition: 'center'
                         }}>


                        <img className='cards__img' src={icon5} alt=""/>
                        <div className='cards__items'>
                            <h2 className='cards__title'>Свадебные предложения</h2>
                            <img src={icon2} alt=""/>
                        </div>
                        <p className='cards__text'>Нежные пирожные макаронс с разными вкусами для украшения вашего
                            свадебного торжества</p>
                    </div>



                    <div className='cards__block'
                         style={{
                             backgroundImage: `url(${cardFon3})`,
                             backgroundSize: 'cover',
                             backgroundPosition: 'center'
                         }}>

                        <img className='cards__img' src={icon6} alt=""/>
                        <div className='cards__items'>
                            <h2 className='cards__title'>Корпоративные подарки</h2>
                            <img src={icon2} alt=""/>
                        </div>
                        <p className='cards__text'>От 85 руб за шт. С уникальным дизайном. <br/>Приятный комплимент для
                            коллег и партнеров</p>
                    </div>


                    <div className='cards__block' style={{
                        backgroundImage: `url(${cardFon4})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>

                        <img className='cards__img' src={icon7} alt=""/>
                        <div className='cards__items'>
                            <h2 className='cards__title'>Оптовые поставки</h2>
                            <img src={icon2} alt=""/>
                        </div>
                        <p className='cards__text'>Предложение для кофеен, кафе, отелей и т.д. <br/>
                            Посмотрите условия сотрудничества и отзывы.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;