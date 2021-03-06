import React from "react";
import {useLocation} from 'react-router-dom'

function ErrorPage()
{
    let location = useLocation();
    return (
    <div>
    <h1>404</h1>
    <p>This page not found</p>
    <p>Sorry about that, the page "{location.pathname}" doesn't exist!</p>
    </div>
    )
}

export default ErrorPage