import React, { useContext } from "react";
import { TeacherInfo } from "../../SchoolDBMS/TeacherDBMS";
const Teacher = () => {
  const result = useContext(TeacherInfo)
  return (
    <div>
      <table>
        <tr>
          <td>Teacher Name : {result.name}</td>
        </tr>
        <tr>
          <td>Teacher Email : {result.email}</td>
        </tr>
      </table>
    </div>
  );
}

export default Teacher