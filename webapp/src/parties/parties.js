import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
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
    text: 'Rate for first 80kms / 8 hrs',
    rate: '',
    uom: ''
  },
  {
    text: 'Rate for addtional per kms',
    rate: '',
    uom: 'Kms'
  },
  {
    text: 'Charges for extra per hr (Driver & Helper) 2 Person',
    rate: '',
    uom: 'Hour'
  },
  {
    text: 'Allowance for Driver & Cleaner',
    rate: '',
    uom: 'Hour'
  },
  {
    text: 'Halting Allowance for',
    rate: '',
    uom: 'Night'
  },
  {
    text: 'Toll Tax',
    rate: '',
    uom: ''
  },
  {
    text: 'Parking',
    rate: '',
    uom: ''
  },
  {
    text: 'Cost of helper',
    rate: '',
    uom: ''
  },
  {
    text: 'Night duty charges after 12:00 midnight',
    rate: '',
    uom: ''
  },
  {
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

  handleChange(panel) {
    this.setState({
      partyConfig: this.state.partyConfig,
      expanded: panel
    });
  };

  constructor() {
    super();
    this.state = {
      partyConfig: {
        yourDetails: this.yourDetails,
        partyDetails: this.partyDetails,
        allCriteria: this.allCriteria,
      },
      expanded: 'panel2'
    }
  }

  render() {
    return (
      <Box className="base-box" p={2} mx={2} elevation={1}>
        <Typography variant="h5" component="h3" className='typo-with_btn'>
          Add Party &nbsp;&nbsp;&nbsp;
          <Tooltip title="Add" aria-label="add">
                <IconButton aria-label="add">
                  <AddCircleIcon title="Add" color="primary">
                    Add
                  </AddCircleIcon>
                </IconButton>
              </Tooltip>
        </Typography>
        <Divider />
        <div className="scrollable-details">
        <Accordion expanded={this.state.expanded === 'panel1'} onChange={() => this.handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography variant="h6" component="h6">Your details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box style={{width: '100%'}}>
            <FormControl fullWidth>
                <TextField value={this.state.value} onChange={this.handleChange} id="gstin" label="GSTIN" />
              </FormControl>
              <FormControl fullWidth>
                <TextField id="place" label="Place of supply state" />
              </FormControl>
              <FormControl fullWidth>
                <TextField id="invoicecode" label="Invoice code" />
              </FormControl>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={this.state.expanded === 'panel2'} onChange={() => this.handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography variant="h6" component="h6">Party details</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Box style={{width: '100%'}}>
            <FormControl fullWidth>
                <TextField id="name" label="Party Name" />
              </FormControl>
              <FormControl fullWidth>
                <TextField id="billingadd" label="Billing address" />
              </FormControl>
              <FormControl fullWidth>
                <TextField id="gstuniq" label="GSTIN / Unique Id" />
              </FormControl>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={this.state.expanded === 'panel3'} onChange={() => this.handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography variant="h6" className='typo-with_btn' component="h6">Contract details</Typography>&nbsp;&nbsp;&nbsp;
            <Tooltip title="Add New Contract" aria-label="add">
                <IconButton aria-label="add">
                  <AddCircleIcon title="Add" color="primary">
                    Add
                  </AddCircleIcon>
                </IconButton>
              </Tooltip>
          </AccordionSummary>
          <AccordionDetails>
            {

            }
          </AccordionDetails>
        </Accordion>
        </div>
      </Box>
    );
  }
}

export default Parties;


