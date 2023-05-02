// @ts-nocheck
import { useState } from "react";
import ZInput from "../components/input";
import { transformUrl } from "ztransformurl";
const Board: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [fileMsg, setFileMsg] = useState([]);
  return (
    <>
      <ZInput
        placeholder="aa"
        onChange={(e) => {
          setInputValue(e.target.value);
          window.electron.ipcRenderer
            .invoke("msg1Re", `${transformUrl(e.target.value)}`)
            .then((data) => {
              console.log(data);
              let arrData = [...data]; // 解构一遍生成新的数组，相当于浅拷贝，这样才能触发更新数据
              arrData.splice(0, 1);
              setFileMsg(arrData);
            });
        }}
      ></ZInput>
      {fileMsg.map((item) => {
        return <p>{item ? item : "und"}</p>;
      })}
    </>
  );
};

export default Board;
