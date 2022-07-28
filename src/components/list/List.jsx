import React, { Component } from 'react';
import "./style.css";
import Todo from '../todo/Todo';




function List(props) {
    console.log(props);
    return(
        <>
        
        <div style={{width:'100%', display:'flex',flexDirection: 'column', justifyContent:'center', alignItems:'center', height:'100%'}}>
          <div style={{maxWidth:'1200px', minWidth:'800px', height:'100%'}}>

            <div className='List-container'>
                <h2 className='List-title'>Working..🤞</h2>
                <div className='List-wrapper'>
                    {props.todo.map((t,i)=>{
                      if (t.isDone===false){
                        return <Todo key={i} item={props.todo} setTodo={props.setTodo} newcopy={props.todo.newcopy} i={i} />; 
                      }
                        
                    })}
                </div>
            </div>
            <div className='List-container1'>
              <h2 className='List-title1'>Done..🤞</h2>
              <div className='List-wrapper'>
                    {props.todo.map((t,i)=>{
                      if (t.isDone===true){
                        return <Todo key={i} item={props.todo} setTodo={props.setTodo} i={i} />; 
                      }
                        
                    })}
                </div>
                    
            </div>
          </div>
        </div>
        
        </>
    )
}
    
    export default List
