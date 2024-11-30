import React from 'react';
import placeSvg from '../assets/place.svg'
import vector from '../assets/vector.svg'
import phone from '../assets/phone.svg'
import './HeaderTop.scss'
import {logOut} from "../../store/reducers/user";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom"
import CartLink from "./CartLink";
import {FaUser} from "react-icons/fa6";


const HeaderTop = () => {
    const carts = useSelector(state => state.carts)
    const dispatch = useDispatch()
    const user = useSelector(s => s.user)

    return (
        <div className='headerTop'>
            <div className='container'>

                <nav className='headerTop__nav'>
                    <div className='headerTop__left'>

                        <Link style={{textDecoration: 'none'}} to='/delivery'>
                            <p className='headerTop__link'>Доставка и оплата</p>
                        </Link>


                        <Link style={{textDecoration: 'none'}} to='/guarantee'>
                            <p className='headerTop__link'>Гарантия свежести</p>
                        </Link>

                        <Link style={{textDecoration: 'none'}} to='/desert'>
                            <p className='headerTop__link'>Оптовые поставки</p>
                        </Link>


                        <Link style={{textDecoration: 'none'}} to='/contacts'>
                            <p className='headerTop__link'>Контакты</p>
                        </Link>


                    </div>
                    <div className='headerTop__right'>
                        <div className='headerTop__logo'>
                            <img src={placeSvg} alt=""/>
                            <p>Санкт-Петербург</p>
                        </div>
                        <div className='headerTop__contact'>
                            <img src={phone} alt=""/>
                            <p className='headerTop__tel'>8 812 309-82-88</p>
                        </div>

                        <Link style={{textDecoration: 'none'}} to={"/cart"}>
                            <div className='headerTop__cart'>
                                <div>
                                    <CartLink/>
                                </div>

                                {
                                    user.status === 'success' &&
                                    <p onClick={() => dispatch(logOut())} className='headerTop__cart-text'>Выйти из
                                        акк</p>

                                }

                            </div>
                        </Link>

                        <Link to='/favourite'>
                            <svg

                                width="30"
                                height="21"
                                viewBox="0 0 21 18"
                                fill='#FF0000'
                                xmlns="http://www.w3.org/2000/svg"
                                className="headerTop__svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.31802 2.31802C4.07538 0.56066 6.92462 0.56066 8.68198 2.31802L10.5 4.13604L12.318 2.31802C14.0754 0.56066 16.9246 0.56066 18.682 2.31802C20.4393 4.07538 20.4393 6.92462 18.682 8.68198L10.5 16.864L2.31802 8.68198C0.56066 6.92462 0.56066 4.07538 2.31802 2.31802Z"
                                    stroke="##FF0000"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </Link>
                        <Link to='/register'>
                            <FaUser style={{color: '#000000', fontSize: '18px'}}/>
                        </Link>


                    </div>
                </nav>
            </div>
        </div>
    );
};

export default HeaderTop;