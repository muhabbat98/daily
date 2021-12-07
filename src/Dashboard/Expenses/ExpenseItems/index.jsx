import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import ErrorItem from "../../../Components/MainAdd/Errors";
import { EXPENSE_ITEMS } from "../../../Graphql/Query";
import { Modal,Loader } from "../../../style";
import { Esc, ModalHeader, Window, } from "../ExpenseChild/style";
import { ExpensesListItem, SmallExpensePart } from "../ExpenseListItem/style";
import { ExpensesList } from "../style";
import moment from 'moment'
export default function ExpenseItem ( { modalProps, parentId } ){
    
    const [ errorStatus, setErrorStatus ] = useState( false )
    console.log("id",parentId)
    const { data, loading, error } = useQuery( EXPENSE_ITEMS, {
        variables: {
            id:parseInt(parentId)
        }
    } )

    
    useEffect( () =>
    {
        if(error) setErrorStatus(true)
    }, [ error ] )

    if ( errorStatus ) <ErrorItem errorStatus={ { errorStatus, setErrorStatus, message: error.message } } />
    
 
    
    return <Modal>        
        {
            loading ? <Loader/>: <Window>
            <Esc onClick={ () => modalProps( false ) }>X</Esc>
            <ModalHeader>Expenses</ModalHeader>
                {
                    data && data.expenseItems ? data.expenseItems.map(u=><ExpensesList key={u.id}>
                        <ExpensesListItem>
                            <SmallExpensePart>
                                {u.item}
                            </SmallExpensePart>
                            <SmallExpensePart>
                                <div>
                                    {u.cost}
                                </div>
                                <div>
                                    {u.date}
                                    { new Date(u.date).toString()}
                                </div>
                            </SmallExpensePart>
                        </ExpensesListItem>
                    </ExpensesList>):<></>
                }
        </Window>
        }
    </Modal>
}