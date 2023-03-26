import React, { createContext } from 'react'
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
export const data = createContext();
const ComponentA = () => {
    const obj1 = {
        name : 'Usama Zafar',
        name2 : 'Faizan Sajjad',
        email : 'macademy070@gmail.com'
    }
  return (
    <div>
        <data.Provider value = {obj1}>
            <ComponentB/>
            <ComponentC/>
        </data.Provider>
    </div>
  )
}

export default ComponentA;