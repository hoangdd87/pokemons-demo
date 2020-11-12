import React, { Suspense } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import routes from '../routes';

const App = () => {
  return (
    <Router>
      <Suspense fallback={ <div>Loading...</div> }>
        <>
          <div className="navbar">
            <Link className="link" to="/">Pokemons</Link>
            <Link className="link" to="/todos">Todos</Link>
          </div>
          <Switch>
            {
              routes.map(route => (
                <Route
                  key={ route.path }
                  path={ route.path }
                  exact={ route.exact }
                  component={ route.component }
                />))
            }
          </Switch>
        </>
      </Suspense>
    </Router>
  );
}

export default App;
