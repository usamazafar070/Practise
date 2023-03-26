import React, { useContext } from 'react'
import { AdminInfo } from '../../SchoolDBMS/AdminDBMS';
const Administator = () => {
  const result = useContext(AdminInfo);
  return (
    <div>
      <table>
        <tr>
          <td>Administator Name : {result.name}</td>
        </tr>
        <tr>
          <td>Administator Email : {result.email}</td>
        </tr>
      </table>
    </div>
  );
}

export default Administator