import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Logo from './Logo'
import Time from './Time'

const Container= styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: space-between;
padding: 0.5rem 0;
`

const Navbar=()=>{

    return(
        <>
            <Container>
                <Link to="/"><Logo/></Link>
                <Time/>
            </Container>
        </>
    )
}

export default Navbar