import './css/error.css'
import useLocalStorage from "use-local-storage";

function error() 
{
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDark] = useLocalStorage("isDark", preference);

    return (
        <div className="error" data-theme={isDark ? 'dark' : 'light'}>
            <h1>ERROR 404</h1>
            <p>Data Not Found</p>
        </div>
    );
}
export default error;