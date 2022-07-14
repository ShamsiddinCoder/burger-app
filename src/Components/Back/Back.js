import React, { useContext } from 'react';
import Classes from './Back.module.css';
import {Context} from '../Hoc1/Context';

export default function Back() {
    const {backRemove, backActive} = useContext(Context);
  return (
    <div 
        onClick={backRemove}
        className={Classes.Back}
        style={{
            display: backActive ? 'block' : 'none'
        }}
    ></div>
  )
}
