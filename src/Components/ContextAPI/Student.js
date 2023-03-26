import React, { useContext } from 'react'
import { StudentInfo } from '../../SchoolDBMS/StudentDBMS'
const Student = () => {
  const result = useContext(StudentInfo);
  return (
    <div>
      <table>
        <tr>
          <td>Student Name : {result.name}</td>
        </tr>
        <tr>
          <td>Student Email : {result.email}</td>
        </tr>
      </table>
    </div>
  );
}

export default Student