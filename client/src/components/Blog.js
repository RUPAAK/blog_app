import styled from 'styled-components'
import Text from './Text'
import Button from './Button'
import {Link} from 'react-router-dom'
import { fonts } from '../fonts'
import { colors } from '../colors'
import Emoji from '../assests/icons/Emoji.png'
import Comment from '../assests/icons/Comment.png'

const Card = styled.span`
width: 100%;
background: ${colors.secondary_background};
border-radius: 12px;
`
const Icon = styled.span`
display: flex;
height: auto;
align-items: center;
justify-content: center;
margin-right: 0.5rem;
`
const Blog = ({blog}) => {

    const trim=(text, n)=>{
        return text?.length>n? text.substr(0, n-1)+ '...': text
    }
    return (
        <Card>
            <Text padding="0.6rem 1rem" weight={fonts.medium} size="1.1rem">{blog.title}</Text>
            <Text width="95%" weight={fonts.medium} padding="0.4rem 1rem" size="0.9rem">{trim(`${blog.sub_description}`, 87)}</Text>
            <div style={{
                width: '100%', padding: '0.4rem 1rem', display: 'flex', justifyContent: 'space-between'
            }}>
                <Link to={`/blog/${blog._id}`}><Button padding="0.4rem 0.8rem">Read more...</Button></Link>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Icon>
                        <Text padding="0 0 0 0.1rem" size="1.1rem">{blog.likes}</Text>
                        <img style={{ width: '26px', height: '20px' }} src={Emoji} alt="icon" />
                    </Icon>
                    <Icon>
                        <Text padding="0 0 0 0.1rem" size="1.1rem">12</Text>
                        <img style={{ width: '26px', height: '20px' }} src={Comment} alt="icon" />
                    </Icon>
                </div>
            </div>
        </Card>
    )
}

export default Blog