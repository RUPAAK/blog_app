import React, { useState, useEffect } from 'react'
import Layout from '../components/GlobalComponents/Layout'
import { Link } from 'react-router-dom'
import { colors } from '../colors'
import { fonts } from '../fonts'
import Text from '../components/Text'
import styled from 'styled-components'
import Button from '../components/Button'
import {Input, Img} from '../components/InputImg'
import User from '../assests/icons/User.png'
import Email from '../assests/icons/Email.png'
import Password from '../assests/icons/Password.png'
import {useDispatch, useSelector} from 'react-redux'
import {userRegisterAction} from '../actions/userActions'

const Span = styled.div`
width: 100%;
position: relative;
`
const Div = styled.div`
width: 40%;
margin: 0 auto;
padding: 2rem 0;
background: ${colors.secondary_background};
display: flex;
align-items: center;
flex-direction: column;
border-radius: 32px;
`
const InputContiner = styled.div`
display: flex;
align-items: center;
width: 400px;
position: relative;
overflow: hidden;
border-radius: 12px;
`

const RegisterScreen = () => {
    const dispatch = useDispatch()
    const userRegister= useSelector(state=> state.userRegister)
    const {loading, userDetals, error}= userRegister
    
    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [confirmpassword, setconfirmpassword] = useState('')

    const registerHandler=()=>{
        if(password == confirmpassword){
            dispatch(userRegisterAction(username, email, password))
            setusername('')
            setemail('')
            setpassword('')
            setconfirmpassword('')
        }else{
            alert('Password not matching')
        }
    }
    return (
        <Layout>
            <hr style={{ height: '0.1px', border: 'none', background: 'grey' }} />
            <div >
                <div style={{ display: 'flex', padding: '1.8rem 0 3rem 0', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Span>
                            <Text size="1.2rem" margin='0 1rem 0 0' weight={fonts.medium} >Register</Text>
                            <hr style={{ height: '0.2rem', marginTop: '0.5rem', borderRadius: '50px', border: 'none', outline: 'none', background: '#38B9F0' }} />
                        </Span>

                    </div>
                    <Link to="/login"><Button radius="32px" size="1rem" width="8rem" padding="0.5rem 0.4rem" weight={fonts.medium}>Login</Button></Link>
                </div>
                <Div>
                    <InputContiner>
                        <Img src={User} alt="user" />
                        <Input onChange={(e)=> setusername(e.target.value)} value={username} placeholder="Username" type="text" />
                    </InputContiner>
                    <InputContiner>
                        <Img src={Email} alt="email" />
                        <Input onChange={(e)=> setemail(e.target.value)} value={email} placeholder="Email Address" />
                    </InputContiner>
                    <InputContiner>
                        <Img src={Password} alt="assword" />
                        <Input onChange={(e)=> setpassword(e.target.value)} value={password} type="password" placeholder="Enter Password" />
                    </InputContiner>
                    <InputContiner>
                        <Img src={Password} alt="assword" />
                        <Input onChange={(e)=> setconfirmpassword(e.target.value)} value={confirmpassword} type="password" placeholder="Confirm Password" />
                    </InputContiner>
                    <div style={{ margin: "1.5rem 0 0 0" }}>
                        <Button onClick={registerHandler} size="1rem" weight={fonts.medium} padding="0.5rem 0.8rem">Register</Button>
                    </div>
                </Div>
            </div>
        </Layout>
    )
}

export default RegisterScreen