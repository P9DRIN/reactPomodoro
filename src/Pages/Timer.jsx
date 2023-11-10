
import { useEffect, useState } from 'react'
import { Container, ButtonContainer, CounterContainer } from './style'

export default function Timer(){

    var secondsAmmount = 20 * 60;
    var secondsAmmountPause = 5 * 60;

    const [pause, setPause] = useState(true)
    const [selectValue, setSelectValue] = useState(0)
    const [secondsCount, setSecondsCount] = useState(secondsAmmount)
    const [message, setMessage] = useState('')

    let minutes = Math.floor(secondsCount/60)
    let seconds = secondsCount % 60;
    let timeOutCount = 1000;
    let timePause = 1000000000;

    const list = [
        {id: 5, name: 'Select time'},
        {id: 0, name: 'Default'},
        {id: 1, name: '30 minutes'},
        {id: 2, name: '40 minutes'},
        {id: 3, name: '50 minutes'},
        {id: 4, name: '60 minutes'},
    ]

    useEffect(() => {
        if(pause == false)
        setTimeout(() => {
            setSecondsCount(state => state - 1)
        }, timeOutCount)
        if(pause == true){
            setTimeout(() => {
                setSecondsCount(state => state - 1)
            }, timePause)
        }
        if(secondsCount == -1){
            setPause(true)
            setSecondsCount(secondsAmmountPause + 1)
            setMessage('Time is over!')
            setTimeout(() =>{
            setMessage('')
            }, 10000)
        }
    }, [secondsCount, pause])

    useEffect(() => {
        if(selectValue == 0){
            setSecondsCount(20*60)
            setPause(true)
        }
        if(selectValue == 1){
            setSecondsCount(30*60)
            setPause(true)
        }
        if(selectValue == 2){
            setSecondsCount(40*60)
            setPause(true)
        }
        if(selectValue == 3){
            setSecondsCount(50*60)
            setPause(true)
        }
        if(selectValue == 4){
            setSecondsCount(60*60)
            setPause(true)
        }
    }, [selectValue , setSecondsCount])

    function toReset(){
        
        if(selectValue == 0){
            setSecondsCount(20*60)
        }
        if(selectValue == 1){
            setSecondsCount(30*60)
        }
        if(selectValue == 2){
            setSecondsCount(40*60)
        }
        if(selectValue == 3){
            setSecondsCount(50*60)
        }
        if(selectValue == 4){
            setSecondsCount(60*60)
        }
    }


    function toStart(){
        setPause(false)

    }
    function toPause(){
        setPause(!pause)
        console.log(pause)
    }


    return(
        <>
            <Container>
            <span className='message'>{message}</span>
                <select value={selectValue} onChange={e => setSelectValue(e.target.value, console.log(selectValue))}>
                    {list.map((item, id) => (
                        <option value={item.id} key={item.id}>{item.name}</option>
                    ))}
                </select>
                <CounterContainer>
            
                <span>{String(minutes).padStart(2, '0')}</span>
                <span>:</span>
                <span>{String(seconds).padStart(2, '0')}</span>
                   
                </CounterContainer>


                <ButtonContainer>
                {
                    pause ?
                    <>
                <button onClick={toStart} >Start</button>
                <button onClick={toPause} >Pause</button>
                <button onClick={toReset} >Reset</button>
                    </>
                    :
                    <>
                <button onClick={toStart} >Start</button>
                <button onClick={toPause} >Pause</button>
                <button onClick={toReset} disabled className='disabledButton'>Reset</button>
                    </> 
        }   
                </ButtonContainer>
            </Container>
        </>
    )
}