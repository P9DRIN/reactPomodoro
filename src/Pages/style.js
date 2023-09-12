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
        color: #fff;
        
    }
    & .message{
        font-size: 32px;
        margin-bottom: 2%;
        background-color: #2b2b2b;
    }
    
`
export const CounterContainer = styled.div`
    background-color: #2b2b2b;
    border-radius: 5px;
    height: max-content;
    width: max-content;
    margin: 15px;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    button{
        width: 300px;
        height: 50px;
        border: none;
        color: #fff;
        background-color: #2b2b2b;
        border-radius: 5px;
    }
    button:hover{
        border: 5px solid #dedede;
        
    }
`