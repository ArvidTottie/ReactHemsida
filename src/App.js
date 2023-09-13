import Home from "./pages/Home";
import Meny from "./pages/Meny";
import Beställ from "./pages/beställ";
import Omoss from "./pages/Omoss";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Meny" component={Meny} />
                <Route path="/beställ" component={Beställ} />
                <Route path="/Omoss" component={Omoss} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;