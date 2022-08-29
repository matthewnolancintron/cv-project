import React from "react";
import CategoryInfo from "./CategoryInfo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.state = {
      // toggleEdit is set to notInEditMode or inEditMode

      // general info
      toggleEditName: "notInEditMode",
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
     * toggles value in state corresponding to button's id
     */

    this.setState((state, props) => {
      console.log(state[e.id])
      return {
        [e.id]: state[e.id] === 'notInEditMode' ? 'inEditMode' : 'notInEditMode',
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
            {
              fieldName:'name',
              toggleButtonId:'name',
              toggleButtonText:'edit'

            },
            {
              fieldName:'email',
              toggleButtonId:'email',
              toggleButtonText:'edit'

            }
          ]}
          toggleEdit={this.toggleEdit}
          generalInfoToggleEditValues={this.state.toggleEditName}>

          </CategoryInfo>
        
        {/* education info */}
        {/* <CategoryInfo categoryName={'education info'} numberOfFormFields={2} toggleEdit={this.toggleEdit} generalInfoToggleEditValues={this.state.toggleEditName}></CategoryInfo> */}
        
        {/* job exp info */}
        {/* <CategoryInfo categoryName={'job exp info'} numberOfFormFields={4} toggleEdit={this.toggleEdit} generalInfoToggleEditValues={this.state.toggleEditName}></CategoryInfo> */}
        
      </div>
    );
  }
}

export default App;
