import React from 'react'
import {useParams} from 'react-router-dom'
function PostDetail(){
    let {category} = useParams();

    return (
        <div>
            <h1>Post Detail</h1>
            <h1>Post Category is : {category}</h1>
            
            {/* http://localhost:3000/post/mobile?price=5000 */}
        </div>
    )
}

export default PostDetail;