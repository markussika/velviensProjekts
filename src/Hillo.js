import React, { useState } from 'react';


function Hillo(props){

const [name, setName] = useState(props.name)
function changeName(event){
    setName(event.target.value);
}


    return(
        <>
    <h1>Hello, {name}</h1>
    
        <input type="text" value ={name} onChange = {(changeName)}></input>
        </>
    )


}
export default Hillo;