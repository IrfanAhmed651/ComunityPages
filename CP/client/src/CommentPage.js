import Comment from "./Comment";

function CommentPage(props) {

    const commentId = props.match.params.id;

    return (
        <div className="py-4 px-6 bg-rd">
            <div className="bg-rd-lowbright p-3 rounded-md">
                <Comment id={commentId} />
            </div>
        </div>
        // <div></div>
    );
}
export default CommentPage;