import React, { useContext } from 'react'
import { parentsInfo } from '../../SchoolDBMS/ParentsDBMS'

const Parents = () => {
    const result = useContext(parentsInfo)
  return (
    <div>
      <table>
        <tr>
          <td>Parents Name : {result.name}</td>
        </tr>
        <tr>
          <td>Parents Email : {result.email}</td>
        </tr>
      </table>
    </div>
  );
}

export default Parents