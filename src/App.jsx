import "./App.css";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { useContext } from "react";
import AppRouter from "./router/AppRouter";

function App() {
	return (
		<section className="Main">
			<AuthProvider>
				<CartProvider>
					<AppRouter />
				</CartProvider>
			</AuthProvider>
		</section>
	);
}

export default App;
