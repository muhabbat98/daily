import { useMutation } from '@apollo/client';
import { useEffect, useRef,useState } from 'react';
import ModalWindow from '../../../Components/MainAdd/Modal'
import { ExpenseInput, Expenselabel, InputItem, ModalHeader } from '../../../Dashboard/Expenses/ExpenseChild/style';
import { Form, Submit } from '../../../style';
import { ADD_USER, IS_USER } from '../../../Graphql/Mutation'
import ErrorItem from '../../../Components/MainAdd/Errors'
import { useAuth } from '../../../store/auth-contex';
import { ChangeButton } from './style';

export default function AddUser ( { modalProps } ){
    const [ addUser, { data, loading, error } ] = useMutation( ADD_USER, {
        errorPolicy:"all"
    } )
    const [ isUser, { data:exUser, loading:exLoading, error:exError } ] = useMutation( IS_USER, {
        errorPolicy:"all"
    })
    
    const [addUserState, setAddUser] = useState(true)
    const [ alert, setAlert ] = useState( '' )
    const [errorState, setErrorState] = useState(false)
    const username = useRef( '' )
    const password = useRef( '' )
    const [setAuthState] = useAuth(false)
  
    useEffect( () =>{   
        if ( data?.addUser ){
            setAlert( data.addUser.username + ' welcome to our web page' );
            setAuthState( { token: data.addUser.token, username: data.addUser.username } )
            modalProps( false );
            
        }
        if ( exUser?.isUser ){
            
            setAlert( exUser.isUser.username + ' welcome to our web page' );
            setAuthState({token:exUser.isUser.token, username:exUser.isUser.username})

            modalProps( false );
        }
        else if(error||exError) setErrorState(true)
    },[data, error, exUser,exError, setAuthState, modalProps])

    const submitHandler = (e) =>
    {
        e.preventDefault()
        if ( username.current.value && password.current.value && addUserState )
        {
            addUser( {
                variables: {
                    username: username.current.value,
                    password:password.current.value
                }
            })
        }
        else if ( username.current.value && password.current.value && !addUserState )
        {
            isUser( {
                variables: {
                    username: username.current.value,
                    password: password.current.value
                }
            })
        }
        else
        {
            setAlert("Please fill required field")
        }
        
    }
   
    const loginHandler = (e) =>
    {
        e.preventDefault()
        setAddUser(prev=>!prev)
    }
    return <ModalWindow modalProps={modalProps } loading={loading||exLoading}>
        { addUserState?<ModalHeader>Sign up</ModalHeader>:<ModalHeader>Sign in</ModalHeader> }
        <Form onSubmit={submitHandler}>
            <InputItem>
                <ExpenseInput ref={username} />
                <Expenselabel>Username</Expenselabel>
            </InputItem>
            <InputItem>
                <ExpenseInput ref={password} />
                <Expenselabel>Password</Expenselabel>
            </InputItem>
            <Submit type='submit'>{addUserState?'add me':"sign in" }</Submit>
            <ChangeButton onClick={ loginHandler }>{addUserState?'or sign in':"or sign up" }</ChangeButton>
        </Form>
        {
            errorState?<ErrorItem errorStatus={{errorStatus:errorState, setErrorStatus:setErrorState, message:error?.message||exError?.message}}/> :<></>
        }
        {
            !!alert ? <ErrorItem errorStatus={ { errorStatus: !!alert, setErrorStatus: setAlert, message: alert } } /> :<></>
        }
    </ModalWindow>
}