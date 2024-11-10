import React from 'react'
import Container from '../Container/Container'

const ErrorComp = ({errMsg}) => {

    return (
        <Container>
            <h3 className='text-4xl font-extrabold text-center h-[100vh]'>{errMsg}</h3>
        </Container>
    )
}

export default ErrorComp;