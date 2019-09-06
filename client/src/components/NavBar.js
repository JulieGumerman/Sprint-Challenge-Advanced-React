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
            <button onClick={changeColors}>Luke, I am your NavBar</button>
        </div>
    )
}

export default NavBar;