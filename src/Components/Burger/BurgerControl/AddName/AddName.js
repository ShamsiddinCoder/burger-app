import React, {useContext, useState} from 'react';
import Classes from './AddName.module.css';
import {Context} from '../../../Hoc1/Context';

export default function AddName() {
    const {addName, closeNames, setNames} = useContext(Context);
    const [addDisabled, setAddDisabled] = useState(true);

    const keyDisabled = (ele) => {
      if(ele.target.value.length > 4){
        setAddDisabled(disable => disable = false);
      }else {
        setAddDisabled(disable => disable = true);
      }
      setNames(name => name = ele.target.value);
    }

  return (
    <div className={Classes.AddName}
      style={{
        top: addName ? '50%' : '-100%'
      }}
    >
        <input 
          type='text' 
          placeholder='Add Name!'
          onChange={keyDisabled}
        />
        <button onClick={closeNames} disabled={addDisabled} >Add</button>
    </div>
  )
}
