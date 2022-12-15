import React from 'react'
import './css/Blog.css'
const Blog = (props) => {
    console.log(props)
    return <div className='blog-wrap'>
        <img src="https://i.imgur.com/dj68qkw.jpeg" alt="" srcset="" />
        <p>{props.tanggal}</p>
        <h2>{props.judul}</h2>
        <p>{props.summary}</p>
    </div>
}

export default Blog