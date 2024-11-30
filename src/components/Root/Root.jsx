import React from 'react';
import {Outlet} from 'react-router-dom'
import Footer from "../Footer/Footer";
import HeaderTop from "../Header/HeaderTop";
import HeaderCenter from "../Header/HeaderCenter";
import MySwiper from '../Header/MySwiper'


const Root = () => {
    return (
        <>

           <MySwiper/>
           <HeaderTop/>
           <HeaderCenter/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Root;