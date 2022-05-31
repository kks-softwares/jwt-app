import React from 'react';
import { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom"
import Navbar_Main from '../Navbar/Navbar_Main';

function Link1() {
    
    let history = useHistory();
    // let [loggedIn, setloggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token")
        console.log("token", token)
        if (!token || token == null) {
            return <Redirect to="/" />
            console.log("unauthenticated user therefore redirecting back to home page")
        }
    }, [])

    return (
        <div>
            <Navbar_Main/>
            <div>Link1 DASSSSSHHHHHH</div>
        </div>
    )
}

export default Link1;