import React, { useContext } from 'react';
import ControlBtn from './Controlbtn/ControlBtn';
import Classes from './BurgerControl.module.css';
import {Context} from '../../Hoc1/Context';

export default function BurgerControl() {
    const {state, addNames} = useContext(Context);

    let disabledCount = {...state};
    for(let key in disabledCount){
        disabledCount[key] = disabledCount[key] <= 0;
    }

    let disable = Object.entries(disabledCount).some(disabl => {
      return disabl[1] === false
    })
    
    let addBtn = Object.keys(state).map((keys, i) => {
        return <ControlBtn key={i} name={keys} disabled={disabledCount[keys]}/>
    });

  return (
    <div className={Classes.BurgerControl}>
        {addBtn}
        <button 
          className={Classes.Orderd} 
          disabled={!disable}
          onClick={addNames}
        >Ordered</button> 
    </div>
  )
}
