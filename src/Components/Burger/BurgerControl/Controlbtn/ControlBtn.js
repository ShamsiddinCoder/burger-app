import React, { useContext } from 'react';
import Classes from './ControlBtn.module.css';
import {Context} from '../../../Hoc1/Context';

export default function ControlBtn(props) {
    const {addBurger, state} = useContext(Context);

  return (
    <div className={Classes.ControlBtn}>
        <button onClick={() => addBurger(props.name, 0)}>Add</button>
        <p>{props.name}</p>
        <button onClick={() => addBurger(props.name, 1)} disabled={props.disabled} >Remove</button>  
    </div>
  )
}
