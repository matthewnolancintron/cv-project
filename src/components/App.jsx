import React from "react";
import CategoryInfo from "./CategoryInfo";
import { nanoid } from 'nanoid'

let keysForFormFields = Array.from(Array(8), (e, i) => nanoid());

export default function App() {
  const [cvData, setCvData] = React.useState({
    inputs: {
      name: {
        isEditing: false,
        value: '',
      },

      email: {
        isEditing: false,
        value: '',
      },

      schoolName: {
        isEditing: false,
        value: '',
      },

      dateOfStudy: {
        isEditing: false,
        value: '',
      },

      companyName: {
        isEditing: false,
        value: '',
      },

      jobPositionTitle: {
        isEditing: false,
        value: '',
      },

      mainTasksOfJob: {
        isEditing: false,
        value: '',
      },

      startAndEndDate: {
        isEditing: false,
        value: '',
      },
    },
  });

  /**
    This function toggles the isEditing property of an input object
    within the cvData state 
   */
  function toggleEdit(e) {
    setCvData(prevState => ({
      ...prevState, // spread operator to copy the previous state
      inputs: {
        ...prevState.inputs, // spread operator to copy the previous inputs

        // bracket notation to use the value of e.dataset.inputType as the new key
        [e.dataset.inputType]: { 
          
          // spread operator to copy the previous inputType object
          ...prevState.inputs[e.dataset.inputType],
          
          // toggle the isEditing value
          [e.dataset.inputProperty]: 
          !prevState.inputs[e.dataset.inputType].isEditing, 
        },
      },
    }));
  }

/**
 * Updates cvData input value data based on input
 * and is called on its onChange event.
 */
function handleInputChange(e) {
  setCvData(prevState => ({
    ...prevState, // spread operator to copy the previous state
    inputs: {
      ...prevState.inputs, // spread operator to copy the previous inputs

      // bracket notation to use the value of e.dataset.inputType as
      // the new key
      [e.dataset.inputType]: {

        // spread operator to copy the previous inputType object
        ...prevState.inputs[e.dataset.inputType],

        // update the inputProperty with the new value from the event object
        [e.dataset.inputProperty]: e.value,
      },
    },
  }));
}

  return (
    <div>
      {/* general info */}
      <CategoryInfo
        categoryName={'general info'}
        formFieldsData={[
          {
            // edit
            labelText: 'name',
            fieldName: cvData.inputs.name.value,
            toggleButtonText: cvData.inputs.name.isEditing ? 'submit' : 'edit',

            // input/submit
            inputValue: cvData.inputs.name.value,
            submitButtonId: 'nameSubmit',

            //both
            key: keysForFormFields[0],
            isInEditMode: cvData.inputs.name.isEditing,

            //input and button data
            inputTypeForInput:'name',
            inputPropertyForInput:'value',
            inputTypeForButton:'name',
            inputPropertyForButton:'isEditing',
          },
          {
            // edit
            labelText: 'email',
            fieldName: cvData.inputs.email.value,
            
            toggleButtonText: cvData.inputs.email.isEditing ? 'submit' : 'edit',

            // input/submit
            inputValue: cvData.inputs.email.value,
            submitButtonId: 'emailSubmit',

            //both
            key: keysForFormFields[1],
            isInEditMode: cvData.inputs.email.isEditing,

            inputTypeForInput:'email',
            inputPropertyForInput:'value',
            inputTypeForButton:'email',
            inputPropertyForButton:'isEditing',
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
            labelText: 'school name',
            fieldName: cvData.inputs.schoolName.value,

            
            toggleButtonText: cvData.inputs.schoolName.isEditing ? 'submit' : 'edit',

            // input/submit
            inputValue: cvData.inputs.schoolName.value,
            submitButtonId: 'schoolNameSubmit',

            //both
            key: keysForFormFields[2],
            isInEditMode: cvData.inputs.schoolName.isEditing,

            inputTypeForInput:'schoolName',
            inputPropertyForInput:'value',
            inputTypeForButton:'schoolName',
            inputPropertyForButton:'isEditing',
          },
          {
            // text/edit
            labelText: 'date of study',
            fieldName: cvData.inputs.dateOfStudy.value,
            
            toggleButtonText: cvData.inputs.dateOfStudy.isEditing ? 'submit' : 'edit',

            // input/submit
            inputValue: cvData.inputs.dateOfStudy.value,
            submitButtonId: 'dateOfStudySubmit',

            // both
            key: keysForFormFields[3],
            isInEditMode: cvData.inputs.dateOfStudy.isEditing,

            inputTypeForInput:'dateOfStudy',
            inputPropertyForInput:'value',
            inputTypeForButton:'dateOfStudy',
            inputPropertyForButton:'isEditing',
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
            labelText: 'company name',
            fieldName: cvData.inputs.companyName.value,
            
            toggleButtonText: cvData.inputs.companyName.isEditing ? 'submit' : 'edit',

            // input/submit
            inputValue: cvData.inputs.companyName.value,
            submitButtonId: 'compnayNameSubmit',

            //both
            key: keysForFormFields[4],
            isInEditMode: cvData.inputs.companyName.isEditing,

            inputTypeForInput:'companyName',
            inputPropertyForInput:'value',
            inputTypeForButton:'companyName',
            inputPropertyForButton:'isEditing',
          },
          {
            // text/edit
            labelText: 'job position title',
            fieldName: cvData.inputs.jobPositionTitle.value,
            
            toggleButtonText: cvData.inputs.jobPositionTitle.isEditing ? 'submit' : 'edit',

            // input/submit
            inputValue: cvData.inputs.jobPositionTitle.value,
            submitButtonId: 'jobPositionTitleInputSubmit',

            // both
            key: keysForFormFields[5],
            isInEditMode: cvData.inputs.jobPositionTitle.isEditing,

            inputTypeForInput:'jobPositionTitle',
            inputPropertyForInput:'value',
            inputTypeForButton:'jobPositionTitle',
            inputPropertyForButton:'isEditing',
          },
          {
            // text/edit
            labelText: 'main tasks of the job',
            fieldName: cvData.inputs.mainTasksOfJob.value,
            
            toggleButtonText: cvData.inputs.mainTasksOfJob.isEditing ? 'submit' : 'edit',

            // input/submit
            inputValue: cvData.inputs.mainTasksOfJob.value,
            submitButtonId: 'mainTasksOfJobSubmit',

            // both
            key: keysForFormFields[6],
            isInEditMode: cvData.inputs.mainTasksOfJob.isEditing,

            inputTypeForInput:'mainTasksOfJob',
            inputPropertyForInput:'value',
            inputTypeForButton:'mainTasksOfJob',
            inputPropertyForButton:'isEditing',
          },
          {
            // text/edit
            labelText: 'start and end date of work',
            fieldName: cvData.inputs.startAndEndDate.value,
            
            toggleButtonText: cvData.inputs.startAndEndDate.isEditing ? 'submit' : 'edit',

            // input/submit
            inputValue: cvData.inputs.startAndEndDate.value,
            submitButtonId: 'startAndEndDateInputSubmit',

            // both
            key: keysForFormFields[7],
            isInEditMode: cvData.inputs.startAndEndDate.isEditing,

            inputTypeForInput:'startAndEndDate',
            inputPropertyForInput:'value',
            inputTypeForButton:'startAndEndDate',
            inputPropertyForButton:'isEditing',
          },
        ]}
        toggleEdit={toggleEdit}
        handleInputChange={handleInputChange}
      >
      </CategoryInfo>
    </div>
  );
}