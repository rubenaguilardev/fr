export default function Header() {
    return (
    <header className='header'>
        <img className='image' src="/src/assets/react-logo.png" alt="react logo"/>
        <nav>
            <ul className='nav-list'>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
    )
}