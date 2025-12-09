import product_data from "../data/productos";

export const pedirDatos = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(product_data)
			reject("error")
		}, 2000);
	})
};