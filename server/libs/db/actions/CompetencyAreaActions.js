const mysql = require('mysql');
const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'sneha123',
    database : 'competency',
    dateStrings: 'date',
});
class CompetencyArea{

    constructor(){

    }

 GetCompetencyArea = async function(){
     let output = [];
     return new Promise(function (resolve, reject) {
   db.query('SELECT Area_id,AreaName FROM Competency_Area;', (err,result)=>{
        if(err){
             console.log(err);
            return reject(err);
        }
        
        else{
            if(result.length > 0 ){
                // res.json({data:result});
                output = result;
                
            }
            else{
                console.log('No data found!');
            }
            return resolve(result);
        }
        
    });
    })
 }

 AddCompetencyArea = async function(AreaName){
    // const AreaName = request.body.AreaName;
     console.log(AreaName);
    return new Promise(function (resolve, reject){
        db.query('INSERT INTO Competency_Area(AreaName) VALUES (?)',[AreaName],
    (error,result)=>{
        if(error){
            console.log(error);
            return reject(err);
        }
        else{
            if(result.length > 0){
                console.log(result);
                // response.json({data:result, success:true});
            }
            else{
                console.log('No data');
            }
            return resolve(result);
        }
    });
    })
 }

}

module.exports = CompetencyArea;