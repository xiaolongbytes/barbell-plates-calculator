import { Link, NavLink } from 'react-router-dom';

export const Navigation = () => {
    return (
        <nav>
            <ul>
                {/* <li>
                    <Link to={`/`}>Home</Link>
                </li> */}
                <li>
                    <NavLink to={`/`}>Find Plates for Desired Weights</NavLink>
                </li>
                <li>
                    <NavLink to={`inventory`}>Edit Weights Inventory</NavLink>
                </li>
                {/* <li>
                    <NavLink to={`barbellcalculator`}>Calculate Barbell</NavLink>
                </li> */}
            </ul>
        </nav>
    );
};
