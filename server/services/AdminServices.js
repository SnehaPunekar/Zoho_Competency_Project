const CompetencyArea  = require( '../libs/db/actions/CompetencyAreaActions');
class AdminServices{

    constructor(){
        console.log("hi");
        this.getCompetencyArea = new CompetencyArea();
    }

    getAllCompetencyAreas = async function() {
        console.log("Inside Function");
       let response = await this.getCompetencyArea.GetCompetencyArea();
       console.log("GetCompetencyArea");
        console.log(response);
        return response;
     }
}

module.exports = AdminServices;

// module.exports={
//     getAllCompetencyAreas: getAllCompetencyAreas
//  };