import{ErrorComponent, ErrorMessage, EscButton} from './style'

export default function ErrorItem({errorStatus}) {
    return <ErrorComponent isActive={ errorStatus.errorStatus } >
        <ErrorMessage  >
            {errorStatus.message}
            <EscButton onClick={()=>errorStatus.setErrorStatus(false)} > x </EscButton>
        </ErrorMessage>
    </ErrorComponent>
}