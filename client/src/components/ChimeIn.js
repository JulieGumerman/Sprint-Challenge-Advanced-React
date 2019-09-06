import React from "react";
import { useChimeIn } from "../hooks/useChimeIn";
import styled from "styled-components";

const ChimeIn = () => {

    const [input, setInput, handleInput] = useChimeIn("");

    const handleSubmit = event => {
        event.preventDefault();
        document.querySelector("input").value ="";
    }
    return (
        <div>
        <h3>How much do you love women's soccer????</h3>
        <MyForm onClick={handleSubmit}>
            <input onChange={handleInput}
            />
            <button type="submit">Say it to the world!</button>
        </MyForm>
        <Flag>{input}</Flag>
        </div>
    )
}

export default ChimeIn;

const Flag = styled.h4`
    padding: 30px;
    font-size: 60px;
    background: red;
`
const MyForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    display: column;
`