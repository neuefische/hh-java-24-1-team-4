import './Header.css'

export default function Header() {

    function login() {
        const host = window.location.host === 'localhost:5173' ? 'http://localhost:8080': window.location.origin

        window.open(host + '/oauth2/authorization/github', '_self')
    }

    return (
        <header className="header">
            <div></div>
            <h1 style={{color: "white"}}>Fitness-App</h1>
            <button onClick={login}>login</button>
        </header>
    )
}