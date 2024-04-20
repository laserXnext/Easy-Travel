import './adminhead.css'
import useLocalStorage from "use-local-storage";

function adminhead(){

    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDark] = useLocalStorage("isDark", preference);

    return (
        <div className='admin' data-theme={isDark ? 'dark' : 'light'}>
            <h1 className='admin-h'>Admin Page</h1>
            <p className='admin-p'>Now-you-have-access-to-admin-panel</p>
            <p className='admin-p1'>Tip - " Go-Crazy <i class="uil uil-laughing"/>"</p>
        </div>
    );
}
export default adminhead;
