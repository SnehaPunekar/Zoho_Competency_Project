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
     console.log('Inside GetCompetencyArea Function');
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
    // return output;
    })
 }}

module.exports = CompetencyArea;