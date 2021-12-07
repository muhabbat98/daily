import { gql} from '@apollo/client';

export const SEND_IMAGE = gql`
  mutation UploadImage($file:Upload) {
    imageUpload(file:$file){
        filename,
        id
    }
  }
`;
export const SEND_EXPENSE = gql`
  mutation AddExpense($name:String, $imageId:Int){
    addExpense(name:$name, image:$imageId){
      image
      name
      id
    }
  }
`;

export const CREATE_EXPENSE_ITEM = gql`
  mutation ExpenseItem($expenseId:Int, $item:String, $cost:Int, $date:String){
    addExpenseItem( expenseId:$expenseId item:$item,cost:$cost, date:$date){
      id
      item
      cost, 
      date
    }
  }
`