import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import PrintIcon from '@material-ui/icons/Print';
import Grid from '@material-ui/core/Grid';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Box, FormControl, IconButton, TextField, Tooltip } from '@material-ui/core';
import pdfFonts from "pdfmake/build/vfs_fonts";
import pdfMake from "pdfmake/build/pdfmake";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import {
  KeyboardDatePicker
} from '@material-ui/pickers';
import Select from '@material-ui/core/Select';


pdfMake.vfs = pdfFonts.pdfMake.vfs;

var headers = {
  fila_0:{
      col_1:{ text: 'Faltas', style: ['tableHeader','color'],rowSpan: 2, alignment: 'center',margin: [0, 8, 0, 0] },
      col_2:{ text: 'Fecha', style: 'tableHeader',rowSpan: 2, alignment: 'center',margin: [0, 8, 0, 0] },
      col_3:{ text: 'Descripción', style: 'tableHeader',rowSpan: 2, alignment: 'center',margin: [0, 8, 0, 0] },
      col_4:{ text: 'Cita con acudientes', style: 'tableHeader',colSpan: 2, alignment: 'center' }
  },
  fila_1:{
      col_1:{ text: 'Header 1', style: 'tableHeader', alignment: 'center' },
      col_2:{ text: 'Header 2', style: 'tableHeader', alignment: 'center' }, 
      col_3:{ text: 'Header 3', style: 'tableHeader', alignment: 'center' },
      col_4:{ text: 'Citación', style: 'tableHeader', alignment: 'center' },
      col_5:{ text: 'Cumplimiento', style: 'tableHeader', alignment: 'center'}
  }
}
var rows = {
  a: {
      peaje: '1',
      ruta: '2',
      fechaCruce: '3',
      hora: '4',
      valor: '5'
  },
  b: {
      peaje: '1',
      ruta: '2',
      fechaCruce: '3',
      hora: '4',
      valor: '5'
  }
}

var body = [];
for (var key in headers){
  if (headers.hasOwnProperty(key)){
      var header = headers[key];
      var row = new Array();
      row.push( header.col_1 );
      row.push( header.col_2 );
      row.push( header.col_3 );
      row.push( header.col_4 );
      row.push( header.col_5 );
      body.push(row);
  }
}
for (var key in rows) 
{
  if (rows.hasOwnProperty(key))
  {
      var data = rows[key];
      var row = new Array();
      row.push( data.peaje.toString() );
      row.push( data.ruta.toString()  );
      row.push( data.fechaCruce.toString() );
      row.push( data.hora.toString()  );
      row.push( data.valor.toString() );
      body.push(row);
  }
}

var dd = {
      pageMargins: [0,0,0,0],
      pageOrientation: 'portrait',
      header: function() {
          return {
              margin: 0,
              columns: [
                {
                  },
                  { text:['Resumen disciplinario'], 
                          alignment: 'left',bold:true,margin:[0,0,0,0],fontSize: 24}
              ]
          }
      },
      footer: function(currentPage, pageCount) {
          return { text:'Pagina '+ currentPage.toString() + ' de ' + pageCount, alignment: 'center',margin:[0,0,0,0] };
      },
      content: [
          //{ text: 'Tables', style: 'header' },
          { text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'sta' },
          //'The following table has nothing more than a body array',
          {
              table: {
                  headerRows: 2,
                  // keepWithHeaderRows: 1,
                  body: body
              }
          }],
      styles: {
          header: {
              fontSize: 28,
              bold: true
          },
          tableHeader: {
              fontSize: 28
          },
          color: {
              color: '#E0E0E0'
          },
          subheader: {
              fontSize: 15,
              bold: true
          },
          quote: {
              italics: true
          },
          small: {
              fontSize: 8
          },
          sta: {
              fontSize: 11,
              bold: false,
              alignment: 'justify'
          }
      }
}

function generateBill(dd) {
  pdfMake.createPdf(dd).open();
}

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
              <IconButton onClick={() => generateBill(dd)} aria-label="Print">
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


