import { Outlet } from "react-router-dom"
import Navigation from "../components/Navigation"

export default function Root() {
    return (
        <>
            <header>
                <h1>Let's Lift!</h1>
            </header>

            <Navigation/>

            <main>
                <Outlet />
            </main>

            <footer>
                <p>&copy; 2024 April Wang </p>
            </footer>


        </>
    )
}