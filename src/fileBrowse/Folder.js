import React, { useState } from 'react';
import styled from 'styled-components';
import Window from '../window/Window';
import ListView from '../fileBrowse/ListViewContainer';

const StyledFolder = styled.div`
    cursor: pointer;
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: ${props => props.index * 110 + 30}px;
    left: 30px;
    & .folder-icon {
        width: 60px;
        height: 45px;
        border: 2px solid black;
        border-radius: 7px;
        border-top-left-radius: 0;
        background-color: white;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 22px;
        & > div {
            position: absolute;
            background-color: white;
            left: -2px;
            top: -8px;
            width: 25px;
            height: 6px;
            border: 2px solid black;
            border-bottom: none;
            border-top-left-radius: 7px;
            border-top-right-radius: 7px;
        }
    }
    & .folder-label {
        text-align: center;
        margin-top: 3px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        font-weight: bold;
        font-size: 14px;
    }
`;

export default function Folder({
    name,
    windowOrder,
    folder,
    setWindowOrder,
    index,
    iconCode,
}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenFolder = () => {
        setIsOpen(true);
        setWindowOrder(folder.id);
    };
    return (
        <>
            <StyledFolder onDoubleClick={handleOpenFolder} index={index}>
                <div className='folder-icon'>
                    <i className={iconCode}></i>
                    <div></div>
                </div>
                <div className='folder-label'>{name}</div>
            </StyledFolder>
            <Window
                close={() => setIsOpen(false)}
                name={name}
                windowOrder={windowOrder}
                folder={folder}
                setWindowOrder={setWindowOrder}
                isOpen={isOpen}
            >
                <ListView files={folder.files} />
            </Window>
        </>
    );
}
