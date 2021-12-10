


import ExpenseImage from '../ExpenseImage';
import { DeleteButton,  ExpensesListItem, SmallExpensePart } from './style';
import{ Delete, AddBox, ViewList }from '@mui/icons-material';
import { useState } from 'react';
import ExpenseChild from '../ExpenseChild';
import ExpenseItem from '../ExpenseItems';
export function ExpenseListItem ( { data } )
{
    
    const [ modal, setModal ] = useState( false )
    const [ list, setList ] = useState( false )
    const [ id, setId ] = useState( '' )

    return (
        <ExpensesListItem >
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
                <DeleteButton>
                    <Delete color="secondary"/>
                </DeleteButton>
            </SmallExpensePart>
            {
                modal ? <ExpenseChild modalProps={setModal} parentId={id} />:list?<ExpenseItem  modalProps={setList} items={data.items}/>:<></>
            }
        </ExpensesListItem >
    )
}