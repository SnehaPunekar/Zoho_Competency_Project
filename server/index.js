const express = require('express');
const cors = require('cors')
const app = express();
const mysql = require('mysql');
const AdminServices =  require('./services/AdminServices.js');
app.use(cors());
app.use(express.json());


const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'sneha123',
    database : 'competency',
    dateStrings: 'date',
});

app.post('/login',(request,response)=>{
    const username = request.body.username;
    const password = request.body.password;

    db.query('SELECT Emp_id,first_name,last_name,username,password,role,flogin FROM employee where username = ? AND password = ?',
     [username,password],
     (error,result)=>{
        if(error){
            console.log(error);
            response.json({err:error, success:false});
        }
        else{
            if(result.length > 0){
                console.log(result);
                response.json({data:result, success:true});
            }
            else{
                response.json({success:false});
            }
        }
    });
});

app.post('/addCompetencyArea', (request,response)=>{

    const AreaName = request.body.AreaName;

    db.query('INSERT INTO Competency_Area(AreaName) VALUES (?)',[AreaName],
    (error,result)=>{
        if(error){
            console.log(error);
            response.json({err:error, success:false});
        }
        else{
            if(result.length > 0){
                console.log(result);
                response.json({data:result, success:true});
            }
            else{
                response.json({success:false});
            }
        }
    });
});

app.get('/getCompetencyAreaNames',(req,res)=>{
    // db.query('SELECT Area_id,AreaName FROM Competency_Area;',(err,result)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     else{
    //         if(result.length > 0 ){
    //             res.json({data:result});
    //         }
    //         else{
    //             console.log('No data found!');
    //         }
    //     }
    // });
    // getarea();
    let out = new AdminServices().getAllCompetencyAreas();
    console.log('UI Response');
    console.log(out);
    res.json({data:out})

    
})

app.post('/AddDescriptor', (request,response)=>{

    const value = request.body.value;
    const desc = request.body.desc;

    db.query('INSERT INTO Competency_Descriptor(Description, Area_id) VALUES (?,?)',[desc,value],
    (error,result)=>{
        if(error){
            console.log(error);
            response.json({err:error, success:false});
        }
        else{
            if(result.length > 0){
                console.log(result);
                response.json({data:result, success:true});
            }
            else{
                response.json({success:false});
            }
        }
    });
});


app.get('/getDescriptor',(req,res)=>{
    db.query('SELECT Desc_id,Description,Area_id FROM Competency_Descriptor;',(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            if(result.length > 0 ){
                res.json({data:result});
            }
            else{
                console.log('No data found!');
            }
        }
    });
})

app.post('/addTemplate', (request,response)=>{

    const tid = request.body.tid;
    const idArray = request.body.descId;
    const s = new Set(idArray)
    console.log(tid);
    console.log(s);

    s.forEach(key => {
        db.query('INSERT INTO Comp_Temp VALUES (?,?)',[tid,key],(err,res)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log(res)
            }
        })
    })
    response.json({success:true})
})



app.post('/assignTemplate', (request,response)=>{

    const tempId = request.body.tempId;
    const reviewCId = request.body.reviewCId;
    const empId = request.body.empId;
    // const arr = new Array (empId);

    empId.forEach( key => {
    db.query('INSERT INTO assign_template(temp_id,review_id,emp_id) VALUES (?,?,?)',
    [tempId,reviewCId,key],
    (error,result)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log(result);
            }
        })
    })
});

app.post('/addTemplateName', (request,response)=>{

    const tempName = request.body.tempName;

    db.query('INSERT INTO Templates(TempName) VALUES (?)',[tempName],
    (error,result)=>{
        if(error){
            console.log(error);
            response.json({err:error, success:false});
        }
        else{
            if(result.length > 0){
                console.log(result);
                response.json({data:result, success:true});
            }
            else{
                response.json({success:false});
            }
        }
    });
});

app.get('/getTemplateNames',(req,res)=>{
    db.query('SELECT Temp_id,TempName FROM Templates;',(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            if(result.length > 0 ){
                res.json({data:result});
            }
            else{
                console.log('No data found!');
            }
        }
    });
})

app.post('/setPassword', (request,response)=>{

    const pass = request.body.pass;
    const flogin = request.body.flogin;
    const Emp_id = request.body.Emp_id;

    db.query('UPDATE employee SET password = ?, flogin = ? WHERE Emp_id = ? ',[pass,flogin,parseInt(Emp_id)],
    (error,result)=>{
        if(error){
            console.log(error);
            response.json({err:error, success:false});
        }
        else{
            response.json({success:true});
        }
    });
});

app.post('/addRatings', (request,response)=>{

    const ratingSymbol = request.body.ratingSymbol;
    const ratingDesc = request.body.ratingDesc;

    db.query('INSERT INTO Ratings(Rating_Symbol, Rating_Desc) VALUES (?,?)',[ratingSymbol,ratingDesc],
    (error,result)=>{
        if(error){
            console.log(error);
            response.json({err:error, success:false});
        }
        else{
            if(result.length > 0){
                console.log(result);
                response.json({data:result, success:true});
            }
            else{
                response.json({success:false});
            }
        }
    });
});

