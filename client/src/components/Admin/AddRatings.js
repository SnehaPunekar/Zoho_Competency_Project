import '../../assests/css/ChangePassword.css';
import React from 'react';
import {useState, useEffect} from 'react';
import Axios from 'axios';

function AddRatings() {

    const[ratingSymbol,setRatingSymbol] = useState('');
    const[ratingDesc,setRatingDesc] = useState('');
    const[change,setChange] = useState(false);
    const[ratings,setRatings] = useState([]);

    

    const addRatings = ()=>{
        Axios.post('http://localhost:3001/addRatings',
        {ratingSymbol:ratingSymbol,
        ratingDesc:ratingDesc}
        ).then(res =>{
            setChange(!change);
        })
    }

    useEffect(() => {
        Axios.get('http://localhost:3001/getRatingDetails')
        .then(response =>{
            setRatings(response.data.data);
        })
    }, [change])

    return (
        <div className="content">
            <center><h1>Add Ratings</h1>
            <div class="row">
                <div class="col-25">
                    <label for="ratingname">Rating Name</label>
                </div>
                <div class="col-75">
                    <input type="text" id="ratingname" name="ratingname" 
                    placeholder="Rating Name" required
                    onChange={(e)=>{
                    setRatingSymbol(e.target.value);
                      }}/>
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label for="description">Description</label>
                </div>
                <div class="col-75">
                    <input type="text" id="description" name="discription" 
                    placeholder="Description" required
                    onChange={(e)=>{
                        setRatingDesc(e.target.value);
                      }}/>
                </div>
            </div>
            <button onClick={addRatings}>Save</button><br/>
            <h3>List of Assessment Ratings</h3>            
            <table id="ratings">
                <tr><th>Sr. No.</th><th>Rating</th><th>Description</th></tr>
                {
                    ratings.map((value)=>{  
                        return(
                            <tr><td>{value.Rating_Id}</td><td>{value.Rating_Symbol}</td><td>{value.Rating_Desc}</td></tr> 
                        )
                    })
                }
            </table><br/><br/><br/><br/>
            </center> 
        </div>
    )
}

export default AddRatings;