const mysql = require('mysql');
const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'sneha123',
    database : 'competency',
    dateStrings: 'date',
});
class CompetencyDescriptor{

    constructor(){

    }

    GetCompetencyDescriptor = async function(){
        let output = [];
        return new Promise(function (resolve, reject) {
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
        });
    }
}