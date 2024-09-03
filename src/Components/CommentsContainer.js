import React from 'react'


const commentsData = [
    {
        name: "Pranav",
        comment: "This is a test comment",
        replies : [
            {
                name: "Pranav",
                comment: "This is a test comment",
                replies : [
                    {
                        name: "Pranav",
                        comment: "This is a test comment",
                        replies : [
                
                        ]
                    },
                    {
                        name: "Pranav",
                        comment: "This is a test comment",
                        replies : [
                
                        ]
                    },
                    {
                        name: "Pranav",
                        comment: "This is a test comment",
                        replies : [
                
                        ]
                    },
                    {
                        name: "Pranav",
                        comment: "This is a test comment",
                        replies : [
                
                        ]
                    },
                    {
                        name: "Pranav",
                        comment: "This is a test comment",
                        replies : [
                
                        ]
                    },
                ]
            },
            {
                name: "Pranav",
                comment: "This is a test comment",
                replies : [
        
                ]
            },
            {
                name: "Pranav",
                comment: "This is a test comment",
                replies : [
        
                ]
            },
            {
                name: "Pranav",
                comment: "This is a test comment",
                replies : [
        
                ]
            },
            {
                name: "Pranav",
                comment: "This is a test comment",
                replies : [
        
                ]
            },
            {
                name: "Pranav",
                comment: "This is a test comment",
                replies : [
        
                ]
            },
            {
                name: "Pranav",
                comment: "This is a test comment",
                replies : [
        
                ]
            },
        ]
    },
    {
        name: "Pranav",
        comment: "This is a test comment",
        replies : [
            {
                name: "Pranav",
                comment: "This is a test comment",
                replies : [
        
                ]
            },
            {
                name: "Pranav",
                comment: "This is a test comment",
                replies : [
        
                ]
            },
            {
                name: "Pranav",
                comment: "This is a test comment",
                replies : [
        
                ]
            },
            {
                name: "Pranav",
                comment: "This is a test comment",
                replies : [
        
                ]
            },
            {
                name: "Pranav",
                comment: "This is a test comment",
                replies : [
        
                ]
            },
            {
                name: "Pranav",
                comment: "This is a test comment",
                replies : [
        
                ]
            },
            {
                name: "Pranav",
                comment: "This is a test comment",
                replies : [
        
                ]
            },
        ]
    },
    {
        name: "Pranav",
        comment: "This is a test comment",
        replies : [

        ]
    },
    {
        name: "Pranav",
        comment: "This is a test comment",
        replies : [

        ]
    },
    {
        name: "Pranav",
        comment: "This is a test comment",
        replies : [

        ]
    },
    {
        name: "Pranav",
        comment: "This is a test comment",
        replies : [
            {
                name: "Pranav",
                comment: "This is a test comment",
                replies : [
        
                ]
            },
            {
                name: "Pranav",
                comment: "This is a test comment",
                replies : [
        
                ]
            },
            {
                name: "Pranav",
                comment: "This is a test comment",
                replies : [
        
                ]
            },
            {
                name: "Pranav",
                comment: "This is a test comment",
                replies : [
        
                ]
            },
        ]
    },
    {
        name: "Pranav",
        comment: "This is a test comment",
        replies : [

        ]
    },
    {
        name: "Pranav",
        comment: "This is a test comment",
        replies : [

        ]
    },
]

const Comment = ({data}) => {
    const {name, comment, replies} = data;
    return( 
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg'>
        <img
           className='w-12 h-12' 
           alt="user" 
           src="https://t3.ftcdn.net/jpg/05/69/25/02/360_F_569250223_uJcLjVq4WJA7tdILnkEgKDA0qIZZFONl.jpg"
        />
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{comment}</p>
        </div>
    </div>
)}

const CommentsList = ({comments}) => {
    return comments.map((comment, index) =>(
    <div>
       <Comment key={index} data={comment}/>
       <div className='pl-5 border border-l-black ml-5'>
          <CommentsList comments={comment.replies}/>
       </div>
    </div>
    ));
};
const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
       <h1 className='text-2xl font-bold'>Comments:</h1>
       <CommentsList comments = {commentsData}/>
    </div>
  )
}

export default CommentsContainer