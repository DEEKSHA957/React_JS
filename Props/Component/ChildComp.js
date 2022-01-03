import React from 'react';
 
let ChildComp=(props)=>{
    return (
        <div>
            <button onClick={() => props.greetHandler()}>
             Greet Parent
            </button>   
        </div>
    )
}
 
export default ChildComp;