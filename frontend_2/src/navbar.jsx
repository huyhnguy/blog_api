import LogInForm from "./LogInForm"
import { useState } from "react";

function Navbar() {
    const [login, setLogin] = useState(false);

    const handleLogin = () => {
        const loginForm = document.querySelector("#login-form");
        loginForm.showModal();
    }

    const loginSuccess = () => {
        setLogin(true);
    }

    const handleLogout = () => {
        localStorage.clear();
        setLogin(false);
    }

    return(
        <>
            <header>
                <div className="invisible-div"></div>
                <h1 className="logo"><a href="/">MYLIFE</a></h1>
                { login ? <button className="login-button" onClick={handleLogout}>Logout</button> : <button className="login-button" onClick={handleLogin}>Login</button> }
            </header>
            <hr />
            <nav>
                <ul className="navbar">
                    <li><a href="/posts">Posts</a></li>
                    <li><a href="/posts/unpublished">Unpublished Posts</a></li>
                    <li><a href="/posts/create">Create a Post</a></li>
                </ul>
            </nav>
            <LogInForm loginFunction={loginSuccess} />
        </>

    )
}

export default Navbar