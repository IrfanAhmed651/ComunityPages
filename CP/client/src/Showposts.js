import React from "react";
import { Link } from "react-router-dom";
import PostContent from "./PostContent";

function Showposts(props) {

  let postClasses = "block border rounded-md " + (props.open ? "" : "hover:border-rt cursor-pointer");
  if (props.isListing) {
    postClasses += " bg-rd-lowbright p-3 mx-6 border-2 border-rb";
  } else {
    postClasses += " border-none";
  }

  return (
    <div className="text-rt pb-4">
      {props.open && (
        <div className={postClasses}>
          <PostContent {...props} />
        </div>
      )}
      {!props.open && (
        <Link to={{ pathname: '/comments/' + (props.rootId || props._id), state: { commentId: (props.rootId || props._id) } }} className={postClasses}>
          <PostContent {...props} />
        </Link>
      )}


    </div>
  );
}

export default Showposts;
