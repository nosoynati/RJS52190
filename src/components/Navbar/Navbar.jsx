import "./navbar.scss";
import { Link } from "react-router-dom";
import favicon from "/favicon.png";
import { CartWidget } from "../CartWidget/CartWidget";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {

	const { user, logout } = useContext(AuthContext)
	function getnickname() {
		let name = user.email
		name = name.split('@')
		return name[0]
	}

	return (
		<nav className="navbar__container">
			<div className="container-fluid flex-1 flex-grow justify-around">
				<span className="inline-flex flex-row">
					<img src={favicon} alt="logo" className="w-5 h-5 m-1"></img>
					<Link to="/" className="navbar-brand">
						mami
					</Link>
					<Link
						className="nav-link active"
						aria-current="page"
						to="shop"
					>
						Shop
					</Link>
					<Link to="contacto" className="nav-link">
						Contacto
					</Link>
					<Link to="ayuda" className="nav-link">
						FAQ
					</Link>
				</span>
				<div className="container-fluid">
					{/* <Link to="login" className="nav-link">Login</Link> */}
					{
						!user 
							? <Link to="login" className="nav-link">Login</Link>
							:<>
								<p className="hover-msg">Bienvenido {getnickname()}</p>
								<button className="nav-link" onClick={logout}>Logout</button>
							</>
					}
					<CartWidget />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
