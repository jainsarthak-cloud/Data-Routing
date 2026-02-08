import { Children, createContext, useState } from "react";

export let MyStore = createContext()

export let ContextProvider = ({ children }) => {

    const [registered, setRegistered] = useState(JSON.parse(localStorage.getItem("RegisteredUser")) || [])

    const [login, setLogin] = useState({
        username: "",
        password: "",
    })

    // ✅ Auth State
    const [isAuth, setIsAuth] = useState(
        JSON.parse(localStorage.getItem("isAuth")) || false
    );


    return <MyStore.Provider value={{ registered, setRegistered, login, setLogin, isAuth, setIsAuth}}>{children}</MyStore.Provider>
}