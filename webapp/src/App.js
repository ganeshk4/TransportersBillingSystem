import WrapperPage from './wrapper-page/wrapper-page'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './login/login';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/">
          <WrapperPage></WrapperPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
