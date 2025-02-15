import { ThemeSwitcher } from "./components/theme/ThemeSwitcher.jsx";
import { Message } from "./components/message/message.jsx";


function App() {
    return (
        <>
            <ThemeSwitcher>
                <Message />
            </ThemeSwitcher>
        </>
    );
}

export default App
