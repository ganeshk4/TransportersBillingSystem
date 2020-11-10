import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Grid from '@material-ui/core/Grid';
import SaveIcon from '@material-ui/icons/Save';
import { Box, FormControl, IconButton, TextField, Tooltip } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import {
  KeyboardDatePicker
} from '@material-ui/pickers';
import Select from '@material-ui/core/Select';


function LogBook() {
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
        Log Book
      </Typography>
      <Divider />
      <div className="scrollable-details">
        <Box m={2}>
          <Typography variant="h6" component="h6">
            View Logs&nbsp;&nbsp;&nbsp;
            <Tooltip title="Add" aria-label="add">
              <IconButton aria-label="add">
                <AddCircleIcon title="Add" color="primary">
                  Add
                </AddCircleIcon>
              </IconButton>
            </Tooltip>
            
          </Typography>
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
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  format="DD/MM/YYYY"
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </FormControl>
            </Grid>
            </Grid>
            </Box>
            <Divider mt={2} />
            <Box mt={2}>
            <Grid container>
            
            <Grid item xs={12} md={9}>
              <FormControl fullWidth>
                <InputLabel id="select-criteria-label">Select Criteria</InputLabel>
                <Select labelId="select-criteria" id="select-criteria">
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <TextField id="name" label="Expense in Rupees" />
              </FormControl>
            </Grid>
            <Grid className='align_btn_right' item xs={12} md={12}>
            <Tooltip title="Save" aria-label="save">
              <IconButton aria-label="save">
                <SaveIcon title="Save" color="primary">
                  Save
                </SaveIcon>
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

export default LogBook;


