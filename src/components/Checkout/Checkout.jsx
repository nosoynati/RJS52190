import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

export const Checkout = () => {
	const { cart, totalizador, vaciarCarrito } = useContext(CartContext);
	const { user } = useContext(AuthContext);

	const [values, setValues] = useState({
		nombre: "",
		direccion: "",
		email: user.email,
	});
	const [orderId, setOrderId] = useState(null);
	// const user = {
	//     nombre: "",
	//     edad: null
	// }
	// const prop = user
	// // [] -> selector dinamico
	// user[prop] = ["fernando", 12]
	// console.log(user[prop])

	const handleInput = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};
	const cartItemsMap = () => {
		return cart.map((item) => ({
			id: item.id,
			nombre: item.nombre,
			variante: item.variant,
			precio: item.precio,
			cantidad: item.cantidad,
		}));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(e)
		const { nombre, direccion, email } = values;

		if (nombre.length < 5) {
			alert("nombre demasiado corto");
			return;
		}
		let dire = direccion.split(" ");
		console.log(dire.length);
		if (dire.length < 2) {
			alert("direccion invalida");
			return;
		}

		const orden = {
			client: values,
			items: cartItemsMap(),
			toalCompra: totalizador(),
			timeStamp: new Date().toLocaleString(),
		};
		console.log("orden: ", orden);

		// llamada a la referencia en firestore (sync)
		const orderDbRef = collection(db, "orders");
		// lamada a addDoc (async)
		setTimeout(() => {
			addDoc(orderDbRef, orden)
				.then((doc) => {
					setOrderId(doc.id);
					vaciarCarrito();
				})
				.catch((err) => console.log(err));
		}, 2000);
	};

	const CopmpleteOrder = () => {
		return (
			<>
			<div className="container flex flex-row flex-wrap justify-center max-w-lg align-middle m-auto">

				<h3>Tu orden fue se completó exitosamente!</h3>
				<Link to="/" className=" text-indigo-500 font-semibold hover:text-indigo-600">Volver a la página principal</Link>
			</div>
			</>
		)
	}
	if (orderId) {
		return (
			<CopmpleteOrder />
		)
	}

	return (
		<>
			<section className="container flex w-full flex-col max-w-2xl justify-center align-middle m-auto bg-red-100 p-8 rounded-lg">
				<h2>Finalizar compra</h2>
				<div className="w-full max-w-2xl">
					<form
						className="flex flex-col"
						onSubmit={handleSubmit}>
						<label>Nombre</label>
						<input
							type="text"
							placeholder="nombre"
							name="nombre"
							value={values.nombre}
							onChange={handleInput}
							className="form-input border border-pink-400"
						/>
						<label>Dirección</label>
						<input
							type="text"
							placeholder="Ej: Calle Falsa"
							name="direccion"
							onChange={handleInput}
							value={values.direccion}
							className="form-input border border-pink-400"
						/>
						<label>Email</label>
						<input
							type="email"
							placeholder="Ej: juanito@abc.com"
							name="email"
							onChange={handleInput}
							value={values.email}
							className="form-input border border-pink-400"
						/>
						<button
							type="submit"
							className="btn-login-form">
							Finalizar
						</button>
					</form>
					<div className="container flex flex-row w-full gap-2">
						<Link
							to="/cart"
							className="btn-register">
							Regresar
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};
