import Typography from '@material-ui/core/Typography';
import React from 'react';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import SaveIcon from '@material-ui/icons/Save';
import { Box, FormControl, IconButton, TextField, Tooltip } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class InvoiceCode extends React.Component {

  constructor() {
    super();
    this.state = {
      newCode: '',
      records: []
    };
  }

  componentDidMount() {
    this.loadInvoiceCode();  
  }

  loadInvoiceCode() {
    fetch('http://localhost:5000/api/invoicecode', {
      method: 'GET',
      mode: 'cors',
    })
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        ...this.state,
        records: data.data
      });
    });
  }

  setNewCode(event) {
    this.setState({
      ...this.state,
      newCode: event.target.value
    });
  }

  postInvoiceCode() {
    fetch('http://localhost:5000/api/invoicecode', {
      method: 'POST',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({code: this.state.newCode})
    })
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        ...this.state,
        records: data.data
      });
    });
  }

  render() {
    return (
      <Box className="base-box" p={2} mx={2} elevation={1}>
        <Typography variant="h5" component="h3" className="typo-wo-btn">
          Invoice Code
        </Typography>
        <Divider />
        <div className="scrollable-details">
          <Box m={2}>
            <TableContainer mb={2} component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>No.</TableCell>
                    <TableCell>Invoice Code</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.records.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.invoicecode}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <FormControl fullWidth>
              <TextField id="code"
              value={this.state.newCode}
              onChange={(event) => this.setNewCode(event)}
              label="New Invoice Code" />
            </FormControl>
            <Grid className="align_btn_right" item xs={12} md={12}>
              <Tooltip title="Save" aria-label="Save">
                <IconButton aria-label="Save" onClick={() => this.postInvoiceCode()}>
                  <SaveIcon title="Save" color="primary">
                    Save
                  </SaveIcon>
                </IconButton>
              </Tooltip>
            </Grid>
          </Box>
        </div>
      </Box>
    );
  }
}

export default InvoiceCode;


