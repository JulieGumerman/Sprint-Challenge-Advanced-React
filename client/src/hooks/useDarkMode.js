import { useState, useEffect } from "react";


const useDarkMode = initialValue => {
    const [darkMode, setDarkMode] = useState(initialValue);

    useEffect(() => {

        darkMode === true ? window.document.body.classList.add("dark-mode"):window.document.body.classList.remove("dark-mode");


    }, [darkMode]);

    return [darkMode, setDarkMode];
}

export default useDarkMode;