
import { ModalHeader } from "../../Dashboard/Expenses/ExpenseChild/style";
import { useAuth } from "../../store/auth-contex";
import ModalWindow from "../MainAdd/Modal";
import { Button } from "./style";
export default function ProofComponent ({modalProps}){
    const [ setState ] = useAuth( false )
    
    return( <ModalWindow modalProps={ modalProps} loading={ false } >
        <ModalHeader>Do you want exit ?</ModalHeader>
        <Button onClick={ () => { setState( {} ); modalProps(false ) }}>Yes</Button>
    </ModalWindow>) 
}