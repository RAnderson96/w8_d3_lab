import React from 'react'
import dayjs from 'dayjs'
import styled from 'styled-components'

const Figure = styled.figure`
    background-color: rgb(240, 237, 237);
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 2em;
    padding: 12px;
    align-items: center;

`

const Div = styled.div`
    display: flex;
    flex-direction: column;

`

const H5 = styled.h5`
    margin: 0;
`
const A = styled.a`
    text-decoration: none;

`


const DateA = styled.a`
    color: rgb(160, 161, 238);

`

export default function CommentCard(props) {
    // const dayjs = require('dayjs')
    var relativeTime= require('dayjs/plugin/relativeTime')
    dayjs.extend(relativeTime)
    // const dateToDisplay = dayjs(props.datePosted).fromNow()
    const dateToDisplay = dayjs().to(props.datePosted)
    console.log(dateToDisplay)

    return (
    <div>
        <Figure>
            <div>
                <img src={props.imageUrl} ></img>
            </div>
            <Div>
                <H5>{props.userName}</H5>
                <p>{props.children}</p>
                <span><A href="">Like ·</A> <A href="">Reply ·</A> <DateA>{dateToDisplay}</DateA></span>
            </Div>

        </Figure>
        
    </div>
  )
}


// imageUrl={commentObj.imageUrl}
// userName={commentObj.userName} 
// datePosted={commentObj.datePosted} >
//   {commentObj.comment}