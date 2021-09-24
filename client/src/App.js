import LoginPage from './components/Login/LoginPage';
import ChangePassword from './components/Login/ChangePassword';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import AddCompetencyArea from './components/Admin/AddCompetencyArea';
import AddCompetencyDescriptor from './components/Admin/AddCompetencyDescriptor'
// import Sidebar from './components/common/Sidebar';
import Navbarmenu from './components/Navbar/Navbarmenu';
import CreateTemplate from './components/common/CreateTemplate';
import ViewTemplate from './components/common/ViewTemplate';
import AssignTemplate from './components/Lead/AssignTemplate';
import AddRatings from './components/Admin/AddRatings';
import ReviewCycle from './components/Admin/ReviewCycle';
import SelfAssessment from './components/common/SelfAssessment';
import LeadAssessment from './components/Lead/LeadAssessment';
import AddTemplate from './components/Admin/AddTemplate';
import LastLeadAssessment from './components/Lead/LastLeadAssessment';
import LastSelfAssessment from './components/common/LastSelfAssessment';
import NotFound from './components/common/NotFound';
import NavbarLead from './components/Navbar/NavbarLead';
import NavbarEmployee from './components/Navbar/NavbarEmployee';

function App() {

  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path='/login' component={LoginPage}/>
        {! (localStorage.getItem('id')) && <Redirect push to='/login'></Redirect>}
        {
          localStorage.getItem('id') && localStorage.getItem('role') ==='Admin' &&
            <div>             
                <Route path='/ChangePassword' component={ChangePassword}/>
                <Navbarmenu />
               
                <Route path='/AddCompetencyArea' component={AddCompetencyArea}/>
                <Route path='/addCompetencyDescriptor' component={AddCompetencyDescriptor}/>
                <Route path='/AddRatings' component={AddRatings}/>
                <Route path='/ReviewCycle' component={ReviewCycle}/>
            
                <Route path='/AddTemplate' component={AddTemplate}/>
                <Route path='/createTemplate' component={CreateTemplate}/>
                <Route path='/viewTemplate' component={ViewTemplate}/>
                
                <Route path='/selfAssessment' component={SelfAssessment}/>
                <Route path='/lastselfassessment' component={LastSelfAssessment}/>
                <Route path='/Logout' render={()=>{ localStorage.clear(); window.location.reload()}} />
            </div> 
         }
         {
           localStorage.getItem('id') && localStorage.getItem('role') ==='Lead' &&
           <div>             
               <Route path='/ChangePassword' component={ChangePassword}/>
               <NavbarLead />
                                       
               <Route path='/AddTemplate' component={AddTemplate}/>
               <Route path='/CreateTemplate' component={CreateTemplate}/>
               <Route path='/AssignTemplate' component={AssignTemplate}/> 
               <Route path='/ViewTemplate' component={ViewTemplate}/>
               
               <Route path='/selfAssessment' component={SelfAssessment}/>
               <Route path='/lastselfassessment' component={LastSelfAssessment}/>
               <Route path='/leadAssessment' component={LeadAssessment}/>
               <Route path='/lastLeadAssessment' component={LastLeadAssessment}/>
               <Route path='/Logout' render={()=>{ localStorage.clear(); window.location.reload()}} />
           </div> 
         }
         {
           localStorage.getItem('id') && localStorage.getItem('role') ==='Developer' &&
           <div>             
               <Route path='/ChangePassword' component={ChangePassword}/>
               <NavbarEmployee />
                                           
               <Route path='/selfAssessment' component={SelfAssessment}/>
               <Route path='/lastselfassessment' component={LastSelfAssessment}/>
               <Route path='/leadAssessment' component={LeadAssessment}/>
               <Route path='/lastLeadAssessment' component={LastLeadAssessment}/>
               <Route path='/Logout' render={()=>{ localStorage.clear(); window.location.reload()}} />
           </div> 
         }
      </Switch>
      </Router>
    </div>    
  );
}


export default App;