app.get('/getRatingDetails',(req,res)=>{
    db.query('SELECT Rating_Id,Rating_Symbol,Rating_Desc FROM Ratings;',(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            if(result.length > 0 ){
                res.json({data:result});
            }
            else{
                console.log('No data found!');
            }
        }
    });
})

app.post('/addReview', (request,response)=>{

    const reviewName = request.body.reviewName;
    const start = request.body.start;
    const end = request.body.end;
    console.log(reviewName);
    console.log(start);
    console.log(end);

    db.query('INSERT INTO Review_Cycles(Review_Cycle_Name, Start, End) VALUES (?,?,?)',
    [reviewName,start,end],
    (error,result)=>{
        if(error){
            console.log(error);
            response.json({err:error, success:false});
        }
        else{
            if(result.length > 0){
                console.log(result);
                response.json({data:result, success:true});
            }
            else{
                response.json({success:false});
            }
        }
    });
});

app.get('/getReview',(req,res)=>{
    db.query('SELECT Review_Id,Review_Cycle_Name,Start,End FROM Review_Cycles;',(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            if(result.length > 0 ){
                res.json({data:result});
            }
            else{
                console.log('No data found!');
            }
        }
    });
});

app.get('/getReviewNames',(req,res)=>{
    db.query('SELECT Review_Id,Review_Cycle_Name FROM Review_Cycles;',(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            if(result.length > 0 ){
                res.json({data:result});
            }
            else{
                console.log('No data found!');
            }
        }
    });
});

app.get('/getEmpNames',(req,res)=>{
    db.query('SELECT Emp_id,first_name,last_name FROM Employee;',(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            if(result.length > 0 ){
                res.json({data:result});
            }
            else{
                console.log('No data found!');
            }
        }
    });
});

app.post('/getTemplateDescriptor',(req,res)=>{

    const temp_id = req.body.temp_id;
    db.query('Select AreaName,Description, ct.Desc_id from comp_temp ct, competency_descriptor cd, competency_area ca where ct.Desc_id = cd.Desc_id AND cd.Area_id = ca.Area_id AND Temp_id= ? ',[parseInt(temp_id)],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            if(result.length > 0 ){
                res.json({data:result, success:true});
                console.log(result)
            }
            else{
                console.log('No data found!');
            }
        }
    });
})

app.get("/selfAssessment/getCompetencyAreaNames", (req, res) => {  
    const select = "SELECT Area_id , AreaName FROM competency_area";
    db.query(select, (error, result) => {
        if(result.length > 0){
            res.send(result);
        }
    });
});

app.post("/selfAssessment/getTemplate", (req, res) => {
    const review_id = req.body.review_cycle_id;
    const emp_id = req.body.emp_id; 
    db.query("SELECT Desc_id, self_rating, self_comment, lead_rating, lead_comment FROM assessment WHERE Review_Id = ? AND Emp_id = ?", [review_id, emp_id], (err, results) => {
        const descSelect = "SELECT Desc_id, Description, Area_id FROM competency_descriptor WHERE Desc_id = ?";
        if(results.length > 0){
            let template = [];
            for(let i = 0; i < results.length; i++){                
                let elements = {};
                db.query(descSelect, [results[i].Desc_id], (err2, res2) => {                    
                    if(res2.length > 0){
                        res2.forEach(function(items) {
                            elements.cid = items.Area_id;
                            elements.did = items.Desc_id;
                            elements.des = items.Description;    
                            elements.selfRating = results[i].self_rating;
                            elements.selfComment = results[i].self_comment;
                            elements.leadRating = results[i].lead_rating;
                            elements.leadComment = results[i].lead_comment;
                            template.push(elements);                                               
                        });
                        if(i == results.length - 1){   res.json({data:template, success:true}) }
                    }else{   res.json({error: err2, success: false});  }                    
                });                
            }
        }else{
            const sqlSelect = "SELECT Temp_id FROM assign_template WHERE Review_Id = ? AND emp_id = ?";
            const descIdSelect = "SELECT Desc_id FROM comp_temp WHERE Temp_id = ?";
            let final = [];
            db.query(sqlSelect, [review_id, emp_id], (error, result) => {
                if(result.length > 0){
                    console.log(result)
                    db.query(descIdSelect, [result[0].Temp_id], (err, descArr) => {
                        if(descArr.length > 0){                        
                            for(let i = 0; i < descArr.length; i++){  
                                db.query(descSelect, [descArr[i].Desc_id], (err1, res1) => {
                                    if(res1.length > 0){
                                        var element = {};  
                                        res1.forEach(function(items) {
                                            element.cid = items.Area_id;
                                            element.did = items.Desc_id;
                                            element.des = items.Description;
                                            final.push(element);                   
                                        }); 
                                        if(i == descArr.length-1){  res.json({data:final, success:true});    }
                                    }else{   res.json({error: error, success: false});  }                            
                                })   
                            }      
                        }else{  res.json({error: error, success: false});   }  
                    });
                }else{  res.json({error: error, success: false});  }            
            }); 
        }
    });
});

