// @ts-nocheck
import { useState } from "react";
const Board: React.FC = () => {
    const [fileMsg,setFileMsg] =useState([])
    console.log(window.electron);
    return (
    <>
        <button
        onClick={() => {
            window.electron.ipcRenderer.invoke('msg1Re', 'path/to/file').then(data => {
                console.log(data)
                setFileMsg(data)
                });
            window.electron.ipcRenderer.send('readFile', "aa")}}>
        readC
        </button>

        { fileMsg.map(item=>{
              return  <p>{item}</p>
        })}
    </>
    );
};

export default Board;
