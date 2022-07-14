import React, {useContext} from 'react';
import Classes from './OrderInform.module.css'; 
import OrderList from '../OrderList/OrderList';
import {Context} from '../../../Hoc1/Context';

export default function OrderImform({orderState, allPrices, id, checkOrder, downUp, check, names}) {
    // const {chevronDown} = useContext(Context);
    
    let orderss = orderState.map((keys, index) => {
        if(keys !== null){
            if(keys !== undefined){
                return <OrderList 
                            key={index} 
                            name={keys.name} 
                            count={keys.count}
                            price={keys.pricec}
                            allPrice={keys.allPrice}
                        />
            }
        }
    });

  return (
    <div 
        className={Classes.OrderInform}
        style={{
            // height: chevronDown ? 'auto' : '50px',
            border: check ? 'solid 2px #23c723' : 'solid 2px rgb(165, 18, 18)'
        }}
    >
        <div>
            <h1>
                <i className='bx bx-check' onClick={() => checkOrder(id)}></i>
                {names}
            </h1>
            <h1>{allPrices}
                <i className='bx bx-chevron-down' onClick={downUp}></i>
            </h1>
            <div 
                style={{
                    display: check ? 'none' : 'block'
                }}
                className={Classes.error}
            >
                <i className='bx bxs-error-circle'></i>
            </div>
        </div>
        <nav>
            <ul className={Classes.navbor}>
                <li>Gradients</li>
                <li>how many</li>
                <li>price</li>
                <li>all price
                    <i className='bx bx-cog'></i>
                </li>
            </ul>
            {orderss}
        </nav>
    </div>
  )
}
