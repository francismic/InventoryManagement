import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div>
                <NavLink to="/" className="navbar-text h5 m-2 text-white">Home</NavLink>
                <NavLink to="catalogue" className="navbar-text h5 m-2 text-white">Catalogue</NavLink>
            </div>
        </nav>
    );
};
export default Nav;