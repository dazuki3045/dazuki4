import React, { useState } from "react";
import style from "./ThemeSwitcher.module.css";
import { TitleChanger } from "../TitleChanger/TitleChanger.jsx";

export const ThemeSwitcher = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
    return (
        <div className={`${style.theme} ${style[theme]}`}>
            <div className={style.container}>
                <TitleChanger theme={theme} />
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae distinctio eum inventore ipsum minima nam non quam quas quo quod, recusandae rerum similique voluptatum. Ab dolore ea expedita facere itaque laboriosam minima, obcaecati reiciendis sed! Aperiam commodi dolorum maxime provident totam, ut. Alias amet dolorem doloribus eius fugiat nam nesciunt!</h3>
                <button onClick={toggleTheme} >Переключить тему</button>
                {children}
            </div>
        </div>
    );
};
