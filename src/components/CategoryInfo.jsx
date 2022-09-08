import React from "react";
import FormField from "./formField";

function CategoryInfo(props) {
    let formFields = props.formFieldsData.map((element) => { 
      return (
        <FormField
          // conditional render could live here
          // or in formField
          labelText={element.labelText}
          fieldName={element.fieldName}
          toggleButtonId={element.toggleButtonId}
          toggleButtonText={element.toggleButtonText}
          toggleEdit={props.toggleEdit}

          inputId={element.inputId}
          inputValue={element.inputValue}
          handleInputChange={props.handleInputChange}

          key={element.key}
          isInEditMode={element.isInEditMode}
        ></FormField>
      );
    });
  
    return (
      <div>
        <br></br>
        <h1>{props.categoryName}</h1>
        <br></br>
        {formFields}
        <br></br>
      </div>
    );
  }

export default CategoryInfo;