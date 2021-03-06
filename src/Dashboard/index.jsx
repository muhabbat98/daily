import { useEffect, useRef, useState } from "react";
import { useMutation } from '@apollo/client'
import { SEND_EXPENSE } from '../Graphql/Mutation'

import ImageUpload from "./ImageUpload";
import Header from "./Header";
import { Container } from "../Homepage/Navbar/style";
import { ExpenseInput, SmallContainer, ExpenseSend, SmallHeader } from "./ImageUpload/style";
import { Expenses } from "./Expenses";
import { Loader } from "../style";
import ErrorItem from "../Components/MainAdd/Errors";
function Dashboard (){
    
    const [ expense, setExpense ] = useState('')
    const expenseName = useRef()
    const [errorStatus, setErrorStatus] = useState(false)
    const [ sendExpense, { loading, error } ] = useMutation( SEND_EXPENSE, {
        update: ( cache, mutResult ) =>
        {
            let addedExpense = cache.identify( mutResult.data?.addExpense )
        
            cache.modify( {
                fields: {
                    expenses: ( expenses ) =>[ ...expenses, {__ref:addedExpense} ]
                },
            })
        }
    } )
    
    const expenseHandler = () =>{
        if ( expenseName.current.value )
        {
            sendExpense( {
                variables: {
                    imageId: expense?  expense:null,
                    name:expenseName.current.value
                }
            })
        }
    }
    useEffect( () =>{
        if(error)setErrorStatus(true)
    },[error])
    return <>
        <Header/>
        <Container>
            <SmallContainer>
                <SmallHeader>Expense</SmallHeader>
                <ExpenseInput ref={expenseName}/>
                <ImageUpload imageId={setExpense} />
                <ExpenseSend onClick={ expenseHandler }>Send</ExpenseSend>
                <Expenses/>
           </SmallContainer>
        </Container>
        {
            loading?<Loader></Loader>:error?<ErrorItem errorStatus={ {errorStatus, setErrorStatus, message:error.message} }/>:<></>
        }
    </>
}
export default Dashboard