import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const StyledMessageBox = styled.div`
    z-index: 8001;
    width: 400px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    border: 2px solid black;
    background: white;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    & .message-block {
        padding: 10px;
        min-height: 100px;
    }
    & .message-confirm {
        margin: 10px;
        font-size: 16px;
        font-weight: bold;
        padding: 5px 10px;
        min-width: 100px;
        background: white;
        border-radius: 7px;
        border: 2px solid black;
        cursor: pointer;
        display: inline-block;
        user-select: none;
        &:active {
            background: black;
            color: white;
        }
    }
    &.messagebox-enter {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.8);
    }
    &.messagebox-enter-active {
        opacity: 1;
        transition: 0.1s;
        transform: translate(-50%, -50%) scale(1);
    }
    &.messagebox-exit {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
    &.messagebox-exit-active {
        opacity: 0;
        transition: 0.1s;
        transform: translate(-50%, -50%) scale(0.8);
    }
`;

const StyledShade = styled.div`
    position: fixed;
    inset: 0 0 0 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 8000;
    &.shade-enter {
        opacity: 0;
    }
    &.shade-enter-active {
        opacity: 1;
        transition: 0.1s;
    }
    &.shade-exit {
        opacity: 1;
    }
    &.shade-exit-active {
        opacity: 0;
        transition: 0.1s;
    }
`;

export default function MessageBox({ isOpen, close }) {
    return (
        <>
            <CSSTransition
                in={isOpen}
                unmountOnExit
                timeout={100}
                classNames='messagebox'
            >
                <StyledMessageBox>
                    <div className='message-block'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa error ex ullam ipsam. Perspiciatis doloribus
                        quisquam soluta dignissimos pariatur possimus tempore
                        laudantium atque facilis. Doloribus ex illo sunt vitae
                        labore?
                    </div>
                    <div className='message-confirm' onClick={close}>
                        Ok
                    </div>
                </StyledMessageBox>
            </CSSTransition>
            <CSSTransition
                in={isOpen}
                unmountOnExit
                timeout={100}
                classNames='shade'
            >
                <StyledShade />
            </CSSTransition>
        </>
    );
}
