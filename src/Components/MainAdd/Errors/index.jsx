import React from 'react'
import { ErrorComponent, ErrorMessage, EscButton } from './style'

export default function ErrorItem({errorStatus}) {
    return         <ErrorComponent isActive={ errorStatus.errorStatus } >
        <ErrorMessage tabIndex={-1} onBlur={()=>errorStatus.setErrorStatus(false)} >
            {errorStatus.message}
            <EscButton onClick={()=>errorStatus.setErrorStatus(false)} > x </EscButton>
        </ErrorMessage>
    </ErrorComponent> }