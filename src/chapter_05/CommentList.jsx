import React from "react";
import Comment from "./Comment";
const comments= [
    {
        name: "이인제",
        comment: "안녕하세요, 소플입니다."
    },
    {
        name: "유재석",
        comment: "리액트 재미있네요."
    },
    {
        name: "김윤경",
        comment: "Hello, world!"
    }
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return ( 
                    <Comment name={comment.name} comment={comment.comment}/>
                )
            })}
        </div>
    )
}

export default CommentList;