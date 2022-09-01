import React from "react";
import CategoryInfo from "./CategoryInfo";
import { nanoid } from 'nanoid'

let keysForFormFields = Array.from(Array(8),(e,i)=>nanoid());

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      // toggleEdit is set to notInEditMode or inEditMode

      // general info
      toggleEditName: "notInEditMode",
      //holds value from input
      nameInput:'',
      toggleEditEmail: "notInEditMode",
      emailInput:'',

      // educational info
      toggleEditSchoolName: "notInEditMode",
      schoolNameInput:'',

      toggleEditDateOfStudy: "notInEditMode",
      dateOfStudyInput:'',

      // job info
      toggleEditCompanyName: "notInEditMode",
      companyNameInput:'',

      toggleEditCompanyJobPositionTitle: "notInEditMode",
      jobPositionTitleInput:'',

      toggleEditMainTasksOfJob: "notInEditMode",
      mainTasksOfJobInput:'',

      toggleEditStartAndEndDate: "notInEditMode",
      startAndEndDateInput:'',
    };
  }

  toggleEdit(e) {
    // should update state depeneding on edit or submit.
    //button's id that was pressed.

    /**
     * toggles value in state associated with button's id
     */
    this.setState((state) => {
      return {
        [e.id]: state[e.id] === 'notInEditMode' ? 'inEditMode' : 'notInEditMode',
      };
    });
  
  }

  handleInputChange(e){
    /**
      saves text from this input to a value in app's state it will save to the
      correct property in state using the id of the input as "link"
      that property will be used for the text display
      then re-use the toggle edit button when ready to switch back to "display mode"      
     */
    this.setState(state =>{
      return{
        [e.id]:e.value
      };
    });

  }

  /**
   * to use state to change what rendered in child components
   * 
   * option 1:
   * could use component did update method in parent component
   * to change parents state but the issues with that would be
   * after changing state it would get called again unless 
   * there is a soultion to that not an option as of now.
   * 
   * option 2:
   * pass a callbackfunction into the set state method call that
   * updates the toggleEdit state properties
   * the callback would update a state properties that
   * holds either text and edit or input and submmit
   * and that would be used in the child component as a prop
   * 
   * option 3:
   * use conditional render in child component that uses
   * parent component state passed as props to child components
   * to create the condition that determines the render for child
   * components
   * 
   * to pass the updated toggle values to child components
   * could create a few someThingName={this.state.someToggleEditValue}
   * and get it in child component with this.props.someToggleEditValue
   * or use a single x={and add a data structure that hold them for each section}
   */
  render() {
    return (
      <div>
        {/* general info */}
        <CategoryInfo
          categoryName={'general info'}
          formFieldsData={[
            /**
              button id shares it's name with the toogle edit values
              in app's state since it's used in the toggle edit method
              to determine which state value to update
              depending on which formField button was pressed
              the names link the buttons to the correct 
              property in state.
            */
            {
              // text/edit
              labelText:'name',
              fieldName:this.state.nameInput,
              toggleButtonId:'toggleEditName',
              toggleButtonText:this.state.toggleEditName === 'notInEditMode' ? 'edit':'submit',
              
              // input/submit
              inputId:'nameInput',
              inputValue:this.state.nameInput,
              submitButtonId:'nameSubmit',

              //both
              key:keysForFormFields[0],
              isInEditMode:this.state.toggleEditName,

            },
            {
              // text/edit
              labelText:'email',
              fieldName:this.state.emailInput,
              toggleButtonId:'toggleEditEmail',
              toggleButtonText:this.state.toggleEditEmail === 'notInEditMode' ? 'edit':'submit',

              // input/submit
              inputId:'emailInput',
              inputValue:this.state.emailInput,
              submitButtonId:'emailSubmit',

              //both
              key:keysForFormFields[1],
              isInEditMode:this.state.toggleEditEmail
            }
          ]}
          toggleEdit={this.toggleEdit}
          handleInputChange={this.handleInputChange}
          >
          </CategoryInfo>
        
        {/* education info */}
        <CategoryInfo
          categoryName={'education info'}
          formFieldsData={[
            {
              // text/edit
              labelText:'school name',
              fieldName:this.state.schoolNameInput,
              toggleButtonId:'toggleEditSchoolName',
              toggleButtonText:this.state.toggleEditSchoolName === 'notInEditMode' ? 'edit':'submit',
              
              // input/submit
              inputId:'schoolNameInput',
              inputValue:this.state.schoolNameInput,
              submitButtonId:'schoolNameSubmit',

              //both
              key:keysForFormFields[2],
              isInEditMode:this.state.toggleEditSchoolName,
            },
            {
              // text/edit
              labelText:'date of study',
              fieldName:this.state.dateOfStudyInput,
              toggleButtonId:'toggleEditDateOfStudy',
              toggleButtonText:this.state.toggleEditDateOfStudy === 'notInEditMode' ? 'edit':'submit',

              // input/submit
              inputId:'dateOfStudyInput',
              inputValue:this.state.dateOfStudyInput,
              submitButtonId:'dateOfStudySubmit',

              // both
              key:keysForFormFields[3],
              isInEditMode:this.state.toggleEditDateOfStudy,
            }
          ]}
          toggleEdit={this.toggleEdit}
          handleInputChange={this.handleInputChange}
          >
          </CategoryInfo>
        
        {/* job exp info */}
        <CategoryInfo
          categoryName={'job info'}
          formFieldsData={[
            {
              // text/edit
              labelText:'company name',
              fieldName:this.state.companyNameInput,
              toggleButtonId:'toggleEditCompanyName',
              toggleButtonText:this.state.toggleEditCompanyName === 'notInEditMode' ? 'edit':'submit',
              
              // input/submit
              inputId:'companyNameInput',
              inputValue:this.state.companyNameInput,
              submitButtonId:'compnayNameSubmit',

              //both
              key:keysForFormFields[4],
              isInEditMode:this.state.toggleEditCompanyName,
            },
            {
              // text/edit
              labelText:'job position title',
              fieldName:this.state.jobPositionTitleInput,
              toggleButtonId:'toggleEditCompanyJobPositionTitle',
              toggleButtonText:this.state.toggleEditCompanyJobPositionTitle === 'notInEditMode' ? 'edit':'submit',

              // input/submit
              inputId:'jobPositionTitleInput',
              inputValue:this.state.jobPositionTitleInput,
              submitButtonId:'jobPositionTitleInputSubmit',

              // both
              key:keysForFormFields[5],
              isInEditMode:this.state.toggleEditCompanyJobPositionTitle,
            },
            {
              // text/edit
              labelText:'main tasks of the job',
              fieldName:this.state.mainTasksOfJobInput,
              toggleButtonId:'toggleEditMainTasksOfJob',
              toggleButtonText:this.state.toggleEditMainTasksOfJob === 'notInEditMode' ? 'edit':'submit',

              // input/submit
              inputId:'mainTasksOfJobInput',
              inputValue:this.state.mainTasksOfJobInput,
              submitButtonId:'mainTasksOfJobSubmit',

              // both
              key:keysForFormFields[6],
              isInEditMode:this.state.toggleEditMainTasksOfJob,
            },
            {
              // text/edit
              labelText:'start and end date of work',
              fieldName:this.state.startAndEndDateInput,
              toggleButtonId:'toggleEditStartAndEndDate',
              toggleButtonText:this.state.toggleEditStartAndEndDate === 'notInEditMode' ? 'edit':'submit',

              // input/submit
              inputId:'startAndEndDateInput',
              inputValue:this.startAndEndDateInput,
              submitButtonId:'startAndEndDateInputSubmit',

              // both
              key:keysForFormFields[7],
              isInEditMode:this.state.toggleEditStartAndEndDate,
            },
          ]}
          toggleEdit={this.toggleEdit}
          handleInputChange={this.handleInputChange}
          >
          </CategoryInfo>
      </div>
    );
  }
}

export default App;