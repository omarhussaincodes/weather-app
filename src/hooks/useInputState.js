import { useState } from "react";

function UseInputState(initalValue = '') {
    const [state, setState] = useState(initalValue);

    const handleChange = (e) => {
        setState(e.target.value)
    }

    const reset = () => {
        setState("");
    }

    return [state, handleChange, reset];
}

export default UseInputState;