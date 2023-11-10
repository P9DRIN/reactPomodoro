import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background: linear-gradient(300deg,#ffb439,#2e92c6,#073596,#39bbff,#ffb439);
    background-size: 300% 300%;
    animation: gradient-animation 60s ease infinite;

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
    & select{
        width: 10vw;
    }


    @keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
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
    & .disabledButton{
        cursor: not-allowed;
    }
`