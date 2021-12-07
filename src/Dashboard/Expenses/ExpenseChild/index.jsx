import { useMutation } from "@apollo/client";
import { useEffect, useRef, useState } from "react";
import ErrorItem from "../../../Components/MainAdd/Errors";
import { CREATE_EXPENSE_ITEM } from "../../../Graphql/Mutation";
import { Modal, Form, Submit, Loader } from "../../../style";
import { Esc, ExpenseInput, Expenselabel, ModalHeader, Window, InputItem } from "./style";
export default function ExpenseChild ( { modalProps, parentId } ){
    
    const [ errorStatus, setErrorStatus ] = useState( false )
    const [ alert, setAlert ] = useState( '' )
    
    const [ sendExpense, { data, loading, error } ] = useMutation( CREATE_EXPENSE_ITEM )

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
        sendExpense( {
            variables: {
                expenseId:parseInt(parentId),
                item: title.current.value,
                cost: parseInt(cost.current.value),
                date: new Date(date.current.value)
            }
        } )
    }

    if ( errorStatus ) <ErrorItem errorStatus={ { errorStatus, setErrorStatus, message: error.message } } />
    
    if ( !!alert ){
         setTimeout( () =>{
            modalProps(false)
        },1000)
        return <ErrorItem errorStatus={ { errorStatus: !!alert, setErrorStatus: setAlert, message: alert } } />;
    }
    
    return <Modal>        
        {
            loading ? <Loader/>: <Window>
            <Esc onClick={ () => modalProps( false ) }>X</Esc>
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
        </Window>
        }
    </Modal>
}