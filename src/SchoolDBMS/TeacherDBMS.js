import React, { createContext } from "react";
export const TeacherInfo = createContext();
const TeacherDBMS = (props) => {
  const TeacherDBMS = {
    name: "Shahzaib Naeem",
    email: "shahzaib@gmail.com",
  };
  return (
    <div>
        <TeacherInfo.Provider value = {TeacherDBMS}>
            {props.children}
        </TeacherInfo.Provider>
    </div>
  );
};

export default TeacherDBMS;
