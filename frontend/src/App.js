import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Brands from "./pages/Brands";
import Users from "./pages/Users";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/brands" component={Brands} />
        <Route path="/users" component={Users} />
      </Switch>
    </>
  );
}

export default App;
