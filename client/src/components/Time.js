import {useEffect, useState} from 'react'
import {colors} from '../colors'
import styled from 'styled-components'
import { fonts } from '../fonts'

const Time=()=>{
    const [hour, sethour] = useState(0)
    const [minute, setminute] = useState(0)
    const [period, setperiod] = useState(0)
    const getDate= async()=>{
        const date= new Date()
        let hour= date.getHours() > 12? date.getHours()-12 : date.getHours();
        hour= hour< 10? "0"+ hour : hour;
        const minute= date.getMinutes()
        const period= date.getHours()>12 ? 'PM' : 'AM';
        sethour(hour)
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
        font-weight: ${props=> props.weight || ''};
    `
    return(
        <>
            <div style={{display: 'flex', alignItems: 'center'}}>
            <Data size="1.5rem" color={colors.icon_color}>{hour}:{minute}</Data>
            <Data size="0.7rem" weight={fonts.medium} color={colors.primary_text}>({period})</Data>
            </div>
        </>
    )
}

export default Time