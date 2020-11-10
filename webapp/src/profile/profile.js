import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SaveIcon from '@material-ui/icons/Save';
import { Box, FormControl, IconButton, TextField, Tooltip } from '@material-ui/core';

function Profile() {
  return (
    <Box className="base-box" p={2} mx={2} elevation={1}>
      <Typography variant="h5" component="h3" style={{
              display: 'flex',
              alignItems: 'center',
            }}>
        Profile &nbsp;&nbsp;&nbsp;
        <Tooltip title="Save" aria-label="save">
          <IconButton aria-label="save">
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
            <TextField id="name" label="Name" />
          </FormControl>
          <FormControl fullWidth>
            <TextField id="btitle" label="Business title" />
          </FormControl>
          <FormControl fullWidth>
            <TextField id="address" label="Address" />
          </FormControl>
          <FormControl fullWidth>
            <TextField id="teltitle" label="Telephone and Email" />
          </FormControl>
          <FormControl fullWidth>
            <TextField id="gstin" label="GSTIN" />
          </FormControl>
          <FormControl fullWidth>
            <TextField id="hsn" label="HSN / SAC" />
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
            &nbsp;&nbsp;&nbsp;
            <Tooltip title="Add" aria-label="add">
              <IconButton aria-label="add">
                <AddCircleIcon title="Add" color="primary">
                  Add
                </AddCircleIcon>
              </IconButton>
            </Tooltip>
          </Typography>

          <Box p={2} border={1} borderColor="grey.500" borderRadius={2} m={2}>
            <Typography>Suresh Tukaram Gavhane Cash Van and Tourist Vehicle Supplier</Typography>
            <Typography>Abhyudaya Co-operative Bank Ltd</Typography>
            <Typography>A/c No: 022203994939 & IFSC Code: ABHY000111222 Branch: CBD Belapur</Typography>
          </Box>
          <FormControl fullWidth>
            <TextField id="acname" label="A/C Name" />
          </FormControl>
          <FormControl fullWidth>
            <TextField id="bankname" label="Bank Name" />
          </FormControl>
          <FormControl fullWidth>
            <TextField id="bankacno" label="Bank A/C No." />
          </FormControl>
          <FormControl fullWidth>
            <TextField id="ifsc" label="IFSC Code" />
          </FormControl>
          <FormControl fullWidth>
            <TextField id="branch" label="Branch" />
          </FormControl>
        </Box>
      </div>
    </Box>
  );
}

export default Profile;


