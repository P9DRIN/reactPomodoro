import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;

    span {
        font-size: 64px;
        font-family: 'Roboto', sans-serif;
    }
    
`
export const CounterContainer = styled.div`
    
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    button{
        width: 300px;
        height: 50px;
    }
`