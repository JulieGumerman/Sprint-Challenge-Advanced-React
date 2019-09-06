import React from "react";
import useDarkMode from "../hooks/useDarkMode";

const NavBar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);

    const changeColors = event => {
        event.preventDefault();
        setDarkMode(!darkMode);
    }
    return (
        <div>
            <button title="dark mode control"onClick={changeColors}>Dark mode?</button>
        </div>
    )
}

export default NavBar;