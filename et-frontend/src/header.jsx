import './css/header.css';
import './assets/font.css';
import useLocalStorage from "use-local-storage";

function header(){
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDark] = useLocalStorage("isDark", preference);

    return (
        <div className='header' data-theme={isDark ? 'dark' : 'light'}>
            <h1>Stay Somewhere Great</h1>
            <p>Find perfect place to stay</p>
        </div>
    );
}

export default header;