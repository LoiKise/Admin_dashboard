import { BrowserRouter, Route, Switch } from "react-router-dom";

import Chart from "./Template/Chart";
import Header from "./Layouts/Header";
import Home from "./Template/Home/Home"
import Login from "./Template/Login/Login";

function App() {
	return (
		<BrowserRouter>
      <Switch>
       
				<Home exact path="/home" Component={Chart} />
        <Route exact path="/login" component={Login} />
        <Home exact path="/" Component={Chart} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
