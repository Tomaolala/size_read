import { FC } from "react";
const ZInputSttyle={
    // "height":"800px"
}
const ZInput:FC<{ placeholder: string ,value:string,onChange:Function}> =(props)=>{
    const {
        placeholder,
        value,
        onChange
    } =props
    return <>
        <input type="text" 
        style={ZInputSttyle}
        placeholder={placeholder}
        value={value}
        onChange={e=>onChange(e) }/>
    </>
}

export default ZInput