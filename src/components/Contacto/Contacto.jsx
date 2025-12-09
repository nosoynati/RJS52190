import "./contacto.scss";
import { useState } from "react";


const Contacto = () => {

	const [values, setValues] = useState({
		nombre: '',
		email: '',
		coment: ''
	});
	
    const handleForm = (e) => {
		// target.name selecciona los inputs según su prop 'name'
        console.log(e.target.name)

		// el spread resplica los valores anteriores para conservar aquellos que no cambian
		setValues({
			...values,
			// setea con el 'value' del input q haya cambiado según su 'name'
			[e.target.name] : e.target.value

		})
	};
	
	const handleSubmit = (e) => {
		e.preventDefault();
		const fecha = new Date()
		const ahora = fecha.getDate().toLocaleString()
		console.log(e);
	};
    
	return (
		<section className="container w-full flex-col max-w-lg justify-center align-middle container_contacto">
			<h1 className="font-semibold text-xl">Contacto</h1>
			<div className="w-full max-w-lg">
				<form
					className="my-form flex flex-col"
					onSubmit={handleSubmit}>
					<label>Nombre</label>
					<input  
						name="nombre"
						className="form-input"
						type="text"
						placeholder="nombre"
						value={values.nombre}
						onChange={handleForm}
					></input>
					<label>Email</label>
					<input 
						name="email"
						className="form-input"
						type="email"
						placeholder="email"
						value={values.email}
                        onChange={handleForm}
					></input>
					<label>Comentarios</label>
					<textarea
						name="coment"
						className="form-input border-solid border-red-500 rounded-lg focus:outline-none"
						type="text"
						value={values.coment}
						placeholder="comentarios"
                        onChange={handleForm}
					/>
					<button className="button-form py-2 rounded-lg focus:outline-none">
						Enviar
					</button>
				</form>
			</div>
		</section>
	);
};
export default Contacto;
