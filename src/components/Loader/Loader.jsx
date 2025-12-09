import "./loader.scss";
// import { useState } from "react";

const Loader = () => {
	// const [loading, setLoading] = useState[true];

	return (
		<>
			<div className="loader h-full m-auto">
				<h1 className="animate-bounce font-bold text-2xl">
					<div className="pink"></div>
				</h1>
			</div>
		</>
	);
};
export default Loader