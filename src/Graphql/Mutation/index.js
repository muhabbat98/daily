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
        id
        name
        image
        items{
          id
          item
          cost 
          date
        }
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
export const ADD_USER = gql`
  mutation AddUser($username:String, $password:String){
    addUser(username:$username, password:$password)
  }
`
export const DELETE_EXPENSE = gql`
  mutation DeleteExpense($id:Int){
    deleteExpense(expenseId:$id){
      id
    }
  }
`
export const IS_USER = gql`
  mutation IsUser ($username:String $password:String){
    isUser(username:$username, password:$password)
  }
`