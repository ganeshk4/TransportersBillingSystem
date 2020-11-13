import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import SaveIcon from '@material-ui/icons/Save';
import { Box, FormControl, IconButton, TextField, Tooltip } from '@material-ui/core';


function InvoiceCode() {
  return (
    <Box className="base-box" p={2} mx={2} elevation={1}>
      <Typography
        variant="h5"
        component="h3"
        className="typo-wo-btn"
      >
        Invoice Code
      </Typography>
      <Divider />
      <div className="scrollable-details">
      <Box m={2}>
          <FormControl fullWidth>
            <TextField id="code" label="New Invoice Code" />
          </FormControl>
          <Grid className='align_btn_right' item xs={12} md={12}>
            <Tooltip title="Save" aria-label="Save">
              <IconButton aria-label="Save">
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

export default InvoiceCode;


