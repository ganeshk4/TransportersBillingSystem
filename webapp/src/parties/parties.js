import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Select from '@material-ui/core/Select';
import SaveIcon from '@material-ui/icons/Save';
import Accordion from '@material-ui/core/Accordion';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import {
  KeyboardDatePicker
} from '@material-ui/pickers';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Box, FormControl, IconButton, TextField, Tooltip } from '@material-ui/core';

class Parties extends React.Component {
  //[expanded, setExpanded] = React.useState(false);
  yourDetails = {
    gstin: '',
    place: '',
    invoice_code: ''
  };
  partyDetails = {
    name: '',
    address: '',
    gstin:''
  };

  contractCriteria = [{
    key: 0,
    text: 'Rate for first 80kms / 8 hrs',
    rate: '',
    uom: ''
  },
  {
    key: 1,
    text: 'Rate for addtional per kms',
    rate: '',
    uom: 'Km'
  },
  {
    key: 2,
    text: 'Charges for extra per hr (Driver & Helper) 2 Person',
    rate: '',
    uom: 'Hour'
  },
  {
    key: 3,
    text: 'Allowance for Driver & Cleaner',
    rate: '',
    uom: 'Hour'
  },
  {
    key: 4,
    text: 'Halting Allowance for',
    rate: '',
    uom: 'Night'
  },
  {
    key: 5,
    text: 'Toll Tax',
    rate: '',
    uom: ''
  },
  {
    key: 6,
    text: 'Parking',
    rate: '',
    uom: ''
  },
  {
    key: 7,
    text: 'Cost of helper',
    rate: '',
    uom: ''
  },
  {
    key: 8,
    text: 'Night duty charges after 12:00 midnight',
    rate: '',
    uom: ''
  },
  {
    key: 9,
    text: 'GPRS Rent',
    rate: '',
    uom: ''
  }];

  kilometerCriteria = {
    km: '',
    rate: ''
  }

  gstCriteria = {
    sgst:'',
    igst:'',
    cgst:''
  }

  allCriteria = {
    contractCriteria: this.contractCriteria,
    kilometerCriteria: this.kilometerCriteria,
    gstCriteria: this.gstCriteria
  };

  constructor() {
    super();
    this.state = {
      partyConfig: {
        yourDetails: this.yourDetails,
        partyDetails: this.partyDetails,
        allCriteria: this.allCriteria,
      },
      expandedParent: 'parties',
      expandedChild: 'panel',
      showAddNew: false
    }
  }

  handleChangeP(panel) {
    this.setState({
      partyConfig: this.state.partyConfig,
      expandedParent: panel,
      expandedChild: this.state.expandedParent,
      showAddNew: this.state.showAddNew
    });
  };

  handleChangeC(panel) {
    this.setState({
      partyConfig: this.state.partyConfig,
      expandedParent: this.state.expandedParent,
      expandedChild: panel,
      showAddNew: this.state.showAddNew
    });
  };

  addNewClick() {
    this.setState({
      partyConfig: this.state.partyConfig,
      expandedParent: 'addnew',
      expandedChild: 'panel1',
      showAddNew: true
    });
  }

  yourDetailsChange(event, id) {
    const partyConfig = this.state.partyConfig;
    partyConfig.yourDetails[id] = event.target.value;
    this.setState({
      partyConfig: partyConfig,
      expandedParent: this.state.expandedParent,
      expandedChild: this.state.expandedChild,
      showAddNew: this.state.showAddNew
    });
  }

  partyDetailsChange(event, id) {
    const partyConfig = this.state.partyConfig;
    partyConfig.partyDetails[id] = event.target.value;
    this.setState({
      partyConfig: partyConfig,
      expandedParent: this.state.expandedParent,
      expandedChild: this.state.expandedChild,
      showAddNew: this.state.showAddNew
    });
  }

