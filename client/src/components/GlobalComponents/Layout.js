import styled from 'styled-components'
import {colors} from '../../colors'

const Layout= ({children})=>{
    const LayoutContainer= styled.div`
        width: 100%;
        height: auto;
        background: ${colors.background};
        padding: 0 2.5rem;
    `   
    return(
        <LayoutContainer>
            {children}
        </LayoutContainer>
    )
}

export default Layout