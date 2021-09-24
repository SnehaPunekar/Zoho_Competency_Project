import '../../assests/css/ChangePassword.css';
import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';  
function SelfAssessment() {
    
    const[review, SetReview] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/getReviewNames')
        .then(response =>{
            SetReview(response.data.data);
        })
    }, [])

    const[rating, SetRating] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/getRatingDetails')
        .then(response =>{
            SetRating(response.data.data);
        })
    }, [])

    const[employees, SetEmployee] = useState([]);
    useEffect(()=>{
        Axios.get('http://localhost:3001/getEmployee').then(response =>{
            SetEmployee(response.data);
        })
    },[])
    
    const[competencyName, SetCompetencyName] = useState([]);
    useEffect(()=>{
        Axios.get('http://localhost:3001/selfAssessment/getCompetencyAreaNames')
        .then(response =>{
            console.log(response);
            SetCompetencyName(response.data);
        })
    },[])      
    
    const [review_id , SetReview_id] = useState('');  
    const [emp_id, SetEmp_id] = useState('');
    const [template, SetTemplate] = useState([]);

    // useEffect(()=>{
    //         Axios.get('http://localhost:3001/selfAssessment/getTemplate')
    //         .then(response =>{
    //             SetTemplate(response.data);
    //         })
    // },[])

    const SearchTemplate = ()=>{       
        Axios.post('http://localhost:3001/selfAssessment/getTemplate', {
            review_cycle_id : review_id,
            emp_id : localStorage.getItem('id'),
        }).then((res) => {
           // console.log(res);
            if(res.data.success === true){
                SetTemplate(res.data.data);
            }else{                
                alert("Sorry Record not found..!")
            }
        })                    
    }
     
    let assessmentArr = [];
    
    const SubmitAssessment = () =>{
        //console.log(assessmentArr);
        Axios.post('http://localhost:3001/selfAssessment/insert', {
            review_id : review_id,
            emp_id : localStorage.getItem('id'),
            assessmentArr : assessmentArr,
        }).then((res) => {
            if(res.data.success === true){
                alert("Self Assessment submited Successfully....");
            }else{
                alert("Error");
            }
        })
    }

    return (
        <div className="content"><br/><br/>
            <center><h1>Self Assessment</h1>
             <div class="row">
                <div class="col-25">
                    <label for="review">Review Cycle</label>
                </div>
                <div class="col-25">
                    <select id="review_id" name="review_id" onChange={e=> SetReview_id(e.target.value)}>
                        <option value = "review_cycle">Select Review Cycle </option>
                        {
                            review.map((val)=>{  
                            return(<option value={val.Review_Id}>{val.Review_Cycle_Name}</option>)
                            })
                        }   
                    </select>
                </div>
               
                <div class="col-25">
                    <button onClick={SearchTemplate}>Search</button>  
                </div>
            </div> 
            <br/><br/>
            <table id="assessment">
                <tr><th>Competency Area</th><th>Competency Descriptior</th><th>Employee Rating</th><th>Self Comment</th><th>Lead Rating</th><th>Lead Comment</th></tr>
                {
                    template.map((val) => {
                        var element = {};
                        element.id = val.did;                        
                        return <tr>
                        {
                            competencyName.map((val1) => {
                                if(val.cid === val1.Area_id){                                    
                                   return(<td>{val1.AreaName}</td>) 
                                }
                            })
                        }
                        <td>{val.des}</td>
                        {/* <td>{val.selfRating}</td><td>{val.selfComment}</td> */}
                        <td><select name='selfRating' onChange = {e=> {element.rating = e.target.value}}>
                            <option>Select</option>
                            {
                                rating.map((val)=>{  
                                return(<option value={val.Rating_Symbol}>{val.Rating_Symbol}</option>)
                                })
                            }
                        </select>                 
                        </td><td><textarea type='text' name='selfComment' onChange = {e=> {element.comment = e.target.value;}}/>                             
                        <h6>{assessmentArr.push(element)} </h6>               
                        </td>                       
                        <td class='unselected'>{val.leadRating}</td><td class='unselected'>{val.leadComment}</td></tr> 
                    })
                }          
            </table>            
            <br/>
            <button onClick={SubmitAssessment}>Save</button><br/><br/><br/><br/><br/> 
            </center>
        </div>
    )
}

export default SelfAssessment


