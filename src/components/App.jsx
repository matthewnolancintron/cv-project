import React,{useState,useEffect,useReducer} from 'react'
import CategoryInfo from "./CategoryInfo";
import { nanoid } from 'nanoid'

//Todo:check usememo hook for nanoid
let keysForFormFields = Array.from(Array(8),(e,i)=>nanoid());

function App() {
  //state for toggling the edits
  const [toggleEdits,setToggleEdits] = useState({
    toggleEditName:'notInEditMode',
    toggleEditEmail:'notInEditMode',
    toggleEditSchoolName:'notInEditMode',
    toggleEditDateOfStudy:'notInEditMode',
    toggleEditCompanyName:'notInEditMode',
    toggleEditCompanyJobPositionTitle:'notInEditMode',
    toggleEditMainTasksOfJob:'notInEditMode',
    toggleEditStartAndEndDate:'notInEditMode',
  });


  //todo: re-factore input state variable  
  const [nameInput,setNameInput] = useState('');
  const [emailInput,setEmailInput] = useState('');
  const [schoolNameInput,setSchoolNameInput] = useState('');
  const [dateOfStudyInput,setDateOfStudyInput] = useState('');
  const [companyNameInput,setCompanyNameInput] = useState('');
  const [jobPositionTitleInput,setJobPositionTitle] = useState('');
  const [mainTasksOfJobInput,setMainTasksOfJobInput] = useState('');
  const [startAndEndDateInput, setStartAndEndDateInput] = useState('');
  
  const toggleEdit = (e) => {
  /**
   * toggles value in state associated with button's id
   */
  // should update state depeneding on edit or submit.
  //button's id that was pressed.
    setToggleEdits(prevState => {
      return {...prevState,[e.id]:toggleEdits[e.id] === 'notInEditMode' ? 'inEditMode' : 'notInEditMode'};
    });
  }

  const handleInputChange = (e) => {
    /**
      saves text from this input to a value in app's state it will save to the
      correct property in state using the id of the input as "link"
      that property will be used for the text display
      then re-use the toggle edit button when ready to switch back to "display mode"      
     */
    // this.setState(state =>{
    //   return{
    //     [e.id]:e.value
    //   };
    // });

  }

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
            fieldName:nameInput,
            toggleButtonId:'toggleEditName',
            toggleButtonText:toggleEdits.toggleEditName === 'notInEditMode' ? 'edit':'submit',
            
            // input/submit
            inputId:'nameInput',
            inputValue:nameInput,
            submitButtonId:'nameSubmit',

            //both
            key:keysForFormFields[0],
            isInEditMode:toggleEdits.toggleEditName,

          },
          {
            // text/edit
            labelText:'email',
            fieldName:emailInput,
            toggleButtonId:'toggleEditEmail',
            toggleButtonText:toggleEdits.toggleEditEmail === 'notInEditMode' ? 'edit':'submit',

            // input/submit
            inputId:'emailInput',
            inputValue:emailInput,
            submitButtonId:'emailSubmit',

            //both
            key:keysForFormFields[1],
            isInEditMode:toggleEdits.toggleEditEmail
          }
        ]}
        toggleEdit={toggleEdit}
        handleInputChange={handleInputChange}
        >
        </CategoryInfo>
      
      {/* education info */}
      <CategoryInfo
        categoryName={'education info'}
        formFieldsData={[
          {
            // text/edit
            labelText:'school name',
            fieldName:schoolNameInput,
            toggleButtonId:'toggleEditSchoolName',
            toggleButtonText:toggleEdits.toggleEditSchoolName === 'notInEditMode' ? 'edit':'submit',
            
            // input/submit
            inputId:'schoolNameInput',
            inputValue:schoolNameInput,
            submitButtonId:'schoolNameSubmit',

            //both
            key:keysForFormFields[2],
            isInEditMode:toggleEdits.toggleEditSchoolName,
          },
          {
            // text/edit
            labelText:'date of study',
            fieldName:dateOfStudyInput,
            toggleButtonId:'toggleEditDateOfStudy',
            toggleButtonText:toggleEdits.toggleEditDateOfStudy === 'notInEditMode' ? 'edit':'submit',

            // input/submit
            inputId:'dateOfStudyInput',
            inputValue:dateOfStudyInput,
            submitButtonId:'dateOfStudySubmit',

            // both
            key:keysForFormFields[3],
            isInEditMode:toggleEdits.toggleEditDateOfStudy,
          }
        ]}
        toggleEdit={toggleEdit}
        handleInputChange={handleInputChange}
        >
        </CategoryInfo>
      
      {/* job exp info */}
      <CategoryInfo
        categoryName={'job info'}
        formFieldsData={[
          {
            // text/edit
            labelText:'company name',
            fieldName:companyNameInput,
            toggleButtonId:'toggleEditCompanyName',
            toggleButtonText:toggleEdits.toggleEditCompanyName === 'notInEditMode' ? 'edit':'submit',
            
            // input/submit
            inputId:'companyNameInput',
            inputValue:companyNameInput,
            submitButtonId:'compnayNameSubmit',

            //both
            key:keysForFormFields[4],
            isInEditMode:toggleEdits.toggleEditCompanyName,
          },
          {
            // text/edit
            labelText:'job position title',
            fieldName:jobPositionTitleInput,
            toggleButtonId:'toggleEditCompanyJobPositionTitle',
            toggleButtonText:toggleEdits.toggleEditCompanyJobPositionTitle === 'notInEditMode' ? 'edit':'submit',

            // input/submit
            inputId:'jobPositionTitleInput',
            inputValue:jobPositionTitleInput,
            submitButtonId:'jobPositionTitleInputSubmit',

            // both
            key:keysForFormFields[5],
            isInEditMode:toggleEdits.toggleEditCompanyJobPositionTitle,
          },
          {
            // text/edit
            labelText:'main tasks of the job',
            fieldName:mainTasksOfJobInput,
            toggleButtonId:'toggleEditMainTasksOfJob',
            toggleButtonText:toggleEdits.toggleEditMainTasksOfJob === 'notInEditMode' ? 'edit':'submit',

            // input/submit
            inputId:'mainTasksOfJobInput',
            inputValue:mainTasksOfJobInput,
            submitButtonId:'mainTasksOfJobSubmit',

            // both
            key:keysForFormFields[6],
            isInEditMode:toggleEdits.toggleEditMainTasksOfJob,
          },
          {
            // text/edit
            labelText:'start and end date of work',
            fieldName:startAndEndDateInput,
            toggleButtonId:'toggleEditStartAndEndDate',
            toggleButtonText:toggleEdits.toggleEditStartAndEndDate === 'notInEditMode' ? 'edit':'submit',

            // input/submit
            inputId:'startAndEndDateInput',
            inputValue:startAndEndDateInput,
            submitButtonId:'startAndEndDateInputSubmit',

            // both
            key:keysForFormFields[7],
            isInEditMode:toggleEdits.toggleEditStartAndEndDate,
          },
        ]}
        toggleEdit={toggleEdit}
        handleInputChange={handleInputChange}
        >
        </CategoryInfo>
    </div>
  );
}


export default App;