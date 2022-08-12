import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import Showposts from "./Showposts";

function SearchResultsPage(props) {
    const { text } = props.match.params;
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/comments?search=' + text, { withCredentials: true })
            .then(response => setComments(response.data));
    }, []);


    return (
        <div className="bg-rd">
            {comments.map(comment => (
                <Showposts {...comment} isListing={true} />
            ))}
        </div>
    );
}

export default SearchResultsPage;