import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import LoginScreen from "../components/LoginScreen/LoginScreen";
import Contacto from "../components/Contacto/Contacto";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Cart from "../components/Cart/Cart";
import { Footer } from "../components/Footer/Footer";
import CategoryNavbar from "../components/CategoryNavbar/CategoryNavbar";
import RegisterScreen from "../components/LoginScreen/RegisterScreen";
import { AuthContext } from "../context/AuthContext";
import { Checkout } from "../components/Checkout/Checkout";
import { useContext } from "react";

const AppRouter = () => {

    const { user } = useContext(AuthContext)

    return(

		<BrowserRouter>

				{
					user.logged
					?
					<>
					<Navbar />
					<CategoryNavbar />
					<Header />
					<Routes>
						<Route path="/" element={<ItemListContainer />} />
						<Route path="/shop/:category" element={<ItemListContainer />}/>
						<Route path="/cart?/checkout" element={<Checkout />}/>
						<Route path="/contacto" element={<Contacto />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/detail/:itemId" element={<ItemDetailContainer />}/>
						<Route path="*" element={<Navigate to={"/"} />} />
						{/* <Route path="*" element={<Error404 />}/> */}

					</Routes>
					<Footer />
					</>
					:
					<>
					<Routes>
						<Route path="/login" element={<LoginScreen />} />
						<Route path="/register" element={<RegisterScreen />} />
						<Route path="*" element={<Navigate to={"/login"} />} />
						
					</Routes>
					</>
				}

			</BrowserRouter>
    )
}
export default AppRouter
