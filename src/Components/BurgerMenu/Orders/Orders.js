import React, { useContext } from 'react';
import Classes from './Orders.module.css';
import OrderInform from './OrderInform/OrderImform';
import {Context} from '../../Hoc1/Context';

export default function Orders() {
  const {orderActive, order, checkOrder, downUp} = useContext(Context);

  let ordersInform = order.map((keys, index) => {
    return <OrderInform 
                  key={index} 
                  // {...keys}
                  id={keys.id}
                  checkOrder={checkOrder}
                  downUp={downUp} 
                  orderState={keys.orderState}
                  check={keys.checkOrders}
                  names={keys.names}
                  allPrices={keys.allPrices}
                  />
  })
  // console.log(order);
  return (
    <div 
      className={Classes.Orders}
      style={{
        top: orderActive ? '50%' : '-100%'
      }}
    >
        {ordersInform}                                          
    </div>
  )
}
