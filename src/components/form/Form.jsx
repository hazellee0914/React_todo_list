
import React, { Component, useState } from 'react';
import Todo from '../todo/Todo';
import List from '../list/List';
import "./style.css";


function Form (props) {
    const [inputValue,setInputvalue] = useState('')
    const [outputValue,setOutvalue] = useState('')
    const [id, setID] = useState(0);
    const reset = () => {
        setInputvalue('');
        setOutvalue('');
    }
   const addItem = (e) => {
        props.setTodo([...props.todo, inputValue]);
    };
    console.log(props.todo);
    return (
    <>
    <div style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <div className='add-form'>
        <span className='form-label'>제목</span>
        <input value={inputValue} className='add-input' onChange={(event)=>{setInputvalue(event.target.value)}}/>
        <span className='form-label'>내용</span>
        <input value={outputValue} className='add-input' onChange={(event)=>{setOutvalue(event.target.value)}}/>      


    
        <button onClick = {()=>{
                let copy = [...props.todo];
                setID(id+1)
                copy.push(
        {
                id:id,
                title:inputValue,
                body:outputValue,
                isDone:false,
                newcopy:'완료'
         }
                )
                props.setTodo(copy)
                reset()}}
                className='add-button'>추가하기</button> 
                
                

        </div>
    </div>
    
        
        
        </>
        
    )
}


export default Form
