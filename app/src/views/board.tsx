// @ts-nocheck
import { useState } from "react";
const Board: React.FC = () => {
    console.log(window.versions);
    return (
    <>
        <h1>{}</h1>
        <button
        type="button"
        id="btn"
        onClick={() => {
            window.electron.ipcRenderer.send('msg1', '这是一条来自于异步的消息')
        }}
        >
        Open a File
        </button>
        File path: <strong id="filePath"></strong>
    </>
    );
};

export default Board;
