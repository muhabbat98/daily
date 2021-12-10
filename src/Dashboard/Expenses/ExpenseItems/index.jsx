import ModalWindow from "../../../Components/MainAdd/Modal";
import { ModalHeader} from "../ExpenseChild/style";
import { ExpensesListItem, SmallExpensePart } from "../ExpenseListItem/style";
import { ExpensesList } from "../style";
export default function ExpenseItem ( { modalProps, items } ){

    return (
        <ModalWindow modalProps={modalProps} loading={false}>
              <ModalHeader>Expenses</ModalHeader>
                    {
                        items  ? items.map(u=><ExpensesList key={u.id}>
                            <ExpensesListItem>
                                <SmallExpensePart>
                                    {u.item}
                                </SmallExpensePart>
                                <SmallExpensePart style={{flexDirection:'column', alignItems:'flex-end'}}>
                                    <div>
                                        {u.cost}
                                    </div>
                                    <div>
                                        {u.date}
                                    </div>
                                </SmallExpensePart>
                            </ExpensesListItem>
                        </ExpensesList>):<></>
                    }
        </ModalWindow>
    )
}