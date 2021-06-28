import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import AuthenticationPage from "./pages/authentication/authentication.component";

function App() {
	return (
		<div>
      <Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route path="/authenticate" component={AuthenticationPage} />
			</Switch>
		</div>
	);
}

export default App;
