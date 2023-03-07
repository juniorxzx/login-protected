import React from 'react'
import { UserAuth } from "../../context/AuthProvider/userAuth"

const Protected = ({children}: {children: JSX.Element}) =>{

    const auth = UserAuth()

    if(!auth.email){
        return(
            <h1>Para poder acessar essa área, é preciso estar logado</h1>
        )
    }

    return children
}

export default Protected