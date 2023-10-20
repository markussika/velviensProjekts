import React, { useState } from 'react';


function Hillo(){

const [name, setName] = useState("")



    return(
        <>
    <h1>Hello, {name}</h1>
    
        <input type="text" value ={name} onChange = {((gustavs)=> setName(gustavs.target.value))}></input>
        </>
    )


}
export default Hillo;