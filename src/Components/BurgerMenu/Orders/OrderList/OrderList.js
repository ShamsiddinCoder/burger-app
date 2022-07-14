import React from 'react';
import Classes from './OrderList.module.css';

export default function OrderList({name, count, price, allPrice}) {
  return (
    <ul className={Classes.OrderList}>
        <li>{name}</li>
        <li>{count}</li>
        <li>{price}</li>
        <li>{allPrice}
            <i className='bx bx-x'></i>
        </li>
    </ul>
  )
}
