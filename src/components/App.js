import React from "react";
import GeneralInfo from "./GeneralInfo";
import EducationInfo from "./EducationInfo";
import JobExpInfo from "./JobExpInfo";

class App extends React.Component{
  render(){
    return(
      <div>
        <GeneralInfo/>
        <EducationInfo/>
        <JobExpInfo/>
      </div>
    )
  }
}

export default App;
