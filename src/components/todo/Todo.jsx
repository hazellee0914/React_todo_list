import React, { Component, useRef, useState } from 'react';
import "./style.css";




function Todo(props) {
//   const [isOpen, setMenu] = useState(true);
  
  // console.log('props', props.item[props.i].newcopy)

  const onCompleteClick = ()=> {
                let copy = [...props.item]
                copy[props.i].isDone=true;
                copy[props.i].newcopy='취소'
                props.setTodo(copy);
                console.log(copy.isDone)
  }
  
  const onGoBackClick = ()=> {
                let copy = [...props.item]
                copy[props.i].isDone=false;
                copy[props.i].newcopy='완료'
                props.setTodo(copy);
                console.log(copy.isDone)
  }

  const onbuttonClick  =()=> {
                let copy = [...props.item];
                copy.splice(0,1);
                props.setTodo(copy);
                }
    // console.log(props.item[props.i]);
        return (
            <>
            <div className='Todo-container'>
                {/* {props.item} */}
                <h2 className='todo-title'>{props.item[props.i].title}</h2>
                <p>{props.item[props.i].body}</p>
                <div className='button-set'/>
                <button onClick={onbuttonClick} className='Todo-delete'>삭제하기</button>
                <button onClick={props.item[props.i].isDone == false ? onCompleteClick : onGoBackClick} className='Todo-complete'>{props.item[props.i].newcopy}</button>
                
            </div>
            </>
        )
    }

    // function Donebutton(props){
    //   if (props.item[props.i].isdone == false){
    //   return  <button onClick={props.onCompleteClick}className="Todo-delete">완료</button>
    //   } else  {
    //     return <button onClick={props.onGoBackClick} className="Todo-delete">취소</button>
    //   }{/* <Donebutton item={props.item} i={props.i} onCompleteClick={onCompleteClick} onGoBackClick={onGoBackClick}></Donebutton> */}
    // }
    
    
    
    
    export default Todo