import { gql} from '@apollo/client';

export const EXPENSES = gql`
query Expenses{
    expenses{
      id
      name
      image
    }
} 
`;

export const EXPENSE_ITEMS =  gql`
  query ExpenseList ($id:Int){
    expenseItems(id:$id){
      id 
      item
      cost
      date
    }
  }
`