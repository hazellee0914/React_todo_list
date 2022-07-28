import React, { Component, useState } from 'react';
import Todo from '../todo/Todo';
import List from '../list/List';
import './style.css';

function Form(props) {
    const [inputValue, setInputvalue] = useState('');
    const [outputValue, setOutvalue] = useState('');
    const [id, setID] = useState(0);
    const reset = () => {
        setInputvalue('');
        setOutvalue('');
    };

    return (
        <>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div className="add-form">
                  <div style={{display:'flex', width:'100%'}}>
                  <div>
                    <span className="form-label">제목</span>
                    <input
                        value={inputValue}
                        className="add-input"
                        onChange={(event) => {
                            setInputvalue(event.target.value);
                        }}
                    />
                  </div>
                  <div syle={{ width: '100%'}}>
                    <span className="form-label">내용</span>
                    <input
                        value={outputValue}
                        className="add-input"
                        onChange={(event) => {
                            setOutvalue(event.target.value);
                        }}
                    />
                  </div>
                  </div>
                  <div style={{width:'40%',display: 'flex', justifyContent:'center', alignItems:'center'}}>
                    <button
                        onClick={() => {
                            let copy = [...props.todo];
                            setID(id + 1);
                            copy.push({
                                id: id,
                                title: inputValue,
                                body: outputValue,
                                isDone: false,
                                newcopy: '완료',
                            });
                            props.setTodo(copy);
                            reset();
                        }}
                        className="add-button"
                    >
                        추가하기
                    </button>
                </div>
            </div>
          </div>
        </>
    );
}

export default Form;
