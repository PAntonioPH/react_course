import {UserContext} from "./UserContext.jsx";
import {useState} from "react";

// const user = {
//   id: 123,
//   name: "Antonio Perez",
//   email: "antonio@gmail.com"
// }

export const UserProvider = ({children}) => {
  const [user, setUser] = useState()

  return (
    <UserContext.Provider
      value={{user, setUser}}
    >
      {children}
    </UserContext.Provider>
  )
}
