import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector('#root'))


function Header() {
    return (
    <header><img src="/src/assets/react-logo.png" alt="react logo" width="40px" /></header>
    )
}


function Main() {
    return (
        <main>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>I want to become a better developer</li>
                <li>It is a modern framework</li>
                <li>I enjoy it</li>
            </ol>
        </main>
    )
}


function Footer() {
    return (
        <footer>
            <small>© 2025 Aguilar development. All rights reserved.</small>
        </footer>
    )
}


function Page() {
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    )
}


root.render(
    <Page/>
)