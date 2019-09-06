import {useState} from "react";

export const useChimeIn = initialValue => {
    const [input, setInput] = useState(initialValue);

    const handleInput = update => {
        setInput(update.target.value);
    }

    return [input, setInput, handleInput];
 }

