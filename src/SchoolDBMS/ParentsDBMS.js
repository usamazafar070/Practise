import React, { createContext } from 'react'
export const parentsInfo = createContext();
const ParentsDBMS = (props) => {

    const parentsDBMS = {
        name : 'Zafar Iqbal',
        email : 'zafariqbal@gmail.com',
    }
  return (
    <div>
        <parentsInfo.Provider value = {parentsDBMS}>
            {props.children}
        </parentsInfo.Provider>
    </div>
  )
}

export default ParentsDBMS