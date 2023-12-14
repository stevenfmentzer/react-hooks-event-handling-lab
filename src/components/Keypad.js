import React, { useState } from "react";

function Keypad (){

    const [password , logPassword] = useState("");

    const handleChange = (event) => {
        console.log(`Entering password...`)
        logPassword(event.target.value)
    }

    return (
            <input type="password" onChange={handleChange}></input>
    )
}

export default Keypad;