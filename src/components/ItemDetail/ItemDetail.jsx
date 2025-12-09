import { useContext, useState } from "react";
import { ButtonAdd } from "../ButtonAdd/ButtonAdd";
import "./itemDetail.scss";
import { Link } from "react-router-dom";
import SkuVariation from "./SkuVariation";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
	const { agregarCarrito, itemRepeat } = useContext(CartContext);

	itemRepeat(item.id);

	const {
		id,
		nombre,
		category,
		imagen,
		long_descripcion,
		talle,
		variants,
		precio,
		stock,
	} = item;

	const [cantidad, setCantidad] = useState(1);
	const [variant, setVariant] = useState(null);

	const handleAdd = () => {
		const newItem = {
			...item,
			cantidad,
			variant,
		};
		agregarCarrito(newItem);
	};

	return (
		<section className="item-detail-card container m-auto align-top mnax-w-full">
			<article className="left_side w-1/2 flex flex-wrap">
				<figure>
					<img
						className="image_product"
						src={imagen}
						alt="imagen del producto"
					/>
				</figure>
			</article>
			<article className="right_side w-1/2 mt-12">
				<Link
					to={`/shop/${category}`}
					className="categoria_item text-red-400 font-semibold text-base"
				>
					×{category}
				</Link>
				<h1 className="text-2xl font-bold text-center pb-4">
					{nombre}
				</h1>
				<p className="text-base py-2">{long_descripcion}</p>
				{
					talle !== "-" 
					? <p className="text-base py-2">Talle: {talle}</p> 
					: <p className="hidden"></p>
				}
				
				<p className="text-base font-semibold py-2">
					Precio: ${precio}
				</p>
				<p className="text-base py-2">Variantes: </p>
				<div className="buttons container flex flex-col">
					<SkuVariation setVariant={setVariant} options={variants} />
					{
					itemRepeat(id) 
					? (
						<Link className="btn__add" to="/cart">
							Ver mi compra
						</Link>
					) 
					: (
						<ButtonAdd
							cantidad={cantidad}
							setCantidad={setCantidad}
							stock={stock}
							variant={setVariant}
							agregar={handleAdd}
						/>
					)}
				</div>
			</article>
		</section>
	);
};
export default ItemDetail;
