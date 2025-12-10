import { useEffect } from "react";
import './itemDetail.scss'

const SkuVariation = ({ setVariant, options }) => {

	const handleSelect = (e) => {
		setVariant(e.target.value);
		console.log(e.target.value);
	};

    // presetea a la la primer opcion para no tener un espacio vacío
    useEffect(()=>{
        setVariant(options[0].value)
    })

	return (
        <select onChange={handleSelect} className="inputSelect">
            {   
                options.map(opt => 
                <option 
                    value={opt.value} 
                    key={opt.label}
                    >
                    {opt.label}
                </option>)
            }
        </select>
    )
    
};
export default SkuVariation;
