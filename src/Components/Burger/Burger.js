import React from 'react';
import BurgerBild from './BurgerBilder/BurgerBilder';
import Classes from './Burger.module.css';

export default function Burger() {
  return (
    <div className={Classes.Burger}>
        <BurgerBild />
    </div>
  )
}
