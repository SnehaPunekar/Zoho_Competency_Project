const GetCompetencyArea = ()=>{
    db.query('SELECT Area_id,AreaName FROM Competency_Area;',(err,result)=>{
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
}