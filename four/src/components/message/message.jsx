import React, { useState, useEffect } from "react";

export const Message = () => {
    const [showMessage, setShowMessage] = useState(false);
    useEffect(() => {
        let timer;
        if (showMessage) {
            timer = setTimeout(() => {
                setShowMessage(false);
            }, 5000);
        }
        return () => clearTimeout(timer);
    }, [showMessage]);
    return (
        <div>
            <button onClick={() => setShowMessage(true)}>
                Показать сообщение
            </button>
            {showMessage && <p>Сообщение исчезнет через 5 секунд</p>}
        </div>
    );
};