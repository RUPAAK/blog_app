import styled from 'styled-components'
import Navbar from '../Navbar'
import {colors} from '../../colors'


const LayoutContainer= styled.div`
width: 100%;
min-height: 100vh;
background: ${colors.background};
padding: 0 2.5rem;
`   
const Layout= ({children})=>{

    return(
        <LayoutContainer>
            <Navbar/>
            {children}
        </LayoutContainer>
    )
}

export default Layout