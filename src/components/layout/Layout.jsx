import React, { useState } from "react";
import Header from"../header/Header";
import Form from"../form/Form";
import List from"../list/List";
import Todo from "../todo/Todo";



function Layout (){
    const [todo, setTodo] = useState([]);
    console.log(todo);
    return (
        <>
            <Header />
            <Form todo={todo} setTodo={setTodo} />
            <List todo={todo} setTodo={setTodo} />
            
        </>
        
    );
}

    export default Layout

