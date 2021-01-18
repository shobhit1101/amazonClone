import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
    return (
        <div className='home'>
            <img className='home_image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='' />
            
            <div className='home_row'>
                <Product id="12321341" title="One Plus Nord" price={15000} rating={5} image="https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-2.jpg" />
                <Product id="1232134" title="One Plus Nord" price={9999} rating={5} image="https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-2.jpg" />
            </div>
            <div className='home_row'>
                <Product id="123213" title="One Plus Nord" price={5555} rating={5} image="https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-2.jpg" />
                <Product id="12321" title="One Plus Nord" price={2222} rating={5} image="https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-2.jpg" />
                <Product id="1232" title="One Plus Nord" price={6666} rating={5} image="https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-2.jpg" />
            </div>
            <div className='home_row'>
                <Product id="123" title="One Plus Nord" price={34343} rating={5} image="https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-2.jpg" />
            </div>
        </div>
    )
}

export default Home
