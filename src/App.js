import React from 'react';
import PokemonsPageConnector from "./pages/PokemonsPage/PokemonsPageConnector";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
          <div className="navbar">
            <Link className="link" to="/">Pokemons</Link>
            <Link className="link" to="/todos">Todos</Link>
          </div>
          <Switch>
            <Route path= '/' exact>
              <PokemonsPageConnector/>
            </Route>
          </Switch>

      </div>
    </Router>
  );
}

export default App;
