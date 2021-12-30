
import { useQuery } from '@apollo/client'
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import ErrorItem from '../../Components/MainAdd/Errors';

import { EXPENSES } from '../../Graphql/Query'
import { Loader } from '../../style';
import {  ExpensesList,  } from './style';
import { ExpenseListItem } from './ExpenseListItem';
export function Expenses () {
    const { data, error, loading } = useQuery( EXPENSES )
    const [errorStatus, setErrorStatus] = useState(false)
   
    useEffect( () =>
    {
       error ? setErrorStatus( true ):setErrorStatus( false )
        
    }, [ error ] )
    return <>
        <ExpensesList>
            {
                data && data.expenses ? data.expenses.map( ( u ) => <ExpenseListItem key={ u.id } data={ u}/>) 
                    :
                    <></>
            }
        </ExpensesList>
        {
            loading ? <Loader /> : error ? <ErrorItem errorStatus={{errorStatus, setErrorStatus, message:error.message}}/> :<></>
        }
        </>
}