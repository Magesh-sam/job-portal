import React, { useState, useEffect } from "react";
import { Button, Dialog, Stack, TextField, Typography, IconButton } from "@mui/material";
import { DataGrid, GridColDef, GridValidRowModel } from "@mui/x-data-grid";
import CloseIcon from '@mui/icons-material/Close';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { rows } from "./data";
export const App = () => {





  const [query, setquery] = useState("");
  const [openParent, setopenParent] = useState(false)
  const [openChild, setopenChild] = useState(false)


  const [fname, setfname] = useState('')
  const [lname, setlname] = useState('')
  const [email, setemail] = useState('')
  const [experience, setexperience] = useState(0)
  const [currentCTC, setcurrentCTC] = useState(0)
  const [expectedCTC, setexpectedCTC] = useState(0)

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70, headerClassName:'header' },
    { field: "title", headerName: "Title", width: 200, headerClassName:'header' },
    { field: "companyName", headerName: "Company", width: 200, headerClassName:'header' },
    { field: "location", headerName: "Location", width: 250, headerClassName:'header' },
    { field: "skills", headerName: "Skills", width: 330, headerClassName:'header' },
    { field: "vacancy", headerName: "Vacancy", width: 130, headerClassName:'header' },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      headerClassName:'header',
      renderCell: () => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => setopenParent(true)}
        >
          Apply
        </Button>
      ),
    },
  ];

  const filteredRows = rows.filter((row) =>
    row.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleSubmit = () => {
    alert(JSON.stringify({
      firstname: fname,
      lastname: lname,
      email: email,
      experience: experience,
      currentCTC: currentCTC,
      expectedCTC:expectedCTC

      }))
  }

  return (
    <main style={{ width: "70vw", height: "80vh", margin: "auto",  }}>
      <Stack justifyContent="center" p={5} direction="row" spacing={3}>
        <Typography variant="h4" >Search Jobs</Typography>
        <TextField
          value={query}
          type="text"
          label="Jobs"
          placeholder="search jobs by title"
          onChange={(e) => setquery(e.target.value)}
        />
      </Stack>
      {filteredRows.length <= 0 && (
        <Typography
          variant="h5"
          sx={{ color: "red", textAlign: "center", p: 3 }}
        >
          no jobs found!
        </Typography>
      )}
      <Stack height='80vh' paddingBottom={5} >
        <DataGrid
          sx={{ boxShadow: 2, border: 2, '& .header':{ backgroundColor:'#fd5'} }}
          rows={filteredRows}
          columns={columns}
        />
      </Stack>
      <Dialog open={openParent} onClose={() => setopenParent(false)}  >
        <Stack >
          <IconButton sx={{color:'red',width:'35px',marginLeft:'auto'}} onClick={() => setopenParent(false)} >
            <CloseIcon/>
            </IconButton>
        </Stack>
        <Stack onSubmit={handleSubmit} spacing={3} sx={{padding:'15px 15px'}} component='form' >
                  <Stack direction='row' spacing={3} >
                    <TextField required autoFocus type='text' label='First Name' placeholder="Enter your First Name" onChange={(e)=>setfname(e.target.value)} />
            <TextField required type='text' label='Last Name' placeholder="Enter your Last Name" onChange={(e) => setlname(e.target.value)} />
          </Stack>
          <TextField required type='email' label='Email' placeholder="example@mail.com" onChange={(e)=>setemail(e.target.value)} />
          <TextField type='number' inputProps={{ step:'0.1'}} label='Experience' placeholder="years of experience" onChange={(e)=>setexperience(parseInt(e.target.value))} />
          <Stack direction='row' spacing={3}>
            <TextField type='number' inputProps={{ step:'0.01'}} label='Current CTC' placeholder="Current CTC" onChange={(e)=>setcurrentCTC(parseFloat(e.target.value))} />
            <TextField type='number' inputProps={{ step:'0.01'}} label='Expected CTC' placeholder="Expected CTC" onChange={(e)=>setexpectedCTC(parseFloat(e.target.value))} />
          </Stack>
          <Stack direction='row' spacing={2} alignItems='center' >
            <CloudUploadIcon sx={{color:'blue'}} />
            <label htmlFor="resume">Resume </label>
            <input type="file" accept=".pdf" />
          </Stack>
          <Button color='primary' variant='contained' onClick={()=>setopenChild(true)} >Preview</Button>
          <Button type='submit' color='success' variant='contained' >Submit</Button>
        </Stack>
      </Dialog>
      <Dialog open={openChild} onClose={()=>setopenChild(false)} >
        <Stack sx={{padding:'25px 25px'}} >
          <IconButton sx={{color:'red',width:'35px',marginLeft:'auto'}} onClick={() => setopenChild(false)} >
            <CloseIcon/>
            </IconButton>
          </Stack>
          <Stack  sx={{padding:'25px 25px'}} spacing={3}>
            <Typography variant="h6" >{`Firstname: ${fname}`}</Typography>
            <Typography variant="h6" >{ `Lastname: ${lname}`}</Typography>
            <Typography variant="h6" >{ `E-mail: ${email}`}</Typography>
            <Typography variant="h6" >{ `Experience ${experience} ${experience <=1 ? 'year' : 'years'  }`}</Typography>
            <Typography variant="h6" >{ `Currenct CTC: ${currentCTC}`}</Typography>
            <Typography variant="h6" >{ `Expected CTC: ${expectedCTC}`}</Typography>
          </Stack>
          </Dialog>
    </main>
  );
};
