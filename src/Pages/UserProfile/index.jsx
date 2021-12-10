import { useState } from 'react';
import AddUser from './AddUser'
export default function UserProfile (){
     const [modal, setModal] = useState(true)
    return <>
        User
        {modal?<AddUser modalProps={setModal }/>:<></>}
    </>
}