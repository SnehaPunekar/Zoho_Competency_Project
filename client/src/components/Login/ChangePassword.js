import '../../assests/css/ChangePassword.css';
import React from 'react';
import Axios from 'axios';
import {useState} from 'react';

function ChangePassword() {

    const [pass,setPass] = useState('');
    const [repass,setRepass] = useState('');

    const redirect = ()=>{
        if(!(pass.length>0)){
            alert('Password cannot be Empty.')
        }
        else if(!(repass.length>0)){
            alert('Confirm Password cannot be Empty.')
        } 
        else if(!(pass.length>7) && !(repass.length>7)){
            alert('Password must contain 8 characters');
        }
        else if(!(pass===repass)){
            alert('Please enter the correct Password');
        }
        else{
        Axios.post('http://localhost:3001/setPassword',{
            pass:pass,
            flogin:1,
            Emp_id:localStorage.getItem('id')
        }).then((res) => {
            if(res.data.success){
            alert('Password Change Successful!\n Please Log-in again to Continue');
            window.location.href = '/login';
            }
            else{
                alert("Failure");
          }
        }
    )};
};

    return (
        <div className="content">
            <center>
                <h1>Change Password</h1>
                <div class="row">
                    <div class="col-25">
                        <label for="newpassword">New Password</label>
                    </div>
                    <div class="col-75">
                        <input type="password" id="newpassword" 
                        name="newpassword" placeholder="Enter New Password"
                        onChange={(e)=>{
                            setPass(e.target.value);
                              }}/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="retypepassword">Re-type Password</label>
                    </div>
                    <div class="col-75">
                        <input type="password" id="retypepassword" 
                        name="retypepassword" placeholder="Re-type Password"
                        onChange={(e)=>{
                            setRepass(e.target.value);
                              }}/>
                    </div>
                </div><br/>
                <button type="button" class="btn btn-primary btn-sm" onClick={redirect}>Confirm</button>
                
            </center>
        </div>
    )
}

export default ChangePassword;



