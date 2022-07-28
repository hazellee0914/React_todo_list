import React, { Component } from 'react';
import './style.css';

function Header() {
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
                <div className="HeaderContainer">
                    <h3>My Todo List</h3>
                    <h2>React</h2>
                </div>
            </div>
        </>
    );
}

export default Header;
