import { BrowserRouter, Route, Switch } from "react-router-dom";

import Chart from "./Template/Chart";
import Home from "./Template/Home/Home"
import Login from "./Template/Login/Login";
import AdminPage from "./components/Admin/Dashboard/Dashboard";
import AdminScreen from "./Template/Admin";
function App() {
	return (
		<BrowserRouter>
			<Switch>

				<AdminScreen exact path="/admin/dashboard" Component={AdminPage} />
				<Home exact path="/home" Component={Chart} />
				<Route exact path="/login" component={Login} />
				<Home exact path="/" Component={Chart} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
