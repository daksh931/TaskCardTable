import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Card } from '@mui/material';

export default function Form() {

  const[name,setName] = React.useState("")
  const[email,setEmail] = React.useState("")
  const[phonenumber,setPhonenumber] = React.useState("")
  const[country,setCountry] = React.useState("")
  const[state,setState] = React.useState("")
  const[city,setCity] = React.useState("")
  const[address,setAddress] = React.useState("")
  const[zip,setZip] = React.useState("")
  const[company,setCompany] = React.useState("")
  const[role,setRole] = React.useState("")

  console.log(name,email,phonenumber,country,state,city,address)

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted Successfully")
  }
  return (
      <form onSubmit={handleSubmit}> 
    <div className='flex justify-center w-50 md:w-auto'>
    <Card  sx={{  p:2 }}>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='md:flex md:flex-row flex flex-col items-center'>
        <TextField
          
          id="outlined-error"
          label="Full Name"
          defaultValue="Full Name"
          onChange={ (e)=> setName(e.target.value)}
        />

        <TextField
          
          id="outlined-error"
          label="Email Address"
          defaultValue="Email Address"
          onChange={ (e)=> setEmail(e.target.value)}
        />
      </div>

      <div className='md:flex md:flex-row flex flex-col items-center'>

      <TextField
          id="outlined-error"
          label="Phone Number"
          defaultValue="Phone Number"
          onChange={ (e)=> setPhonenumber(e.target.value)}
        />
        <TextField
          id="outlined-error"
          label="Country"
          defaultValue="Country"
          onChange={ (e)=> setCountry(e.target.value)}
        />

     
      </div>
      <div className='md:flex md:flex-row flex flex-col items-center'>

        <TextField
          
          id="outlined-error"
          label="State/region"
          defaultValue="State/region"
          onChange={ (e)=> setState(e.target.value)}
        />

        <TextField
          
          id="outlined-error"
          label="City"
          defaultValue="City"
          onChange={ (e)=> setCity(e.target.value)}
        />
      </div>

      <div className='md:flex md:flex-row flex flex-col items-center'>

        <TextField
          
          id="outlined-error"
          label="Address"
          defaultValue="Address"
          onChange={ (e)=> setAddress(e.target.value)}
        />

        <TextField
          
          id="outlined-error"
          label="Zip/code"
          defaultValue="Zip/code"
          onChange={ (e)=> setZip(e.target.value)}
        />
      </div>
      
      <div className='md:flex md:flex-row flex flex-col items-center'>
      
        <TextField
          
          id="outlined-error"
          label="Company"
          defaultValue="Company"
          onChange={ (e)=> setCompany(e.target.value)}
        />

        <TextField
          
          id="outlined-error"
          label="Role"
          defaultValue="Role"
          onChange={ (e)=> setRole(e.target.value)}
        />
      </div>

      <div id='btn' className='flex justify-center md:justify-end'>
      <Button type="submit" size="small" variant="contained" color="success" >
      Save Changes
      </Button>
      </div>
    </Box>
    </Card>
    </div>
    </form>
  );
}
