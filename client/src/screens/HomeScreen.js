import React, { useState, useEffect } from 'react'
import Layout from '../components/GlobalComponents/Layout'
import Navbar from '../components/Navbar.js'
import Emoji from '../assests/icons/Emoji.png'
import Comment from '../assests/icons/Comment.png'
import { colors } from '../colors'
import { fonts } from '../fonts'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'
import Text from '../components/Text'
import styled from 'styled-components'
import Button from '../components/Button'

const HomeScreen = () => {
    const Span = styled.div`
        width: 100%;
        position: relative;
    `
    const Search = styled.input`
        background: ${colors.sub_secondary};
        border: none;
        outline: none;
        padding: 0.6rem 0.4rem 0.6rem 0.7rem;
        margin-left: 1rem;
        color: ${colors.primary_text};
        border-radius: 32px;
        font-weight: bold;

        ::placeholder,
        ::-webkit-input-placeholder{
            color: ${colors.primary_text};
            font-size: 1rem;
    `
    const CardContainer = styled.div`
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 1.5rem;
        grid-row-gap: 1.8rem;
    `
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

    return (
        <Layout>
            <Navbar />
            <hr style={{ height: '0.1px', border: 'none', background: 'grey' }} />
            <div style={{ width: '100%' }}>
                <div style={{ display: 'flex', padding: '1.8rem 0 3rem 0', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Span>
                            <Text size="1.2rem" margin='0 1rem 0 0' weight={fonts.medium} >All Blogs</Text>
                            <hr style={{ height: '0.2rem', marginTop: '0.5rem', borderRadius: '50px', border: 'none', outline: 'none', background: '#38B9F0' }} />
                        </Span>
                        <Span>
                            <Search placeholder="Search" />
                        </Span>

                    </div>
                    <Button radius="32px" size="1rem" width="11.5rem" padding="0.5rem 0.4rem" weight={fonts.medium}>Login / Register</Button>
                </div>
                <CardContainer>
                    <Card>
                        <Text padding="0.6rem 1rem" weight={fonts.medium} size="1.1rem">This is first post</Text>
                        <Text width="95%" weight={fonts.medium} padding="0.4rem 1rem" size="0.9rem">This is the second letter second letter that i have types as a progeammer. An that is a complete fa....</Text>
                        <div style={{
                            width: '100%', padding: '0.4rem 1rem', display: 'flex', justifyContent: 'space-between'
                        }}>
                            <Button padding="0.4rem 0.8rem">Read more...</Button>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Icon>
                                    <Text padding="0 0 0 0.1rem" size="1.1rem">12</Text>
                                    <img style={{ width: '26px', height: '20px' }} src={Emoji} alt="icon" />
                                </Icon>
                                <Icon>
                                    <Text padding="0 0 0 0.1rem" size="1.1rem">12</Text>
                                    <img style={{ width: '26px', height: '20px' }} src={Comment} alt="icon" />
                                </Icon>
                            </div>
                        </div>
                    </Card>
                </CardContainer>
            </div>
            <Footer/>
        </Layout>
    )
}
export default HomeScreen
