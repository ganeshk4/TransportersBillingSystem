import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SaveIcon from '@material-ui/icons/Save';
import React from 'react';
import { Box, FormControl, IconButton, TextField, Tooltip } from '@material-ui/core';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      profile: {
        id: null,
        name: '',
        title: '',
        address: '',
        telephone: '',
        hsn: '',
      },
      banks: [],
      newBank: {
        id: null,
        acName: '',
        bankName: '',
        bankNumber: '',
        ifsc: '',
        branch: '',
      }
    };
  }

  componentDidMount() {
    this.getProfileDetails();
  }

  createView(data) {
    const banks = [];
      if (!data) {
        data = {bank_details: []}
      }
      for (let i = 0; i < data.bank_details.length; i++) {
        banks.push({
          acName: data.bank_details[i].ac_name,
          bankName: data.bank_details[i].bank_name,
          bankNumber: data.bank_details[i].bank_ac_number,
          branch: data.bank_details[i].branch,
          ifsc: data.bank_details[i].ifsc,
        });
      }
      this.setState({
        profile: {
          id: data.id || null,
          name: data.name,
          title: data.title,
          address: data.address,
          telephone: data.telephone_and_email,
          hsn: data.hsn,
        },
        banks: banks,
        newBank: {
          id: null,
          acName: '',
          bankName: '',
          bankNumber: '',
          ifsc: '',
          branch: '',
        }
      });
  }

  getProfileDetails() {
    fetch('http://localhost:5000/api/profile', {
      method: 'GET',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((res) => res.json())
    .then((data) => {
      this.createView(data);
    });
  }

  postProfileDetails() {
    fetch('http://localhost:5000/api/profile', {
      method: 'POST',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({profile: this.state.profile, bankDetails: this.state.newBank})
    })
    .then((res) => res.json())
    .then((data) => {
      this.createView(data);
    });
  }
  
  setProfileDetails(event, key) {
    const state = this.state;
    state.profile[key] = event.target.value;
    this.setState(state);
  }

  setBankDetails(event, key) {
    const state = this.state;
    state.newBank[key] = event.target.value;
    this.setState(state);
  }

  render() {
    return (
      <Box className="base-box" p={2} mx={2} elevation={1}>
        <Typography
          variant="h5"
          component="h3"
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Profile &nbsp;&nbsp;&nbsp;
          <Tooltip title="Save" aria-label="save">
            <IconButton aria-label="save" onClick={() => this.postProfileDetails()}>
              <SaveIcon title="Save" color="primary">
                Save
              </SaveIcon>
            </IconButton>
          </Tooltip>
        </Typography>
        <Divider />
        <div className="scrollable-details">
          <Box m={2}>
            <Typography variant="h6" component="h6">
              Personal Details
            </Typography>
            <FormControl fullWidth>
              <TextField id="name"
              value={this.state.profile.name}
              onChange={(event) => this.setProfileDetails(event, 'name')}
              label="Name" />
            </FormControl>
            <FormControl fullWidth>
              <TextField id="btitle" 
              value={this.state.profile.title}
              onChange={(event) => this.setProfileDetails(event, 'title')}
              label="Business title" />
            </FormControl>
            <FormControl fullWidth>
              <TextField id="address"
              value={this.state.profile.address}
              onChange={(event) => this.setProfileDetails(event, 'address')}
              label="Address" />
            </FormControl>
            <FormControl fullWidth>
              <TextField id="teltitle"
              value={this.state.profile.telephone}
              onChange={(event) => this.setProfileDetails(event, 'telephone')}
              label="Telephone and Email" />
            </FormControl>
            <FormControl fullWidth>
              <TextField id="hsn"
              value={this.state.profile.hsn}
              onChange={(event) => this.setProfileDetails(event, 'hsn')}
              label="HSN / SAC" />
            </FormControl>
          </Box>
          <Divider />
          <Box m={2}>
            <Typography
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
              variant="h6"
              component="h6"
            >
              <span>Bank A/C Details</span>
            </Typography>
              {
                this.state.banks.map((bank, index) => (
                  <Box key={index} p={2} border={1} borderColor="grey.500" borderRadius={2} m={2}>
                    <Typography>{bank.acName}</Typography>
                    <Typography>{bank.bankName}</Typography>
                    <Typography>A/c No: {bank.bankNumber} & IFSC Code: {bank.ifsc} Branch: {bank.branch}</Typography>
                  </Box>
                ))
              }
            <FormControl fullWidth>
              <TextField id="acname"
              value={this.state.newBank.acName}
              onChange={(event) => this.setBankDetails(event, 'acName')}
              label="A/C Name" />
            </FormControl>
            <FormControl fullWidth>
              <TextField id="bankname"
              value={this.state.newBank.bankName}
              onChange={(event) => this.setBankDetails(event, 'bankName')}
              label="Bank Name" />
            </FormControl>
            <FormControl fullWidth>
              <TextField id="bankacno" 
              value={this.state.newBank.bankNumber}
              onChange={(event) => this.setBankDetails(event, 'bankNumber')}
              label="Bank A/C No." />
            </FormControl>
            <FormControl fullWidth>
              <TextField id="ifsc"
              value={this.state.newBank.ifsc}
              onChange={(event) => this.setBankDetails(event, 'ifsc')}
              label="IFSC Code" />
            </FormControl>
            <FormControl fullWidth>
              <TextField id="branch"
              value={this.state.newBank.branch}
              onChange={(event) => this.setBankDetails(event, 'branch')}
              label="Branch" />
            </FormControl>
          </Box>
        </div>
      </Box>
    );
  }
}

export default Profile;
