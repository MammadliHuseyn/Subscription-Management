import './App.scss';
import { Login } from './components/Login/Login';
import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import SubscribeInfo from './components/SubscribeInfo/SubscribeInfo';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AuthRouter } from './authRoute';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;