import React, { useState, useEffect } from 'react'
import Layout from '../components/GlobalComponents/Layout'
import Navbar from '../components/Navbar.js'
import { Link } from 'react-router-dom'
import { colors } from '../colors'
import { fonts } from '../fonts'
import {Input, Img} from '../components/InputImg'
import Text from '../components/Text'
import styled from 'styled-components'
import Button from '../components/Button'
import Email from '../assests/icons/Email.png'
import Password from '../assests/icons/Password.png'


const RegisterScreen = () => {
    const Span = styled.div`
        width: 100%;
        position: relative;
    `
    const Div= styled.div`
        width: 40%;
        margin: 0 auto;
        padding: 2rem 0;
        background: ${colors.secondary_background};
        display: flex;
        align-items: center;
        flex-direction: column;
        border-radius: 32px;
    `
    const InputContiner= styled.div`
        display: flex;
        align-items: center;
        width: 400px;
        position: relative;
        overflow: hidden;
        border-radius: 12px;
    `

    return (
        <Layout>
            <hr style={{ height: '0.1px', border: 'none', background: 'grey' }} />
            <div >
                <div style={{ display: 'flex', padding: '1.8rem 0 3rem 0', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Span>
                            <Text size="1.2rem" margin='0 1rem 0 0' weight={fonts.medium} >Login</Text>
                            <hr style={{ height: '0.2rem', marginTop: '0.5rem', borderRadius: '50px', border: 'none', outline: 'none', background: '#38B9F0' }} />
                        </Span>

                    </div>
                    <Link to="/register"><Button radius="32px" size="1rem" width="8rem" padding="0.5rem 0.4rem" weight={fonts.medium}>Register</Button></Link>
                </div>
                <Div>
                    <InputContiner>
                        <Img src={Email} alt="email" />
                        <Input placeholder="Email Address" />
                    </InputContiner>
                    <InputContiner>
                        <Img src={Password} alt="assword" />
                        <Input type="password"  placeholder="Enter Password"/>
                    </InputContiner>

                    <div style={{margin: "1.5rem 0 0 0"}}>
                        <Button size="1rem" weight= {fonts.medium} padding="0.5rem 0.8rem">Login</Button>
                    </div>
                </Div>
            </div>
        </Layout>
    )
}

export default RegisterScreen