import React, { useContext } from 'react';
import BurgerGradient from '../BurgerGradient/BurgerGradient';
import Classes from './BurgerBilder.module.css';
import {Context} from '../../Hoc1/Context';

export default function BurgerBilder() {
  const {state} = useContext(Context);

  let gradient = Object.keys(state).map((igKey, index) => {
    return [...Array(state[igKey])].map((_, i) => {
      return <BurgerGradient type={igKey}/>
    })
  }).reduce((arr, el) => {
    return arr.concat(el)
  });
    
  return (
    <div className={Classes.BurgerBild}>
        <BurgerGradient type='breat-top'/>
        {gradient}
        <BurgerGradient type='breat-bottom'/>
    </div>
  )
}
