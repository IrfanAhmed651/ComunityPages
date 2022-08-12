import React from 'react'
import Cover from "./Cover";
import Newpost from "./Newpost";
import PostsListing from "./PostsListing";

function Board() {
    return (
        <div>
            <Cover />
            <Newpost />
            <PostsListing />
        </div>
    )
}

export default Board