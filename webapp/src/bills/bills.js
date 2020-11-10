import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import PrintIcon from '@material-ui/icons/Print';
import Grid from '@material-ui/core/Grid';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Box, FormControl, IconButton, TextField, Tooltip } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import {
  KeyboardDatePicker
} from '@material-ui/pickers';
import Select from '@material-ui/core/Select';


function Bills() {
  return (
    <Box className="base-box" p={2} mx={2} elevation={1}>
      <Typography
        variant="h5"
        component="h3"
        style={{
          display: 'flex',
          height: '3rem',
          alignItems: 'center',
        }}
      >
        Generate Bills
      </Typography>
      <Divider />
      <div className="scrollable-details">
        <Box m={2}>
          <Box>
          <Grid container>
            <Grid item xs={12} md={9}>
              <FormControl fullWidth>
                <InputLabel id="select-party-label">Select Party</InputLabel>
                <Select labelId="select-party-label" id="select-party">
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <KeyboardDatePicker
                  views={["year", "month"]}
                  format="MMM/YYYY"
                  id="date-picker-dialog"
                  label="Billing Month"
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </FormControl>
            </Grid>
            <Grid className='align_btn_right' item xs={12} md={12}>
            <Tooltip title="Print" aria-label="Print">
              <IconButton aria-label="Print">
                <PrintIcon title="Print" color="primary">
                  Print
                </PrintIcon>
              </IconButton>
            </Tooltip>
            <Tooltip title="Show Bill" aria-label="Show Bill">
              <IconButton aria-label="Show Bill">
                <VisibilityIcon title="Show Bill" color="primary">
                  Print
                </VisibilityIcon>
              </IconButton>
            </Tooltip>
            
            </Grid>
            </Grid>
            </Box>
        </Box>
      </div>
    </Box>
  );
}

export default Bills;


