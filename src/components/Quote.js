import React, {useEffect, useState} from "react"
import styled from "styled-components"

const BlockQuote = styled.blockquote`
    background-color: rgb(230, 230, 230);
    border-radius: 12px;
    width: 200px;
    height: max-content;
    padding: 20px;
    text-align: center;

    `
const Cite = styled.cite`
    color: rgb(90, 90, 90);
    text-align: center;

`

const Figure = styled.figure`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

const Quote = (props) => {
    return (
        <>  

            <Figure>
                <BlockQuote>"{props.children}"</BlockQuote>
                <Cite> -{props.by}</Cite>
            </Figure>
        </>
    )

}

export default Quote