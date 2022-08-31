import React from "react";
import CategoryInfo from "./CategoryInfo";
import { nanoid } from 'nanoid'

let keysForFormFields = Array.from(Array(7),(e,i)=>nanoid());

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

      // educational info
      toggleEditSchoolName: "notInEditMode",
      toggleEditDateOfStudy: "notInEditMode",

      // job info
      toggleEditCompanyName: "notInEditMode",
      toggleEditCompanyJobPositionTitle: "notInEditMode",
      toggleEditMainTasksOfJob: "notInEditMode",
      toggleEditStartAndEndDate: "notInEditMode",
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
              toggleButtonText:this.state.toggleEditName === 'notInEditMode' ? 'edit name':'submit',
              
              // input/submit
              inputId:'nameInput',
              inputValue:this.state.nameInput,
              submitButtonId:'nameSubmit',

              //both
              key:keysForFormFields[0],
              isInEditMode:this.state.toggleEditName,

            },
            {

              //set similary to name
              fieldName:'email',
              toggleButtonId:'toggleEditEmail',
              toggleButtonText:'edit',
              key:keysForFormFields[1],
              isInEditMode:this.state.toggleEditEmail

            }
          ]}
          toggleEdit={this.toggleEdit}
          handleInputChange={this.handleInputChange}
          >

          </CategoryInfo>
        
        
        {/* education info */}
        {/* <CategoryInfo categoryName={'education info'} numberOfFormFields={2} toggleEdit={this.toggleEdit} generalInfoToggleEditValues={this.state.toggleEditName}></CategoryInfo> */}
        {/* school name, data of study */}

        {/* job exp info */}
        {/* <CategoryInfo categoryName={'job exp info'} numberOfFormFields={4} toggleEdit={this.toggleEdit} generalInfoToggleEditValues={this.state.toggleEditName}></CategoryInfo> */}
        {/* company name, job position, work from until data */}
      </div>
    );
  }
}

export default App;