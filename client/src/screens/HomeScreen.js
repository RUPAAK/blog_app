import React, { useState, useEffect } from 'react'
import Layout from '../components/GlobalComponents/Layout'
import Blog from '../components/Blog'
import { colors } from '../colors'
import { fonts } from '../fonts'
import { Link } from 'react-router-dom'
import Text from '../components/Text'
import styled from 'styled-components'
import Button from '../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { allBlogsAction } from '../actions/blogActions'

const HomeScreen = () => {
    const dispatch = useDispatch()
    const allBlogs = useSelector(state => state.allBlogs)
    const { loading, blogs, error } = allBlogs

    useEffect(() => {
        dispatch(allBlogsAction())
    }, [dispatch])

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



    return (
        <Layout>
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
                    <Link to="/register"><Button radius="32px" size="1rem" width="11.5rem" padding="0.5rem 0.4rem" weight={fonts.medium}>Login / Register</Button></Link>
                </div>
                <CardContainer>
                    {blogs?.map((blog, index)  => <Blog key={index} blog={blog} />)}
                </CardContainer>
            </div>
        </Layout>
    )
} 
export default HomeScreen
