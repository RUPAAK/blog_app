import styled from 'styled-components'
import Text from './Text'
import { colors } from '../colors'
import { fonts } from '../fonts'

const IndividualComment = () => {
    const Span = styled.div`
    width: auto;
    position: relative;
    `
    const CommentSection = styled.div`
    width: 400px;
    height: auto;
    background: red;
    margin: 1rem 0;
    border-radius: 12px;
    background: ${colors.secondary_background};
    `
    return (
        <>
            <Span>
                <Text size="1.2rem" margin='0 1rem 0 0' weight={fonts.medium} >Rakesh Sharma</Text>
                <hr style={{ height: '0.2rem', width: '13rem', marginTop: '0.5rem', borderRadius: '50px', border: 'none', outline: 'none', background: '#38B9F0' }} />
            </Span>
            <CommentSection>
                <Text padding="0.8rem 1rem" size="0.9rem" spacing="0.1rem" weight={fonts.regular}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Text>
            </CommentSection>
        </>
    )
}

export default IndividualComment