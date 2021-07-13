import React, {useState, useEffect} from 'react'
import Layout from '../components/GlobalComponents/Layout'
import Navbar from '../components/Navbar.js'
import {colors} from '../colors'
import {fonts} from '../fonts'
import Text from '../components/Text'
import styled from 'styled-components'
import Button from '../components/Button'

const HomeScreen=()=>{
    const Span= styled.div`
        width: 100%;
        position: relative;
    `
    const Search= styled.input`
        background: ${colors.sub_secondary};
        border: none;
        outline: none;
        padding: 0.6rem 0.4rem 0.6rem 0.7rem;
        color: ${colors.primary_text};
        border-radius: 32px;
        font-weight: bold;
        ::placeholder,
        ::-webkit-input-placeholder{
            color: ${colors.primary_text};
            font-size: 1rem;
    `
    return(
        <Layout>
            <Navbar/>
            <div style={{width: '100%'}}>
                <div style={{display: 'flex', padding: '1.5rem 0', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <Text size="1.2rem" margin='0 1rem 0 0' weight={fonts.medium} >All Blogs</Text>
                        <Span>
                            <Search placeholder="Search" />
                        </Span>
                    </div>
                    <Button radius="32px" size="1rem" width="11.5rem" padding="0.6rem 0.4rem" weight={fonts.medium}>Login / Register</Button>
                </div>
            </div>
        </Layout>
    )
}
export default HomeScreen
