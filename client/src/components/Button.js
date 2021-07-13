import {colors} from '../colors'
import {fonts} from '../fonts'
import styled from 'styled-components'

const Button= styled.button`
    width: ${props=> props.width || 'auto'};
    background: ${colors.sub_secondary};
    padding: ${props=> props.padding};
    margin: ${props=> props.margin};
    font-size: ${props=> props.size};
    color: ${colors.primary_text};
    font-weight: ${fonts.bold};
    border-radius: ${props=> props.radius || '20px'};
    border: none;
    outline: none;
`

export default Button