import React, { useState ,useEffect} from 'react';
import './Sweet.scss';
import { Link } from "react-router-dom";

import sweet from "../../components/assets/deloiver_______maco.mp4";

import marry from "../../components/assets/sweet---cake.svg";

import first from "../../components/assets/present.svg"
import  second from "../../components/assets/tea.svg"
import hum from "../../components/assets/hum.png";

const sweetData = [
    {
        id: 1,
        img: 'https://macaronshop.ru/wp-content/uploads/2022/07/macarons-dlya-cafe-2.png',
        reade: "Французские ",
        text:"макаронс",
        description: "22 потрясающих классических и ",
        info:"авторских вкуса в линейке"
    },
    {
        id: 2,
        img:'https://macaronshop.ru/wp-content/uploads/2023/03/optom-eklery.png',
        reade: "Эклеры",
        description: "Вкусы: арахис, ваниль, карамель, ",
        info:"малина, смородина, фисташка, шоколад"
    },
    {
        id: 3,
        img: 'https://macaronshop.ru/wp-content/uploads/2024/07/cake-pops.png',
        reade: "Кейк-попсы",
        description: "С добавлением миндальной ",
        info:"муки: три цвета"
    },
    {
        id: 4,
        img: 'https://macaronshop.ru/wp-content/uploads/2022/07/pirozhnie-kartoshka-2.png',
        reade: "Домашние трубочки",
        description: "С шеколадным",
        info:" молоком"
    },
];
const sweetToday = [
    {
        id: 1,
        img:'https://macaronshop.ru/wp-content/uploads/2022/07/oreshki.png',
        reade: "Орешки ",
        text:"со сгущенкой",
        description: "Россыпью и индивидуальной ",
        info:'упаковке'
    },
    {
        id: 2,
        img: 'https://macaronshop.ru/wp-content/uploads/2022/07/trubochki.png',
        reade: "Домашние трубочки",
        description: "Со вареным сгущенным",
        info:' молоком'
    },
    {
        id: 3,
        img: 'https://macaronshop.ru/wp-content/uploads/2022/07/maffiny.png',
        reade: "Маффин",
        description: "Вкусы: лесные ягоды, шоколад-",
        info:"карамель, лимон"
    },
    {
        id: 4,
        img: 'https://macaronshop.ru/wp-content/uploads/2022/10/macarons-1.png',
        reade: "Макарон",

        description: "Для ваших гостей, коллег ",
        info:"и партнёров"
    },
];
const   present  =[
    {
        id:1,
        img:first,
        info :'Привлекательный внешний вид'
    },
    {
        id:2,
        img:hum,
        info :'Яркие шоубоксы'
    },
    {
        id:3,
        img:second,
        info :'Высокая возвращаемость'
    },
    {
        id:4,
        img:marry,
        info :'Натуральные ингредиенты'
    },
]

