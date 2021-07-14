import styled from 'styled-components'
import { colors } from '../colors';
import { fonts } from '../fonts'

const Input = styled.input`
    width: 100%;
    color: ${colors.primary_text};
    padding: 0.6rem 0.5rem 0.6rem 3.4rem;
    border: none;
    outline: none;
    margin: 0.5rem 0;
    border-radius: 12px;
    background: ${colors.sub_secondary};
    font-size: 1rem;;
    font-weight: ${fonts.bold};
    letter-spacing: 0.1rem;

    ::placeholder,
    ::-webkit-input-placeholder{
        color: ${colors.primary_text};
        font-size: 1rem;
        font-weight: ${fonts.bold};
`
const Img = styled.img`
position: absolute;
left: 8px;
width: 39px;
padding: 0.39rem 0.4rem;
border-radius: 12px;
`

export {Input, Img}