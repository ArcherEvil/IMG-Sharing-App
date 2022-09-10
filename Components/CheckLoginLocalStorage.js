import React from 'react'
import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginAction } from '../Redux/Actions';

const CheckLoginLocalStorage = ({children}) => {
    	const dispatch = useDispatch();
    useEffect(() => {
      
        const isLogged = localStorage.getItem('isCdl')
        const LoggedInfo = localStorage.getItem('cdl')
        if (isLogged == 'true') {
            dispatch(loginAction([true, JSON.parse(LoggedInfo)]));
        }
        else {
            console.log('its not true')
        }
    }, [])
    

  return (
    <>
    {children}
    </>
  )
}

export default CheckLoginLocalStorage