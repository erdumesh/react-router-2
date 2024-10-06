import React from 'react';
import {Outlet} from 'react-router-dom';
function Post(){
    return(
        <div>
            <h1>Post Layout Page</h1>
            <Outlet />
        </div>
    )
}
export default Post;