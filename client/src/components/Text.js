import styled from 'styled-components'
import {colors} from '../colors'

const Text= styled.p`
    width: ${props=> props.width || '100%'};
    color: ${colors.primary_text};
    font-size: ${props=> props.size || '0.5rem'};
    padding: ${props=> props.padding || '0'};
    margin: ${props=> props.margin || '0'};
    font-weight: ${props=> props.weight || '0'};
    line-height: ${props=> props.line || ''};
    letter-spacing: ${props=> props.spacing || ''};
`
export default Text