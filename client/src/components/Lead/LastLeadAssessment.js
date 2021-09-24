import '../../assests/css/ChangePassword.css';
import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios'; 

function LeadAssessment() {
    const[review, SetReview] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/getReviewNames')
        .then(response =>{
            SetReview(response.data.data);
        })
    }, [])

    // const[rating, SetRating] = useState([]);
    // useEffect(() => {
    //     Axios.get('http://localhost:3001/getRatingDetails')
    //     .then(response =>{
    //         SetRating(response.data.data);
    //     })
    // }, [])

    const[employees, SetEmployee] = useState([]);
    useEffect(()=>{
        Axios.get('http://localhost:3001/leadAssessment/getEmployee').then(response =>{
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
    const SearchTemplate = ()=>{
        Axios.post('http://localhost:3001/leadAssessment/getTemplate', {
            review_cycle_id : review_id,
            emp_id : emp_id,
        }).then((res) => {
           // console.log(res);
            if(res.data.success === true){
                SetTemplate(res.data.data);
            }else{                
                alert("Sorry Record not found..!")
            }
        })                    
    }

    // const SubmitAssessment = () => {
    //     console.log(assessmentArr);
    //     Axios.post('http://localhost:3001/leadAssessment/insert', {
    //         review_id : review_id,
    //         emp_id : emp_id,
    //         assessmentArr : assessmentArr,
    //     }).then((res) => {
    //         if(res.data.success === true){
    //             alert("Lead Assessment submited Successfully....");
    //         }else{
    //             alert("Error");
    //         }
    //     })
    // }
    
    // let assessmentArr = [];

    return (
        <div className="content"><br/><br/>
            <center><h1>Lead Assessment</h1> 
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
                    <select id="Emp_id" name="emp_id" onChange={e=> SetEmp_id(e.target.value)}>
                        <option value = "emp">Select Employee </option>
                        {
                            employees.map((val)=>{  
                            return(<option value={val.emp_id}>{val.first_name}</option>)
                            })
                        }   
                    </select>
                </div>
                <div class="col-25">
                    <button onClick={SearchTemplate}>Search</button>  
                </div>
            </div> 
            <br/><br/>          
            <table id="lead_assessment">
                <tr><th>Competency Area</th><th>Competency Descriptor</th><th>Self Rating</th><th>Self Comment</th><th>Select Lead Rating</th><th>Lead Comment</th></tr>
                {
                    template.map((val) => {
                        // var element = {};
                        // element.id = val.did;
                        return <tr>
                        {
                            competencyName.map((val1) => {
                                if(val.cid === val1.Area_id){                                    
                                   return(<td>{val1.AreaName}</td>) 
                                }
                            })
                        }
                        <td>{val.des}</td>                    
                        <td class='unselected'>{val.selfRating}</td><td class='unselected'>{val.selfComment}</td>
                         <td>{val.leadRating}</td><td>{val.leadComment}</td> 
                        {/* <td><select name='leadRating' onChange = {e=> {element.rating = e.target.value}}>
                            <option> Select</option>
                            {
                                rating.map((val)=>{  
                                return(<option value={val.Rating_Symbol}>{val.Rating_Symbol}</option>)
                                })
                            }
                        </select>                 
                        </td> */}
                        {/* <td><input type='text' name='lead_Comment' onChange = {e=> {element.comment = e.target.value;}}/>                             
                        {assessmentArr.push(element)}  
                        </td> */}
                        </tr> 
                    })
                }
                </table><br/>
		    {/* <button onClick={SubmitAssessment}>Save</button><br/><br/>             */}
            </center>
        </div>
    )
}

export default LeadAssessment


