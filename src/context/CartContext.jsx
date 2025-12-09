import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

	const [cart, setCart] = useState(() => {
		try {
			const storaged = localStorage.getItem("cart_storage");
			return storaged ? JSON.parse(storaged) : []
		} catch (error) {
			return [];
		}
	});

	useEffect(()=> {
		localStorage.setItem("cart_storage", JSON.stringify(cart))
	}, [cart])
	
	// se pasa al provider la funcion
	const agregarCarrito = (item) => {
		setCart([...cart, item]);
	}

	const itemRepeat = (id) => {
		return cart.some((item) => item.id === id);
	}
	const vaciarCarrito = (id) => {
		setCart([])
	}
	const removeCarrito = (id) => {
		setCart(cart.filter((item) => item.id !== id))
	}
	// cantidad total de items
	const totalCantidad = () => {
		return cart.reduce((acc, item) => acc + item.cantidad, 0)
	}
	// valor final de la compra
	const totalizador = () => {
		return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
	}

	// custom provider
	// BrowserRouter y todo lo demás se pasan como children
    return (
        <CartContext.Provider
		value={{
			cart,
			agregarCarrito,
			removeCarrito,
			vaciarCarrito,
			totalCantidad,
			totalizador,
			itemRepeat,
		}}
	>
		{children}
	</CartContext.Provider>
    )
	
};