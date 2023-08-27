import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { Context } from '../Redux/Context';
import {store} from '../Redux/Store'

const PrivateRoute = ({children}) => {

    const isAuth = useSelector((store) => store.authReducer.isAuth);
    const {token} = useContext(Context)
//   console.log(isAuth)
    if(!token){
        return <Navigate to="/login" />
    }
  return children
}

export default PrivateRoute