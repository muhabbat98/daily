import { useMutation } from '@apollo/client';
import { useEffect, useRef,useState } from 'react';
import ModalWindow from '../../../Components/MainAdd/Modal'
import { ExpenseInput, Expenselabel, InputItem, ModalHeader } from '../../../Dashboard/Expenses/ExpenseChild/style';
import { Form, Submit } from '../../../style';
import { ADD_USER } from '../../../Graphql/Mutation'
import ErrorItem from '../../../Components/MainAdd/Errors'

export default function AddUser ( { modalProps } ){
    const [ errorStatus, setErrorStatus ] = useState( false )
    const [ addUser, { data, loading } ] = useMutation( ADD_USER)
    
    const [alert, setAlert] = useState('')
    const username = useRef( '' )
    const password = useRef( '' )
   
  
    useEffect( () =>{   
        if(data) setAlert(data.addUser.username+' welcome to our web page')
    },[data])

    const submitHandler = (e) =>
    {
        e.preventDefault()
        if ( username.current.value && password.current.value )
        {
            addUser( {
                variables: {
                    username: username.current.value,
                    password:password.current.value
                }
            })
        }
        else
        {
            setAlert("Please cover required field")
        }
        
    }
 
    
    if ( !!alert ){
         setTimeout( () =>{
            modalProps(false)
        },1000)
        return <ErrorItem errorStatus={ { errorStatus: !!alert, setErrorStatus: setAlert, message: alert } } />;
    }
    return <ModalWindow modalProps={modalProps } loading={loading}>
        <ModalHeader>Add user</ModalHeader>
        <Form onSubmit={e=>submitHandler(e)}>
            <InputItem>
                <ExpenseInput ref={username} />
                <Expenselabel>Username</Expenselabel>
            </InputItem>
            <InputItem>
                <ExpenseInput ref={password} />
                <Expenselabel>Password</Expenselabel>
            </InputItem>
            <Submit type='submit'>add user</Submit>
        </Form>
    </ModalWindow>
}