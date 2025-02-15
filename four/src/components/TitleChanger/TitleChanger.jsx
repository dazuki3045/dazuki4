import React, { useEffect } from "react";

export const TitleChanger = ({ theme }) => {
    const titles = ["Привет, мир!", "React — крутой!", "Учусь хукам", "Измени заголовок!"];
    useEffect(() => {
        const randomTitle = titles[Math.floor(Math.random() * titles.length)];
        if (theme === "light") {
            document.title = "lesson4";
        } else {
            document.title = randomTitle;
        }
    }, [theme]);
    return null;
};
