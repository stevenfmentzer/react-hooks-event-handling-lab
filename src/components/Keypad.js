import React, { useState } from "react";


const [password , logPassword] = useState("");

const handleChange = (event) => {
    password = event.target.value
    logPassword(console.log(`Entering Password ... ${password}`))
}

function Keypad (){
    return (
            <input type="password" onChange={handleChange}></input>
    )
}

export default Keypad;