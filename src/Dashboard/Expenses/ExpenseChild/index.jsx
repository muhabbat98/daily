import { useMutation } from "@apollo/client";
import { useEffect, useRef, useState } from "react";
import ErrorItem from "../../../Components/MainAdd/Errors";
import ModalWindow from "../../../Components/MainAdd/Modal";
import { CREATE_EXPENSE_ITEM } from "../../../Graphql/Mutation";
import {  Form, Submit } from "../../../style";
import { ExpenseInput, Expenselabel, ModalHeader, InputItem } from "./style";
export default function ExpenseChild ( { modalProps, parentId } ){
    
    const [ errorStatus, setErrorStatus ] = useState( false )
    const [ alert, setAlert ] = useState( '' )
    
    const [ sendExpense, { data, loading, error } ] = useMutation( CREATE_EXPENSE_ITEM, {
        update: ( cache, newItem ) =>
        {
            cache.modify( {
                id:'Expense:'+parentId,
                fields: {
                    items: ( exData ) => ([...exData,{__ref:cache.identify(newItem.data.addExpenseItem)} ] )                   
                }
            })
        }
    })

    const title = useRef( '' )
    const cost = useRef( '' )
    const date = useRef( '' )
    
    useEffect( () =>
    {
        if(error) setErrorStatus(true)
    }, [ error ] )
    
    useEffect( () =>{

        if ( data && data.addExpenseItem ){
            setAlert( data.addExpenseItem.item + "  created" )
        }
    }, [ data ] )
    
    const submitHandler = e =>{
        e.preventDefault()
        if (title.current.value&&cost.current.value&&date.current.value)
        {
            sendExpense( {
                variables: {
                    expenseId:parseInt(parentId),
                    item: title.current.value,
                    cost: parseInt(cost.current.value),
                    date: new Date(date.current.value)
                }
            } )
        }
        else
        {
            return <ErrorItem errorStatus={{errorStatus:!title.current.value&&cost.current.value&&date.current.value, setErrorStatus:(val)=>this.errorStatus=val}}/>
        }
    }

    if ( errorStatus ) <ErrorItem errorStatus={ { errorStatus, setErrorStatus, message: error.message } } />
    
    if ( !!alert ){
         setTimeout( () =>{
            modalProps(false)
        },1000)
        return <ErrorItem errorStatus={ { errorStatus: !!alert, setErrorStatus: setAlert, message: alert } } />;
    }
    
    return <ModalWindow modalProps={modalProps} loading={loading}>
            <ModalHeader>Add expense</ModalHeader>
            <Form onSubmit={e=>submitHandler(e)}>
                
                <InputItem>
                    <ExpenseInput type="text" name="title" ref={title}/>
                    <Expenselabel>Title</Expenselabel>
                </InputItem>
                <InputItem>
                    <ExpenseInput type="text" name="cost" ref={cost} />
                    <Expenselabel>cost</Expenselabel>
                </InputItem>
                 <InputItem>
                    <ExpenseInput type="date" name="data" ref={date} />
                    <Expenselabel>buyed at</Expenselabel>
                </InputItem>
                <Submit>send</Submit>
            </Form>
    </ModalWindow>
}

