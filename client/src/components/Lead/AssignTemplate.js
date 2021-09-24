// import '../Login/ChangePassword.css';
import '../../assests/css/ChangePassword.css';
import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useState,useEffect } from 'react';
import Axios from 'axios';

 const columns = [
  { field: 'id', headerName: 'ID', width: 160 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 300,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 300,
    editable: true,
  }, 
];

function AssignTemplate() {

  let a = [];

  const[TempNames,setTempNames] = useState([]);
  const[reviewNames,setReviewNames] = useState([]);
  const[empNames,setEmpNames] = useState([]);
  const[change,setChange] = useState(false);
  const[value,setValue] = useState('');
  const[tempValue,setTempValue] = useState('');
  const[empId,setEmpId] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:3001/getTemplateNames')
    .then(response =>{
        setTempNames(response.data.data);
    })
}, [])

useEffect(() => {
  Axios.get('http://localhost:3001/getReviewNames')
  .then(response =>{
      setReviewNames(response.data.data);
  })
}, [])

useEffect(()=>{
  Axios.get('http://localhost:3001/getEmpNames')
  .then(response =>{
     setEmpNames(response.data.data);
   })
},[change])

  const assign = ()=>{
    Axios.post('http://localhost:3001/assignTemplate',{
      tempId:tempValue,
      reviewCId:value,
      empId:empId 
    })
    .then(res=>{
      console.log(res)
    })
  }

    return (
        <div className="content">
            <center><h1>Assign Template</h1>
            <div class="row">
                <div class="col-25">
                    <label for="cycles">Select review cycle</label>                                
                </div>
                <div class="col-75">
                    <select id="level" name="level" 
                     onChange={e=> setValue(e.target.value)}>
                        <option value="cycle">Select Review Cycle</option>
                        {
                        reviewNames.map((value)=>{  
                          return(
                            <option value={value.Review_Id}>{value.Review_Cycle_Name}</option>
                            )
                          })
                        }                     
                    </select>
                    {console.log(value)}
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="templates">Select templates</label>  
                </div>
                <div class="col-75">
                    <select id="templates" name="templates"
                    onChange={e=> setTempValue(e.target.value)}>
                        <option value="selecttemplates">Select Templates</option>
                        {
                        TempNames.map((value)=>{  
                        return(
                            <option value={value.Temp_id}>{value.TempName}</option>
                            )
                          })
                        }  
                    </select>
                    {console.log(tempValue)}
                </div>
            </div>

           
 <h3>Select the employees</h3>  
    {
      empNames.map(value => {
        let b = {
          id: value.Emp_id,
          lastName : value.last_name,
          firstName : value.first_name
        }
        a.push(b);
      })
    }
    <div style={{ height: 290, width: '80%', background:'white' }}>
      <DataGrid
        rows={a}
        columns={columns}
        pageSize={3}
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={(id) => {
        setEmpId(id)
        }}
      />
      {console.log(empId)}
    </div>        
<br/>

		 <button onClick={assign}>Save</button><br/></center><br/>
        </div>
    )
}
export default AssignTemplate;

