import React from 'react';
import { useState, useEffect } from "react";
import { Redirect} from "react-router-dom"
import Navbar_Main from '../Navbar/Navbar_Main';
import TodoList from './TodoList';

function Link1() {

    // let history = useHistory();
    const[inputList,setInputList] = useState("")
    const[listItem,setListItem] = useState([])
    // let [loggedIn, setloggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token")
        console.log("token", token)
        if (!token || token == null) {
            return <Redirect to="/" />
            console.log("unauthenticated user therefore redirecting back to home page")
        }
    }, [])

    const itemEvent = (event) => {
        setInputList(event.target.value)
    }

    const addEvent = (event) => {
        // console.log(event) 
        setListItem((olditems) => {
            return [...olditems, inputList];
        }) 
        setInputList("");
    }

    const deleteItem = (id) => {
        console.log("deleted")
        setListItem((olditems) => {
            return olditems.filter((arrElem, index) =>{
                return index !== id;
            })
        })
    }

    return (
        <div>
            <Navbar_Main />
            <div>
                <h1>TODO LIST</h1>
            </div>
            <div class="row">
                <div className='col-md-3'>
                </div>
                <div className='col-md-6'>
                    <div class="text-center" style={{border:'2px solid'}}>
                        <div className='mt-3'>
                            <h1 style={{backgroundColor:'#856ca9'}}>TODO LIST</h1>
                            <input type="text" value={inputList} onChange={itemEvent} style={{padding:'10px 40px 10px 0px'}}/>
                            <button className='btn btn-warning' style={{marginLeft:'20px',padding:'10px 40px 10px 50px'}} onClick={addEvent}>ADD</button>
                            <br/><br/>
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                    <th scope="col">Wish List</th>
                                    <th scope="col">Choice</th>
                                    </tr>
                                </thead>
                                </table>
                                {listItem.map((itemVal, index) => {
                                    return <TodoList 
                                            key={index}
                                            id={index} 
                                            item={itemVal} 
                                            onChange={deleteItem}/>
                                })}

                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                </div>
            </div>
        </div>
    )
}

export default Link1;