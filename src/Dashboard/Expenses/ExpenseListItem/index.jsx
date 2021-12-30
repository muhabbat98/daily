
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Delete, AddBox, ViewList } from '@mui/icons-material';
import { DELETE_EXPENSE } from '../../../Graphql/Mutation';
import ExpenseImage from '../ExpenseImage';
import { DeleteButton,  ExpensesListItem, SmallExpensePart } from './style';
import ExpenseChild from '../ExpenseChild';
import ExpenseItem from '../ExpenseItems';
import { Loader } from '../../../style';

export function ExpenseListItem ( { data } ){
    
    const [ modal, setModal ] = useState( false )
    const [ list, setList ] = useState( false )
    const [ id, setId ] = useState( '' )
    const [ deleteExpense, {  loading } ] = useMutation( DELETE_EXPENSE, {
        optimisticResponse: ( arg ) =>( {
                deleteExpense: {
                    id: arg.id,
                    __typename:'Expense'
                }
            }
        ),
        update: ( cache, deletedExpense ) =>
        {
            let delEx = cache.identify( deletedExpense.data.deleteExpense )

            cache.modify( {
                fields: {
                    expenses: ( ex ) => ex.filter(u=>u['__ref']!==delEx)
                }
            } )
            cache.evict({id:delEx})
        }
    })

    const deleteHandler = ( id ) =>{
        deleteExpense( {
            variables: {
                id
            }
        })
    }
    return (
        <ExpensesListItem >
            {
                loading?<Loader/>:<></>
            }
            <SmallExpensePart>
                <ExpenseImage url={data.image?"https://daily-uz.herokuapp.com/" + data.image:"../../assets/expense.png"}></ExpenseImage>
                <span>{ data.name }</span>
            </SmallExpensePart>
            <SmallExpensePart>
                <DeleteButton onClick={()=>{setList(true); setId(data.id)}}>
                    <ViewList sx={ { color: 'blueviolet' } }/>
                </DeleteButton>
                <DeleteButton onClick={()=>{setModal(true); setId(data.id)}}>
                    <AddBox sx={ { color: 'blueviolet' } } />
                </DeleteButton>
                <DeleteButton onClick={()=>deleteHandler(data.id)}>
                    <Delete color="secondary"/>
                </DeleteButton>
            </SmallExpensePart>
            {
                modal ? <ExpenseChild modalProps={setModal} parentId={id} />:list?<ExpenseItem  modalProps={setList} items={data.items}/>:<></>
            }
        </ExpensesListItem >
    )
}