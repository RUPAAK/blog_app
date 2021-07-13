import styled from 'styled-components'
import {colors} from '../colors'
import Logo from './Logo'
import Time from './Time'

const Navbar=()=>{
    const Container= styled.div`
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        padding: 0.4rem 0;
    `
    return(
        <>
            <Container>
                <Logo/>
                <Time/>
            </Container>
        </>
    )
}

export default Navbar