  updateKilometerCriteria(event, id) {
    const partyConfig = this.state.partyConfig;
    partyConfig.allCriteria.kilometerCriteria[id] = event.target.value;
    this.setState({
      partyConfig: partyConfig,
      expandedParent: this.state.expandedParent,
      expandedChild: this.state.expandedChild,
      showAddNew: this.state.showAddNew
    });
  }

  updateContractCriteria(event, key, id) {
    const partyConfig = this.state.partyConfig;
    partyConfig.allCriteria.contractCriteria[key][id] = event.target.value;
    this.setState({
      partyConfig: partyConfig,
      expandedParent: this.state.expandedParent,
      expandedChild: this.state.expandedChild,
      showAddNew: this.state.showAddNew
    });
  }

  updateGstCriteria(event, id) {
    const partyConfig = this.state.partyConfig;
    partyConfig.allCriteria.gstCriteria[id] = event.target.value;
    this.setState({
      partyConfig: partyConfig,
      expandedParent: this.state.expandedParent,
      expandedChild: this.state.expandedChild,
      showAddNew: this.state.showAddNew
    });
  }

  saveNew() {
    console.log(this.state);
  }

  render() {
    return (
      <Box className="base-box" p={2} mx={2} elevation={1}>
        <Typography variant="h5" component="h3" className="typo-with_btn">
          Parties &nbsp;&nbsp;&nbsp;
          <Tooltip title="Add New Party" aria-label="add">
            <IconButton onClick={() => this.addNewClick()} aria-label="add">
              <AddCircleIcon title="Add New Party" color="primary">
                Add
              </AddCircleIcon>
            </IconButton>
          </Tooltip>
        </Typography>
        <Divider />
        <div className="scrollable-details">
          <Accordion expanded={this.state.expandedParent === 'parties'} onChange={() => this.handleChangeP('parties')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
              <Typography variant="h6" component="h6">
                Party List
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box style={{ width: '100%' }}></Box>
            </AccordionDetails>
          </Accordion>
          <Accordion
            hidden={!this.state.showAddNew}
            expanded={this.state.expandedParent === 'addnew'}
            onChange={() => this.handleChangeP('addnew')}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
              <Typography className="typo-with_btn" variant="h6" component="h6">
                Add New&nbsp;&nbsp;&nbsp;
                <Tooltip title="Save" aria-label="save">
                  <IconButton onClick={() => this.saveNew()} aria-label="save">
                    <SaveIcon title="Save" color="primary">
                      Save
                    </SaveIcon>
                  </IconButton>
                </Tooltip>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box style={{ width: '100%' }}>
                <Accordion expanded={this.state.expandedChild === 'panel1'} onChange={() => this.handleChangeC('panel1')}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                    <Typography variant="h6" component="h6">
                      Your details
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box style={{ width: '100%' }}>
                      <FormControl fullWidth>
                        <TextField
                          value={this.state.partyConfig.yourDetails.gstin}
                          onChange={(event) => this.yourDetailsChange(event, 'gstin')}
                          id="gstin"
                          label="GSTIN"
                        />
                      </FormControl>
                      <FormControl fullWidth>
                        <TextField
                          value={this.state.partyConfig.yourDetails.place}
                          onChange={(event) => this.yourDetailsChange(event, 'place')}
                          id="place"
                          label="Place of supply state"
                        />
                      </FormControl>
                      <FormControl fullWidth>
                      <InputLabel id="select-invoice-code">Select invoice code</InputLabel>
                        <Select labelId="select-invoice-code" id="select-invoice">
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                      {/* <FormControl fullWidth>
                        <TextField
                          value={this.state.partyConfig.yourDetails.invoice_code}
                          onChange={(event) => this.yourDetailsChange(event, 'invoice_code')}
                          id="invoicecode"
                          label="Invoice code"
                        />
                      </FormControl> */}
                    </Box>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={this.state.expandedChild === 'panel2'} onChange={() => this.handleChangeC('panel2')}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                    <Typography variant="h6" component="h6">
                      Party details
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box style={{ width: '100%' }}>
                      <FormControl fullWidth>
                        <TextField
                          value={this.state.partyConfig.partyDetails.name}
                          onChange={(event) => this.partyDetailsChange(event, 'name')}
                          id="name"
                          label="Party Name"
                        />
                      </FormControl>
                      <FormControl fullWidth>
                        <TextField
                          value={this.state.partyConfig.partyDetails.address}
                          onChange={(event) => this.partyDetailsChange(event, 'address')}
                          id="billingadd"
                          label="Billing address"
                        />
                      </FormControl>
                      <FormControl fullWidth>
                        <TextField
                          value={this.state.partyConfig.partyDetails.gstin}
                          onChange={(event) => this.partyDetailsChange(event, 'gstin')}
                          id="gstuniq"
                          label="GSTIN / Unique Id"
                        />
                      </FormControl>
                    </Box>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={this.state.expandedChild === 'panel3'} onChange={() => this.handleChangeC('panel3')}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                    <Typography variant="h6" className="typo-with_btn" component="h6">
                      Contract details
                    </Typography>
                    &nbsp;&nbsp;&nbsp;
                    <Tooltip title="Add New Contract" aria-label="add">
                      <IconButton aria-label="add">
                        <AddCircleIcon title="Add" color="primary">
                          Add
                        </AddCircleIcon>
                      </IconButton>
                    </Tooltip>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box style={{ width: '100%' }}>
                      <FormControl fullWidth>
                        <KeyboardDatePicker
                          views={["year", "month"]}
                          format="MMM/YYYY"
                          id="date-picker-dialog"
                          label="Contract Start Date"
                          KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}
                        />
                      </FormControl>
                      <FormControl fullWidth>
                        <TextField
                          value={this.state.partyConfig.allCriteria.kilometerCriteria.km}
                          onChange={(event) => this.updateKilometerCriteria(event, 'km')}
                          label="Contract Kilometers"
                        />
                      </FormControl>
                      <FormControl fullWidth>
                        <TextField
                          value={this.state.partyConfig.allCriteria.kilometerCriteria.rate}
                          onChange={(event) => this.updateKilometerCriteria(event, 'rate')}
                          label="Base Rate"
                        />
                      </FormControl>
                      <FormControl fullWidth>
                        <TextField
                          value={this.state.partyConfig.allCriteria.gstCriteria.sgst}
                          onChange={(event) => this.updateGstCriteria(event, 'sgst')}
                          label="S.GST"
                        />
                      </FormControl>
                      <FormControl fullWidth>
                        <TextField
                          value={this.state.partyConfig.allCriteria.gstCriteria.igst}
                          onChange={(event) => this.updateGstCriteria(event, 'igst')}
                          label="I.GST"
                        />
                      </FormControl>
                      <FormControl fullWidth>
                        <TextField
                          value={this.state.partyConfig.allCriteria.gstCriteria.cgst}
                          onChange={(event) => this.updateGstCriteria(event, 'cgst')}
                          label="C.GST"
                        />
                      </FormControl>
                      {this.state.partyConfig.allCriteria.contractCriteria.map((criteria) => {
                        const key1 = criteria.key + 'r';
                        const key2 = criteria.key + 'u';
                        return (
                          <div key={criteria.key}>
                            <Typography style={{ marginTop: '2rem' }}>{criteria.text}</Typography>
                            <FormControl key={key1} fullWidth>
                              <TextField
                                value={this.state.partyConfig.allCriteria.contractCriteria[criteria.key].rate}
                                onChange={(event) => this.updateContractCriteria(event, criteria.key, 'rate')}
                                label="Rate"
                              />
                            </FormControl>
                            <FormControl key={key2}>
                              <TextField
                                value={this.state.partyConfig.allCriteria.contractCriteria[criteria.key].uom}
                                onChange={(event) => this.updateContractCriteria(event, criteria.key, 'uom')}
                                label="UOM"
                              />
                            </FormControl>
                          </div>
                        );
                      })}
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </AccordionDetails>
          </Accordion>
        </div>
      </Box>
    );
  }
}

export default Parties;


