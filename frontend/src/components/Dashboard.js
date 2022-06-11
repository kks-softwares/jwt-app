import React from 'react';
import { useState, useEffect } from "react";
import { Redirect, useHistory,Link } from "react-router-dom"
import Navbar from '../Navbar/Navbar_Main';
import navlogo from "../Navbar/logo_react.png";

function Dashboard() {

    let history = useHistory();
    // let [loggedIn, setloggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token",JSON.stringify())
        console.log("token", token)
        if (!token || token == null) {
            return <Redirect to="/" />
            console.log("unauthenticated user therefore redirecting back to home page")
        }
    }, [])

    return (
        <div>
            <Navbar />
            <div className='container pb-5'>
            <div className='text-center pt-3'>
                <h1>Dashboard Page</h1>
            </div>
                <div className='row mt-2'>
                    <div class="col-sm-3">
                        <div class="card" style={{border:'2px solid'}}>
                        <img class="card-img-top" height="260px" src={navlogo} alt="Card image cap"/>
                            <div class="card-body">
                                <hr/>
                                <div className='text-center'>
                                <h5 class="card-title">TODO LIST</h5>
                                    <button type="button" class="btn btn-primary">
                                        <Link to="/TODO_LIST" style={{color:'white'}} >GOTO</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card" style={{border:'2px solid'}}>
                        <img class="card-img-top" height="260px" src={navlogo} alt="Card image cap"/>
                            <div class="card-body">
                                <hr/>
                                <div className='text-center'>
                                <h5 class="card-title">Tutorial 2</h5>
                                    <button type="button" class="btn btn-secondary">Tutorial 2</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card" style={{border:'2px solid'}}>
                        <img class="card-img-top" height="260px" src={navlogo} alt="Card image cap"/>
                            <div class="card-body">
                                <hr/>
                                <div className='text-center'>
                                <h5 class="card-title">Tutorial 3</h5>
                                    <button type="button" class="btn btn-success">Tutorial 3</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card" style={{border:'2px solid'}}>
                        <img class="card-img-top" height="260px" src={navlogo} alt="Card image cap"/>
                            <div class="card-body">
                                <hr/>
                                <div className='text-center'>
                                <h5 class="card-title">Tutorial 4</h5>
                                    <button type="button" class="btn btn-danger">Tutorial 4</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;