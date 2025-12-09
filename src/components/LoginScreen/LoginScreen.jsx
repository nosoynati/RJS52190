import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Error404 from "../Error404";

const LoginScreen = () => {
	const [ loading, setLoading] = useState(true)

	const { login, loginWithGoogle, user } = useContext(AuthContext);
	const [values, setValues] = useState({
		email: "",
		password: "",
	});

	const handleInput = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setTimeout(()=> {
			login(values)
			if(user.logged){
				return (<Navigate to="/"/>)
			}
			else{
				alert("Usuario y/o contraseña incorrectos")
				return
			}
		},1000);
		
		console.log(values);
	};
	
	return (
		<>
			<section className="container flex w-full flex-col max-w-lg justify-center align-middle m-auto bg-red-100 p-8 rounded-lg">
				<h2>Login</h2>
				<div className="w-full max-w-lg">
					<form
						className="flex flex-col"
						onSubmit={handleSubmit}>
						<input
							type="email"
							placeholder="email"
							name="email"
							value={values.email}
							onChange={handleInput}
							className="form-input border border-pink-400"
						/>
						<label>password</label>
						<input
							type="password"
							placeholder="*****"
							name="password"
							value={values.password}
							onChange={handleInput}
							className="form-input border border-pink-400"
						/>
						<button
							type="submit"
							className="btn-login-form">
							Ingresar
						</button>
					
						</form>
					<div className="container flex flex-row w-full gap-2">
						<Link
							to="/register"
							className="btn-register">
							Registrate
						</Link>
						<button
							type="button"
							onClick={loginWithGoogle}
							className="btn-login-form">
							Ingresar con google
						</button>
					</div>
				</div>
			</section>
		</>
	);
};
export default LoginScreen;
