import React from "react";
// import Radium from 'radium';
import './Person.css'
// we can access element attributes using props keyword in the function
const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)' : {
    //         width: '450px'
    //     }
    // }
    return (
        <div className="Person">
            <p onClick={props.click}>Hi, I am {props.name}. My age is {props.age}.</p>
            
            {/* Two way data binding with react event method*/}
            <input type="text" value={props.name} onChange={props.change}/>
        </div>
    );
}

// export default Radium(person);
export default person;