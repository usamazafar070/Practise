import React, { createContext } from 'react'
export const StudentInfo = createContext()
const StudentDBMS = (props) => {
    const StudentDBMS = {
        name : 'Faizan Sajad',
        email : 'faizansajad@gmail.com'
    }
  return (
    <div>
        <StudentInfo.Provider value={StudentDBMS}>
            {props.children}
        </StudentInfo.Provider>
    </div>
  )
}

export default StudentDBMS