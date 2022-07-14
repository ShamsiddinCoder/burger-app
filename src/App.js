import React, { useReducer, useState, useEffect} from "react";
import BurgerMenu from './Components/BurgerMenu/BurgerMenu';
import Burger from './Components/Burger/Burger';
import Controller from './Components/Burger/BurgerControl/BurgerControl';
import reducer from './Components/Hoc1/Reducer';
import {Context} from './Components/Hoc1/Context';
import Orders from './Components/BurgerMenu/Orders/Orders';
import Back from './Components/Back/Back';
import AddName from './Components/Burger/BurgerControl/AddName/AddName';

function App() {
  let add = {
    salat: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  }

  let prices = {
    salat: .3,
    bacon: .5,
    cheese: .7,
    meat: 1.5
  }

  const [state, dispatch] = useReducer(reducer, add);
  const [orderActive, setOrderActive] = useState(false);
  const [backActive, setBackActive] = useState(false);
  const [price, setPrice] = useState(prices);

  const [allPrices, setAllPrice] = useState(0);

  const addAllPrice = (types) => {
    setAllPrice(pric => pric += price[types]);
  } 
  
  const addBurger = (types, index) => {
    let oldCount = 0;
    let oldPrice = 0;
    
    if(index === 0){
        oldCount = state[types] + 1;
        oldPrice = prices[types] * oldCount;
    }
    if(index === 1){
        oldCount = state[types] - 1;
        oldPrice = prices[types] * oldCount;
    }

    let updateCount = {...state};
    updateCount[types] = oldCount;

    let updatePrice = {...price};
    updatePrice[types] = oldPrice;
    setPrice(pricec => pricec = updatePrice);

    dispatch({
      count: updateCount
    });
    addAllPrice(types);
  }

  const ordeActiv = () => {
    setOrderActive(actives => actives = !actives);
    setBackActive(back => back = !back);
  }

  // Order start ====================================================================================

  const [order, setOrder] = useState(
    JSON.parse(localStorage.getItem(`order`)) || []
  );
  
  let orderState = Object.entries(state).map((igkey, i) => {
    return [...Array(state[igkey])].map((item, index) => {
        if(igkey[1] > 0){
            return { 
              key: i,
              name: igkey[0],
              count: igkey[1],
              pricec: prices[igkey[0]],
              allPrice: price[igkey[0]]
            }  
        }
    })
  }).reduce((arr, ele) => {
    return arr.concat(ele);
  })

  // addNames start
  const [names, setNames] = useState('');
  // addNames end
  
  const addOrder = () => {
    setOrder([
      ...order,
      { 
        id: Date.now(),
        orderState,
        allPrices,
        checkOrders: false,
        names
      } 
    ])
  }
  
  // Check order start
  const checkOrder = (event) => {
    setOrder(order.map(orde => {
      if(orde.id === event){
        return {...orde, checkOrders: !orde.checkOrders}
      }
      return orde
    }));
  };
  // Check order end

  // Down up start
  const downUp = (down) => {
    let downParent = down.target.parentNode.parentNode.parentNode
    if(downParent.style.height !== 'auto'){
      downParent.style.height = 'auto';
    }else {
      downParent.style.height = `50px`;
    }
  }
  // Down up end

  // order length start
  let checkOrderLength = order.filter(checkedOrder => {
    return checkedOrder.checkOrders === true;
  });
  
  let noCheckOrderLength = order.filter(checkedOrder => {
    return checkedOrder.checkOrders !== true;
  });
  // order length end

  useEffect(() => {
    localStorage.setItem(`order`, JSON.stringify(order));
  }, [order]);

  // Order end ========================================================================================

  // AddName start
  const [addName, setAdName] = useState(false);

  const addNames = () => {
    setAdName(names => names = !names);
    setBackActive(back => back = !back);
  }

  const closeNames = () => {
    addOrder();
    addNames();
  }
  // AddName end

  // Back function start
  const backRemove = () => {
    if(orderActive){
      ordeActiv();
    }
    if(addName){
      addNames();
    }
  }
  // Back function end

  return (
    <Context.Provider value={{
      addBurger,
      ordeActiv,
      backActive,
      backRemove,
      state,
      orderActive,
      addOrder,
      order,
      checkOrder,
      downUp,
      addNames,
      closeNames,
      addName,
      setNames
    }}>
      <div className="App">
        <BurgerMenu 
              orderCheckLength={checkOrderLength.length} 
              noOrderCheckLength={noCheckOrderLength.length} 
        />
        <Burger />
        <Controller />
        <Orders />
        <Back />
        <AddName />
      </div>
    </Context.Provider>
  );
}

export default App;
