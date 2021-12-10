import { Loader } from '../../../style';
import {Modal, Window, Esc} from './style'
export default function ModalWindow ( { modalProps, loading, children } )
{
    return <Modal>        
        {
            loading ? <Loader/>: <Window>
                <Esc onClick={ () => modalProps( false ) }>X</Esc>
                {children}
        </Window>
        }
    </Modal>
}