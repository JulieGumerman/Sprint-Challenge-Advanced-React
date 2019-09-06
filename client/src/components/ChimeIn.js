import React from "react";
import { useChimeIn } from "../hooks/useChimeIn";

const ChimeIn = () => {

    const [input, setInput, handleInput] = useChimeIn("");

    const handleSubmit = event => {
        event.preventDefault();
    }
    return (
        <div>
        <h3>How much do you love women's soccer????</h3>
        <form onClick={handleSubmit}>
            <input onChange={handleInput}
            />
            <button type="submit">Say it to the world!</button>
        </form>
        <h4>{input}</h4>
        </div>
    )
}

export default ChimeIn;