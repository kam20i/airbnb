import React from 'react'
import { useState } from 'react'
import Post from './Post'
const postsNum = []
for (let i = 1; i <= 5; i += 1) {
    postsNum.push(i)
}
const Posts = () => {
    return (
        postsNum.map((post, index) => {
            return <Post key={index} />
        })
    )
}

export default Posts