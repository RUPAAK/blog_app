import {useEffect, useState} from 'react'
import {colors} from '../colors'
import styled from 'styled-components'

const Time=()=>{
    const [hour, sethour] = useState(0)
    const [minute, setminute] = useState(0)
    const [period, setperiod] = useState(0)
    const getDate= async()=>{
        const date= new Date()
        const hour= date.getHours()
        const minute= date.getMinutes()
        const realHour= (hour+1)%12+1;
        const period= hour>12 ? 'PM' : 'AM';
        sethour(realHour)
        setminute(minute)
        setperiod(period)
    }
    useEffect(()=>{
        getDate()
    }, [])
    const Data= styled.span`
        font-size: ${props=> props.size};
        padding-right: 0.2rem;
        color: ${props=> props.color};
    `
    return(
        <>
            <div style={{display: 'flex', alignItems: 'center'}}>
            <Data size="1.5rem" color={colors.icon_color}>{hour}: {minute}</Data>
            <Data size="0.8rem" color={colors.primary_text}>({period})</Data>
            </div>
        </>
    )
}

export default Time