import { useContext } from "react";
import "./cart.scss";
import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
	const { cart, vaciarCarrito, totalizador, removeCarrito } =
		useContext(CartContext);

	const CartContent = () => {
		return (
			<>
				<h1 className="text-2xl semibold text-center">
					Detalle de compra
				</h1>
				{cart.map((item) => (
					<div
						key={item.id}
						className="itemcard itemcard_cart max-w-4xl gap-2 flex flex-row justify-around align-middle m-2">
						<div className="flex flex-col w-fit">
							<h1 className="font-bold text-center">
								{item.nombre}
							</h1>
							<img
								className="image_product"
								src={item.imagen}
							/>
						</div>
						<div className="flex flex-col w-fit">
							<p className="text-base text-center">
								{item.descripcion}
							</p>
							<p className="text-base text-center">
								Variante: {item.variant}
							</p>
							<p className="text-base text-center font-semibold">
								Cantidad: {item.cantidad}
							</p>
						</div>
						<div className="totales flex flex-col w-fit">
							<p className="text-base text-center font-semibold">
								Precio: ${item.precio}
							</p>
							<p className="text-base text-center">
								Subtotal: ${item.precio * item.cantidad}
							</p>
						</div>

						<button
							className="btn-remove border border-red-500 text-red-500 bg-none font-bold py-3 px-3 rounded-3xl hover:bg-red-400 hover:text-white focus:outline-none focus:border-red-700 focus:text-gray-100"
							onClick={() => removeCarrito(item.id)}>
							<FiTrash2 />
						</button>
					</div>
				))}
				<div className="container max-w-sm flex-wrap flex-col gap-4">
					<p className="text-base text-center font-semibold">
						Total: ${totalizador()}
					</p>
					<button
						className="btn-remove border border-red-600 text-red-600 bg-none font-bold py-1 px-4 rounded-3xl"
						onClick={vaciarCarrito}>
						Vaciar carrito
					</button>
					<Link
						to="/checkout"
						className="btn-check border border-pink-300 px-4 py-1 text-center bg-red-200 rounded-lg">
						Ir al checkout
					</Link>
				</div>
			</>
		);
	};

	return (
		<>
			<section className="container_cart max-w-6xl flex flex-col flex-wrap justify-center align-middle m-auto p-4">
				{cart.length === 0 ? <h1>empty cart</h1> : <CartContent />}

				{/* <h1 className="text-2xl semibold text-center">
					Detalle de compra
				</h1>
				{
				cart &&
					cart.map((item) => (
						<div
							key={item.id}
							className="itemcard itemcard_cart gap-2 flex flex-row justify-between align-middle m-4 pr-4"
						>
							<h1 className="text-2xl font-bold text-center">
								{item.nombre}
							</h1> 
							<img className="image_product" src={item.imagen} />
							<p className="text-base text-left">
								{item.descripcion}
							</p>

							<div className="totales flex flex-col w-fit">
								<p className="text-base text-center font-semibold">
									Cantidad: {item.cantidad}
								</p>
								<p className="text-base text-center font-semibold">
									Precio: ${item.precio}
								</p>
							</div>
							<p className="text-base text-center font-semibold">
								Subtotal: ${item.precio * item.cantidad}
							</p>
							<button
								className="border-2 border-red-500 text-red-500 bg-none font-bold py-3 px-3 rounded-3xl"
								onClick={() => removeCarrito(item.id)}
							>
								<FiTrash2 />
							</button>
						</div>
					))}
				<div className="container w-auto max-w-sm flex-col">
					<p className="text-base text-center font-semibold">
						Total: ${totalizador()}
					</p>
					<button
						className="border border-red-600 text-red-600 bg-none font-bold py-2 px-6 rounded-3xl"
						onClick={vaciarCarrito}
					>
						Vaciar carrito
					</button>
				</div> */}
			</section>
		</>
	);
};
export default Cart;
