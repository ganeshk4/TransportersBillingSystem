
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useHistory } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import LogBook from '../logbook/logbook'
import Parties from '../parties/parties';
import Bills from '../bills/bills';
import Profile from '../profile/profile';
import GstHead from '../gsthead/gsthead';
import Drivers from '../drivers/drivers';
import Vehicles from '../vehicles/vehicles';
import InvoiceCode from '../invoicecode/invoicecode';

import './wrapper-page.css';

function WrapperPage() {
  const history = useHistory();
  const handleChange = (event, newValue) => {
    history.push(newValue);
  }
  return (
    <Router>
      <Paper className={'page-nav'} elevation={0}>
      <AppBar position="static">
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value="gsthead"
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <Tab value="gsthead" label="GST Head" to="/gsthead" component={Link}  />
          <Tab value="invoicecode" label="Invoice Code" to="/invoicecode" component={Link}  />
          <Tab value="vehicle" label="Vehicle List" to="/vehicles" component={Link}  />
          <Tab value="driver" label="Drivers List" to="/drivers" component={Link}  />
          <Tab value="profile" label="Profile" to="/profile" component={Link} />
          <Tab value="add-party" label="Parties" to="/parties" component={Link} />
          <Tab value="logbook" label="Log Book" to="/logbook" component={Link}  />
          <Tab value="bills" label="Generate Bills" to="/bills" component={Link} />
        </Tabs>
      </AppBar>
      
      </Paper>
      <div className='page-content'> 
        <Switch>
          <Route path="/gsthead">
            <GstHead></GstHead>
          </Route>
          <Route path="/drivers">
            <Drivers></Drivers>
          </Route>
          <Route path="/vehicles">
            <Vehicles></Vehicles>
          </Route>
          <Route path="/invoicecode">
            <InvoiceCode></InvoiceCode>
          </Route>
          <Route path="/logbook">
            <LogBook></LogBook>
          </Route>
          <Route path="/bills">
            <Bills></Bills>
          </Route>
          <Route path="/parties">
            <Parties></Parties>
          </Route>
          <Route path="/profile">
            <Profile></Profile>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default WrapperPage;


