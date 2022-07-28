import React, { Component, useRef, useState } from 'react';
import './style.css';

function Todo(props) {


    const onCompleteClick = () => {
        let copy = [...props.item];
        copy[props.i].isDone = true;
        copy[props.i].newcopy = '취소';
        props.setTodo(copy);
        console.log(copy.isDone);
    };

    const onGoBackClick = () => {
        let copy = [...props.item];
        copy[props.i].isDone = false;
        copy[props.i].newcopy = '완료';
        props.setTodo(copy);
        console.log(copy.isDone);
    };

    const onbuttonClick = () => {
        let copy = [...props.item];
        copy.splice(0, 1);
        props.setTodo(copy);
    };
    return (
        <>
            <div className="Todo-container">
                <h2 className="todo-title">{props.item[props.i].title}</h2>
                <p>{props.item[props.i].body}</p>
                <div className="button-set" />
                <button onClick={onbuttonClick} className="Todo-delete">
                    삭제하기
                </button>
                <button
                    onClick={
                        props.item[props.i].isDone == false
                            ? onCompleteClick
                            : onGoBackClick
                    }
                    className="Todo-complete"
                >
                    {props.item[props.i].newcopy}
                </button>
            </div>
        </>
    );
}


export default Todo;