app.post("/selfAssessment/insert", (req, res) => {
    const review_id = req.body.review_id;
    const emp_id = req.body.emp_id;
    const assessmentArr = req.body.assessmentArr;
    console.log(review_id)
    console.log(emp_id)
    console.log(assessmentArr);
    db.query("SELECT Desc_id FROM assessment WHERE Review_Id = ? AND emp_id = ?", [review_id, emp_id], (err, result) => {
        if(result.length > 0){
            const updateSql = "UPDATE assessment SET self_rating = ?, self_comment = ? WHERE Desc_id = ? AND (Review_Id = ? AND emp_id = ?)";
            for(let i = 0; i < assessmentArr.length; i++)
            {
                if(typeof(assessmentArr[i].rating) != "undefined" && typeof(assessmentArr[i].comment) != "undefined"){                    
                    db.query(updateSql, [assessmentArr[i].rating, assessmentArr[i].comment, assessmentArr[i].id, review_id, emp_id], (e, r) =>{ })
                }
                if(i == assessmentArr.length - 1){
                    res.json({success:true});
                }
            }
        }else{
            const sqlInsert = "INSERT INTO assessment(Review_Id, emp_id, Desc_id, self_rating, self_comment) VALUES (?, ?, ?, ?, ?)"; 
            for(let i = 0; i < assessmentArr.length; i++)
            {
                db.query(sqlInsert, [review_id, emp_id, assessmentArr[i].id, assessmentArr[i].rating, assessmentArr[i].comment], 
                    (error, result) => {             
                        if(i == assessmentArr.length-1){  
                            res.json({err:error, success:true});  
                    }      
                });
            }
        }
    });
});

app.post("/leadAssessment/getTemplate", (req, res) => {
    const review_id = req.body.review_cycle_id;
    const emp_id = req.body.emp_id;    
    db.query("SELECT Desc_id, self_rating, self_comment, lead_rating, lead_comment FROM assessment WHERE Review_Id = ? AND emp_id = ?", [review_id, emp_id], 
    (err, results) => {
        const descSelect = "SELECT Desc_id, Description, Area_id FROM competency_descriptor WHERE Desc_id = ?";
        if(results.length > 0){
            let template = [];
            for(let i = 0; i < results.length; i++){                
                let elements = {};
                db.query(descSelect, [results[i].Desc_id], (err2, res2) => {                    
                    if(res2.length > 0){
                        res2.forEach(function(items) {
                            elements.cid = items.Area_id;
                            elements.did = items.Desc_id;
                            elements.des = items.Description;    
                            elements.selfRating = results[i].self_rating;
                            elements.selfComment = results[i].self_comment;
                            elements.leadRating = results[i].lead_rating;
                            elements.leadComment = results[i].lead_comment;
                            template.push(elements);                                               
                        });
                        if(i == results.length - 1){   res.json({data:template, success:true}) }
                    }else{   res.json({error: err2, success: false});  }                    
                });                
            }
        }else{    res.json({error: err, success: false});   }
    });
});
app.post("/leadAssessment/insert", (req, res) => {
    const review_id = req.body.review_id;
    const emp_id = req.body.emp_id;
    const assessmentArr = req.body.assessmentArr;
    
    db.query("SELECT Desc_id FROM assessment WHERE Review_Id = ? AND emp_id = ?", [review_id, emp_id], (err, result) => {
        if(result.length > 0){
            const updateSql = "UPDATE assessment SET lead_rating = ?, lead_comment = ? WHERE Desc_id = ? AND (Review_Id = ? AND emp_id = ?)";
            for(let i = 0; i < assessmentArr.length; i++)
            {
                if(typeof(assessmentArr[i].rating) != "undefined" && typeof(assessmentArr[i].comment) != "undefined"){                    
                    db.query(updateSql, [assessmentArr[i].rating, assessmentArr[i].comment, assessmentArr[i].id, review_id, emp_id], (e, r) =>{ })
                }
                if(i == assessmentArr.length - 1){
                    res.json({success:true});
                }
            }
        }else{   res.json({err:err, success:false});    }  
    });
});

app.get("/getEmployee", (req, res) => {
    const selectEmp = "SELECT emp_id, first_name FROM employee";
    db.query(selectEmp, (error, result) => {
        if(error){
            console.log(error);
            //res.json({err:error, success:false});
        }
        else{if(result.length > 0){
            res.send(result);
        }    }    
    })
});

app.get("/leadAssessment/getEmployee", (req, res) => {
    const selectEmp = "SELECT emp_id, first_name FROM employee WHERE lead_name = 'Suresh';";
    db.query(selectEmp, (err, result) => {
         if(result.length > 0){
            res.send(result);
        }
    })
});


app.listen(3001, ()=>{
    console.log(`Listening on port 3001`);
});