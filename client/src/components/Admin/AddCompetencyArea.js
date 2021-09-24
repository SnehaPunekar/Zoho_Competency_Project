// import '..../assests/css/ChangePassword.css';
import '../../assests/css/ChangePassword.css';
// import 'C:/Users/Sneha/Desktop/Competency Framework/client/src/assests/css/ChangePassword.css'
import React from 'react';
import { useState , useEffect} from 'react';
import Axios from 'axios';


function AddCompetencyArea() {

    const [AreaName,SetAreaName]=useState('');

    const addcompetencyarea = ()=>{
        Axios.post('http://localhost:3001/AddCompetencyArea',{
          AreaName:AreaName
        }).then(res => {
            setChange(!change);
        })
    }

    const[names,setNames] = useState([]);
    const[change,setChange] = useState(false);

    useEffect(() => {
        Axios.get('http://localhost:3001/getCompetencyAreaNames')
        .then(response =>{
            setNames(response.data.data);
        })
    }, [change])
    return (
        <div className="content">
            <center>
                <h1>Competency Area</h1>
                <div class="row">
                    <div class="col-25">
                        <label for="competencyarea">Competency Area</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="competencyarea" 
                        name="competencyarea" 
                        placeholder="Enter Competency Area" required onChange={(e)=>{
              SetAreaName(e.target.value);
            }}/>
                    </div>
                </div>
                <button onClick={addcompetencyarea}>Add</button><br/>
                <h3>List of Competency Area</h3>            
                <table id="competencyarea">
                    <tr><th>Sr. No</th><th>Competency Area</th></tr>
                    {
                    names.map((value)=>{  
                        return(
                            <tr><td>{value.Area_id}</td><td>{value.AreaName}</td></tr> 
                        )
                    })
                }
                </table><br/><br/><br/><br/>
            </center> <br/><br/>
        </div>
    )
}

export default AddCompetencyArea;
