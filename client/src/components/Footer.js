import styled  from "styled-components"
import {colors} from '../colors'
const Mainfooter= styled.footer`
padding: 1rem 0 0 0;
color: ${colors.primary_text};
display: flex;
justify-content: flex-end;
align-items: center
`
const Footer=()=>{

    return(
        <Mainfooter>@rupaak</Mainfooter>
    )
}

export default Footer