import '../../assests/css/ChangePassword.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { DataGrid } from '@material-ui/data-grid';
import { useState,useEffect } from 'react';
import Axios from 'axios';

const columns = [
  { field: 'id', headerName: 'ID', width: 120 },
  {
    field: 'descriptor',
    headerName: 'Descriptor',
    width: 750,
    sortable:true,
    editable: false,
  },
  { field: 'role', 
  headerName: 'Role', 
  width: 170 },
  { field: 'track', 
  headerName: 'Track', 
  width: 170 },
  { field: 'status', 
  headerName: 'Status', 
  width: 150 },
];
  
const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function AddCompetencyDescriptor() {

    const[names,setNames] = useState([]);
    const[value, setValue ] = useState('');
    const[desc, setDesc] = useState('');    
    const[roles, setRoles ] = useState([]);
    const[track, setTrack ] = useState('');
    const[status, setStatus ] = useState('');
    const[descriptor,setDescriptor] = useState(true);
    const[details,setDetails] = useState([]);


    useEffect(() => {
        Axios.get('http://localhost:3001/getCompetencyAreaNames')
        .then(response =>{
            setNames(response.data.data);
        })
    }, [])
    
    useEffect(()=>{
      Axios.get('http://localhost:3001/getDescriptor')
      .then(response =>{
        setDetails(response.data.data);
      })
    },[descriptor])

    
    useEffect(() => {
      Axios.get('http://localhost:3001/getRoles')
      .then(response =>{
       setRoles(response.data.data);
      })
  }, [])


    const classes = useStyles();
  
    let a = [];

    const AddDesc = ()=>{
      Axios.post('http://localhost:3001/AddDescriptor',{
        value:value,
        desc: desc,
        // role : role,
        track : track,
        status : status
      }).then(res=>{
        setDescriptor(!descriptor);
        console.log(res);
      })
    }

    return (
      <div className="content"><br/><br/>
        <center><h1>Competency Descriptor</h1><br/>
          <div class="row">
            <div class="col-25">
                <label for="competency_area">Competency Area</label>  
            </div>
            <div class="col-75">
              <select id="competency_area" name="competency_area" onChange={e=> setValue(e.target.value)} >
                <option value="competency">Select Competency Area </option>
                  {
                    names.map((value)=>{  
                      return(<option value={value.Area_id}>{value.AreaName}</option>)
                    })
                  }
              </select>                {/* /{console.log(value)} */}
            </div>
          </div>          
        <div class="row">
          <div class="col-25">
            <label for="competencydescriptor">Competency Descriptor</label>
          </div>
          <div class="col-75">
            <input type="text" id="competencydescriptor" name="competencydescriptor" placeholder="Competency Descriptor" 
                onChange={e=>{
                  setDesc(e.target.value)
                }} required/>
          </div>
        </div>
        <div class="row">
            <div class="col-25">
                <label for="role">Select Role</label>  
            </div>
            <div class="col-75">
              <select id="role" name="role" onChange={e=> setRoles(e.target.value)} >
                <option value="role">Select Role </option>
                  {
                    roles.map((value)=>{  
                      return(<option value={value.role_id}>{value.Role_Name}</option>)
                    })
                  }
              </select>                {/* /{console.log(value)} */}
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="track">Track</label>
            </div>
            <div class="col-75">
              <select id="track" name="track" onChange={e=> setTrack(e.target.value)} >
                <option value="track"> Select Status </option>
                <option value="CRM_QA_Track"> CRM QA Track </option>                  
                <option value="CRM_DEV_Track"> CRM DEV Track </option>  
              </select>     
            </div>
          </div>
          <div class="row">
            <div class="col-25">
                <label for="status">Select Status</label>  
            </div>
            <div class="col-75">
              <select id="status" name="status" onChange={e=> setStatus(e.target.value)} >
                <option value="status"> Select Status </option>
                <option value="Active"> Active </option>                  
                <option value="Inactive"> Inactive </option>  
              </select>               
            </div>
          </div>        
        <br/>
        <button onClick={AddDesc}>Save</button><br/>
        <h3>List of Competency Descriptor</h3>
          <div className={classes.root}>
            {
              names.map((value)=>{   
                a = []
                return(
                   
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                      <Typography className={classes.heading}>{value.AreaName}</Typography>
                    </AccordionSummary>
                    {              
                      roles.map((val) => {  
                        details.map((value1) => {
                          if(value1.Area_id === value.Area_id && val.role_id === value1.Role_id){                                                     
                              let b = {
                                id : value1.Desc_id,
                                descriptor : value1.Description,                              
                                role : val.role_name,                             
                                track : value1.Track,
                                status : value1.Status
                              }
                              a.push(b);
                          }                              
                        })  
                      })  
                    }
                    <AccordionDetails>
                      <div style={{ height: 400, width: '100%', backgroundColor: 'white' }}>
                        <DataGrid
                          rows={a}
                          columns={columns}
                          pageSize={5}
                          disableSelectionOnClick
                        />
                      </div>
                    </AccordionDetails>
                  </Accordion>
                )
              })
            }  
          </div>
        </center><br/>
      </div>
    );
}

