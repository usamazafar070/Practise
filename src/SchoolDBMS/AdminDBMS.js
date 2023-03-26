import { createContext } from "react";
export const AdminInfo = createContext();
const AdminDBMS = (props) => {
    const AdminDBMS = {
        name : 'Bilal Imrani',
        email : 'bilalimrani@gmail.com'
    }
  return (
    <div>
        <AdminInfo.Provider value={AdminDBMS}>
            {props.children}
        </AdminInfo.Provider>
    </div>
  )
}

export default AdminDBMS