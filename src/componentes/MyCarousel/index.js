
import React from 'react';
import { Carousel } from 'antd';
import adidas from '../../imagenscarousel/adidas.jpg';
import outono from '../../imagenscarousel/outono.jpg';
import selecao from '../../imagenscarousel/selecao.jpg';
import style from './style.module.css';

const MyCarousel= () => (
  <Carousel autoplay>
    <div >
      <img src={adidas} alt='adidas' className={style.imgContainer}></img>
    </div>
    <div>
      <img src={outono} alt='outono' className={style.imgContainer}></img>
    </div>
    <div>
      <img src={selecao} alt='seleçaõ' className={style.imgContainer}></img>
    </div>
   
  </Carousel>
);
export default MyCarousel;