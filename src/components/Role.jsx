import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Checkbox } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    width:200,
    height:300,
},
  padding:{
      padding:'5% 30%'
  }
});

function createData(name,FULL_ACCESS, ADD, UPDATE, DELETE, VIEW) {
  return { name,FULL_ACCESS, ADD, UPDATE, DELETE, VIEW};
}

const checkBox = () => {
    return(
        <>
    <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />,
    </>
    );
}
const rows = [
    createData('Tournament',
             <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
             <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
            <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
            <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
            <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
            ),
    createData('Venues',
            <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
            <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
           <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
           <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
           <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
           ),
    createData('Score',
            <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
            <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
           <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
           <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
           <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
           ),
    createData('UserManagment Services',
           <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
           <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
           <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
           <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
           <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
           ),




];
console.log(rows)

function RoleManagement() {
  const classes = useStyles();

  return (
    
      <div class="main"> 
      <TableContainer component={Paper} className={classes.padding}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Resource Name</b></TableCell>
            <TableCell align="right">Full Access</TableCell>
            <TableCell align="right">ADD</TableCell>
            <TableCell align="right">UPDATE</TableCell>
            <TableCell align="right">DELETE</TableCell>
            <TableCell aligh="right">VIEW</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.FULL_ACCESS}</TableCell>
              <TableCell align="right">{row.ADD}</TableCell>
              <TableCell align="right">{row.UPDATE}</TableCell>
              <TableCell align="right">{row.DELETE}</TableCell>
              <TableCell align="right">{row.VIEW}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <br></br>
      <center>
      <button type="button" class="btn btn-primary" align="center">Submit</button>
      </center>
    </TableContainer>
    
      
      </div>

     
    
    


  );
}

export default RoleManagement;