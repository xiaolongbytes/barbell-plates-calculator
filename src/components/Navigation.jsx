import { Link } from "react-router-dom"

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={`/`}>Home</Link>
                </li>
                <li>
                    <Link to={`inventory`}>Edit Weights Inventory</Link>
                </li>
                <li>
                    <Link to={`barbellcalculator`}>Calculate Barbell</Link>
                </li>
            </ul>
        </nav>
    )
}