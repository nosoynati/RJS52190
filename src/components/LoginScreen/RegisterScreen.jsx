import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const RegisterScreen = () => {

	const { register, loginWithGoogle } = useContext(AuthContext)

	const [values, setValues] = useState({
		email: '',
		password: ''
	})
	
	const handleInput = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value
		})
	}
	 
	const handleSubmit = (e) => {
		e.preventDefault();
		register(values)
		console.log(values);
	};

	return (
		<>
			<section className="container w-full flex-col max-w-lg justify-center align-middle m-auto  bg-red-100 p-8 rounded-lg">
				<h2>Registrarme</h2>
				<div className="w-full max-w-lg">
					<form className="flex flex-col" onSubmit={handleSubmit}>
						<label>email</label>
						<input
							type="email"
							placeholder="email"
							name="email"
							value={values.email}
							onChange={handleInput}
							className="form-input border border-pink-400"></input>
						<label>password</label>
						<input
							type="password"
							placeholder="*****"
							name="password"
							value={values.password}
							onChange={handleInput}
							className="form-input border border-pink-400"></input>
						<button
							type="submit"
							className="btn-login-form">
							Registrate
						</button>
                        
					</form>
					<div className="container flex flex-row w-full gap-2">
						<Link to="/login"
							className="btn-register">
							Ya estoy registrado!
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
export default RegisterScreen;
