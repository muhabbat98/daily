
import React, { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext(null);

const AuthProvider = function ( { children } )
{
    
    const [ state, setState ] = useState( { token: localStorage.getItem( "token" ), username: localStorage.getItem( "username" ) } )
    useEffect( () =>{
        
        if ( ( localStorage.getItem( "token" ) !== state.token ) && state.token && state.username ){
            localStorage.setItem( "token", state.token )
            localStorage.setItem( "username", state.username )
        }
        else if ( state.token === undefined && state.username === undefined )
        {
            localStorage.removeItem( 'token' )
            localStorage.removeItem('username')
            
        }

    },[state])

    return (
        <AuthContext.Provider value={ { state, setState } }>
            {children}
        </AuthContext.Provider>)
};

const useAuth = ( settrOnly ) =>{
    
    const { state, setState } = useContext( AuthContext )
    
    return settrOnly? [state, setState] :[setState]
};

export {
    AuthProvider,
    useAuth
}