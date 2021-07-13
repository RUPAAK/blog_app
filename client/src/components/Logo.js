import styled from 'styled-components'
import Horse from '../assests/icons/Horse.png'
import {colors} from '../colors'
import {fonts} from '../fonts'
import Text from './Text' 

const Logo=()=>{
    const Logos= styled.span`
        width: auto;
        display: flex;
        align-items: center;
    `
    return(
        <Logos>
            <img style={{width: '50px'}} src={Horse} alt="logo" />
            <Text color={colors.primary_text} size= '1.5rem' weight={fonts.medium} margin="0 0.2rem">BLOGGED</Text>
        </Logos>
    )
}

export default Logo
