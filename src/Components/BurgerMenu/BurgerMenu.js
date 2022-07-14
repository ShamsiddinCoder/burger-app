/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useContext } from 'react';
import Classes from './BurgerMenu.module.css';
import BurgerLogo from '../../Assets/Burger-logo.jpg';
import Navbor from './Navbor/Navbor';
import {Context} from '../Hoc1/Context';

export default function BurgerMenu({orderCheckLength, noOrderCheckLength}) {
  const {ordeActiv, orderActive} = useContext(Context);
  let add = Classes.active;

  return (
    <div className={Classes.BurgerMenu}>
        <nav>
            <Navbor />
        </nav>
        <div className={Classes.Logo}>
            <img src={BurgerLogo}/>
        </div>
        <div className={Classes.Orders}>
            <a href='#' 
              onClick={() => ordeActiv('orders')}
              className={orderActive ? add : null}
            >
              Orders
              <span className={Classes.CounterNoCheck}>{noOrderCheckLength}</span> 
              <span className={Classes.CounterChecked}>{orderCheckLength}</span> 
            </a>
        </div>
    </div>
  )
}