const Sweet = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    const images = [
        "https://msk.macaronshop.ru/wp-content/uploads/2021/08/mv1.png",
        "https://msk.macaronshop.ru/wp-content/uploads/2021/08/v1.png",
        "https://msk.macaronshop.ru/wp-content/uploads/2021/08/zarina.png",
        "https://msk.macaronshop.ru/wp-content/uploads/2021/08/sberbank.png",
        "https://msk.macaronshop.ru/wp-content/uploads/2021/08/zenit.png"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <section className='sweet'>
            <div className="sweet__container">
                <div className='cart__path'>    <Link className='cart__link' to='/'>
                    <span>Главная страница</span>    </Link>
                    <span> »</span>    <span>Контакты</span>
                </div>
                <div className="sweet__collection" >
                    <div>
                        <video className="sweet__img" src={sweet} autoPlay loop muted />
                    </div>

                    <div className="sweet__info"  >
                        <h2 className='sweet__delivery'>Поставки пирожных оптом</h2>
                        <p className='sweet__akzia'>Акция! Специальные условия доставки по России.</p>

                        <p style={{ paddingTop: '30px', fontSize: '25px' }}>
                            Мы с 2013 года производим и поставляем оптом пирожные <br />
                            для кофеен и кафе. Наши десерты продаются в <br />
                            крупнейших кондитерских сетях Москвы и Петербурга. Они <br />
                            яркие, натуральные, позволяют делать высокую наценку, <br />
                            за ними возвращаются покупатели.
                        </p>
                        <button className="sweet__button" onClick={toggleModal}>
                            Заказать
                        </button>
                    </div>
                </div>
                <h3 style={{ paddingTop: '30px', fontSize: '35px' }}>Пирожные для вашей кофейни</h3>
                <div className="sweet__set">
                    <div className="sweet__catalog">
                        {sweetData.map((item) => (
                            <div key={item.id}>
                                <img className='sweet__opacity' style={{width:"330px"}} src={item.img} alt={item.reade} />
                                <p style={{fontSize:'30px',fontWeight:"600",paddingTop:"15px"}}>{item.reade}</p>
                                <p  style={{fontSize:'30px',fontWeight:"600"}}>{item.text}</p>
                                <p style={{fontSize:"22px",color:"4a4747",paddingTop:"10px"}}>{item.description}</p>
                                <p style={{fontSize:"22px",color:"4a4747",}}>{item.info}</p>
                            </div>
                        ))}

                    </div>
                    <div className="sweet__catalog">
                        {sweetToday.map((item) => (
                            <div key={item.id}>
                                <img className='sweet__opacity' style={{width:"330px"}} src={item.img} alt={item.reade} />
                                <p style={{fontSize:'30px',fontWeight:"600",paddingTop:"15px"}}>{item.reade}</p>
                                <p  style={{fontSize:'30px',fontWeight:"600"}}>{item.text}</p>
                                <p style={{fontSize:"22px",color:"4a4747",paddingTop:"10px"}}>{item.description}</p>
                                <p style={{fontSize:"22px",color:"4a4747",paddingBottom:"130px"}}>{item.info}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <h2 className="sweet__work">
                    Продукция от кондитерской фабрики Macaronshop — это
                </h2>

                <div className="sweet__icons">
                    {present.map((item)=>(
                        <div key={item.id}>
                            <img style={{width:"150px"}} src={item.img} alt={item.info}/>
                                <p style={{fontSize:"25px",paddingTop:"20px"}}>{item.info}</p>
                        </div>
                    ))}
                </div>
                <div className="sweet__carousel">
                    <div className="carousel-track">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`carousel ${index}`}
                                className="carousel-image"
                            />
                        ))}

                        {images.map((img, index) => (
                            <img
                                key={`duplicate-${index}`}
                                src={img}
                                alt={`carousel duplicate ${index}`}
                                className="carousel-image"
                            />
                        ))}
                    </div>
                </div>

                    <div className="sweet__text">
                        <p style={{fontSize:"25px"}}>За годы работы кондитерской фабрики "Макароншоп" наши десерты для кофейни покорили сердца множества потребителей Москвы. <br/>
                            В нашем каталоге присутствует самая востребованная выпечка на любой вкус. Именно поэтому мы, как поставщик, предлагаем заказывать не только макарон, но и кейк-попсы, эклеры и вафельные <br/> трубочки – оптом. <br/>
                            Свежие натуральные продукты гарантируют высокие вкусовые качества пирожных на выходе. В наши изделия профессионалы-кондитеры добавляют в разы больше начинки, чем у других <br/> производителей. <br/>
                            Десерты изготовлены по уникальному рецепту для наших покупателей, которые можно покупать оптом только у нас. Вы не найдете их в другом магазине и в других кондитерских фабриках. <br/>
                            Продукция кондитерского производства "Макароншоп" объединяет в себе высокое качество, разнообразный ассортимент, выгодные цены и удобную доставку.</p>
                        <h2 style={{fontSize:"45px",padding:"30px"}}>Преимущества заказа десертов для кафе и кофеен</h2>
                        <p style={{fontSize:"25px"}}>Заказать вкусные десерты от кондитерской с доставкой – идеальное решение для кофеен Москвы. Это не только удобно, но и выгодно. Купить готовые сладости позволяет разнообразить меню, <br/> привлекая новых клиентов. Кондитерские изделия высокого качества станут изюминкой заведения, подчеркивая его статус и оригинальность. Кофейням не нужно тратить ресурсы на содержание <br/> собственной пекарни, ведь доставка обеспечивает свежесть продукции. Это и экономия, и удобство для ресторанов.</p>

                    </div>



            </div>

        </section>
    );
};

export default Sweet;
