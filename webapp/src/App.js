import WrapperPage from './wrapper-page/wrapper-page';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

// pick a date util library
import MomentUtils from '@date-io/moment';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './login/login';
import './App.css';

function App() {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
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
    </MuiPickersUtilsProvider>
  );
}

export default App;
