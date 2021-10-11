const CompetencyArea  = require( '../libs/db/actions/CompetencyAreaActions');
class AdminServices{

    constructor(){
        this.getCompetencyArea = new CompetencyArea();
    }

    getAllCompetencyAreas = async function() {
       let response = await this.getCompetencyArea.GetCompetencyArea();
        return response;
     }


    addCompetencyAreas = async function(){
        let response = await this.getCompetencyArea.AddCompetencyArea();
        return response;
    }
}

module.exports = AdminServices;
