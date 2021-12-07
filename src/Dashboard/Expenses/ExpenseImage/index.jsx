import { useState } from "react";
import Image from '../../../assets/expense.png'
export default function ExpenseImage ({url}){

    const [image, setImage] = useState(url)

    return <img src={ image } onError={(e)=>setImage(Image)} alt="expenseImage" />
}