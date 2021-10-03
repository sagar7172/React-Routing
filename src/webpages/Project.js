import React from "react";
import {useHistory} from 'react-router-dom'

function Project()
{
    let history = useHistory();

    return( 
    <div>
    <h1>I am project page</h1>
        <button onClick={()=> {history.push('/about')}}>Go To About Page</button>
    </div>
    )
}

export default Project