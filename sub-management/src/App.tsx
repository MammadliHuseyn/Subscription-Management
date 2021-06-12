import './App.scss';
import { Login } from './components/Login/Login';
import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AuthRouter } from './authRoute';


function App() {
  return (
    <Router>
      <Switch>
        <AuthRouter exact path="/">
          <Main />
        </AuthRouter>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;