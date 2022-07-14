import React from 'react';
import Classes from './BurgerGradient.module.css';


export default function BurgerGradient({type}) {
    let gradient = null;

    switch(type){
      case 'breat-top':
          return gradient = (
              <div className={Classes.BreatTop}>
                  <div className={Classes.Seeds1}></div>
                  <div className={Classes.Seeds2}></div>
              </div>
          )
      case 'breat-bottom':
          return gradient = <div className={Classes.BreatBottom}></div>   
      case 'salat':
          return gradient = <div className={Classes.Salat}></div>    
      case 'bacon':  
          return gradient = <div className={Classes.Bacon}></div>  
      case 'cheese':
          return gradient = <div className={Classes.Cheese}></div>    
      case 'meat':
          return gradient = <div className={Classes.Meat}></div>   
      default: return gradient = null     
    }
}

