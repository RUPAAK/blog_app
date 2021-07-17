import React, { useState, useEffect } from 'react'
import Layout from '../components/GlobalComponents/Layout'
import Navbar from '../components/Navbar.js'
import { Link } from 'react-router-dom'
import Emoji from '../assests/icons/Emoji.png'
import Comment from '../assests/icons/Comment.png'
import { colors } from '../colors'
import { fonts } from '../fonts'
import Text from '../components/Text'
import styled from 'styled-components'
import Button from '../components/Button'
import Footer from '../components/Footer'
import IndividualComment from '../components/IndividualComment'
import { useDispatch, useSelector } from 'react-redux'
import { blogDetailAction } from '../actions/blogActions'
import axios from 'axios'

const BlogScreen = ({ match }) => {
    const blogId = match.params.id
    const dispatch = useDispatch()
    const [blog, setblog] = useState([])
    const [likes, setlikes] = useState(0)

    useEffect(() => {
        async function getBlog(){
            const response= await axios.get(`http://localhost:5000/api/blog/${blogId}`)
            setblog(response.data)
            setlikes(response.data.likes)
        }
        getBlog()
    }, [blogId])

    const blogDetails = useSelector(state => state.blogDetails)


    const likeAdd = () => {
        async function addLike() {
            const response = await axios.put(`http://localhost:5000/api/blog/${blogId}/like`)
            setlikes(response.data.likes)
        }
        addLike()
    }

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
    const TextArea = styled.textarea`
        width: 100%;
        min-height: 8rem;
        padding: 1rem;
        background: ${colors.secondary_background};
        border: none;
        outline: none;
        color: ${colors.primary_text};
        font-size: 1rem;
        border-radius: 12px;

        ::placeholder,
        ::-webkit-input-placeholder{
            color: ${colors.primary_text};
            font-size: 1rem;
    `
    const AddComment = styled.button`
        position: absolute;
        bottom: 1rem;
        right: 2rem;
        padding: 0.5rem 0.6rem;
        border-radius: 12px;
        border: none;
        outline: none;
        background: ${colors.sub_secondary};
        color: ${colors.primary_text};
        font-weight: ${fonts.bold};
        font-size: 1rem;
    `

    return (
        <Layout>
        <hr style={{ height: '0.1px', border: 'none', background: 'grey' }} />
        <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', padding: '1.8rem 0 3rem 0', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Span>
                        <Text size="1.2rem" margin='0 1rem 0 0' weight={fonts.medium} >{blog?.title}</Text>
                        <hr style={{ height: '0.2rem', marginTop: '0.5rem', borderRadius: '50px', border: 'none', outline: 'none', background: '#38B9F0' }} />
                    </Span>
                </div>
                <Link to="/"><Button radius="32px" size="1rem" width="7.5rem" padding="0.5rem 0.4rem" weight={fonts.medium}>Go Back</Button></Link>
            </div>
        </div>
        <div style={{ width: '85%', margin: '0 auto' }}>
            <img style={{ width: '100%', height: '500px', objectFit: 'cover' }} src={blog?.image} alt="img" />
            <div>
                <Text spacing="0.1rem" weight={fonts.regular} size="1rem" padding='2rem 0 0.7rem 0' line="1.6rem">{blog?.sub_discription}</Text>
                <Text spacing="0.1rem" weight={fonts.regular} size="1rem" padding='0.7rem 0 2rem 0' line="1.6rem">{blog?.description}</Text>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'auto' }}>
                    <Button padding="0.5rem 0.8rem" size="0.9rem" width="10rem">{blog?.author?.username}</Button>
                    <div onClick={(e)=> likeAdd(e)} style={{ height: '2.1rem', width: '3rem', background: `${colors.sub_secondary}`, borderRadius: '50%', marginLeft: '1rem', display: 'grid', placeItems: 'center' }}>
                        <img style={{ width: '20px' }} src={Emoji} alt="emoji" />
                    </div>
                    <Text size="1rem" margin=" 0 0 0 1rem">{likes} likes</Text>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', margin: '3rem 0' }}>
                    <img style={{ height: '1.6rem' }} src={Comment} alt="img" />
                    <Text size="1.2rem" weight={fonts.bold} margin="0 0 0 1rem" >Comment</Text>
                </div>

                {/* comments */}
                <div style={{ padding: '0 0 3rem 0' }}>
                    <div style={{ margin: '0 0 3rem 0' }}>
                        <IndividualComment />
                    </div>
                    <Button radius="32px" size="1rem" width="10rem" padding="0.5rem 0.4rem" weight={fonts.medium}>See all comments</Button>
                </div>

                <div style={{ position: 'relative', width: '80%' }}>
                    <TextArea placeholder="Add Comment..." />
                    <AddComment>Add Comment</AddComment>
                </div>
            </div>
        </div>
        <Footer />
    </Layout>
    )
}

export default BlogScreen