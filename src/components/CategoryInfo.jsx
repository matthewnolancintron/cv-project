import React from "react";
import FormField from "./formField";
/**
 * Displays category information with corresponding form fields.
 *
 * @param {string} props.categoryName - The name of the category to be displayed.
 * @param {Object[]} props.formFieldsData - An array of objects representing each form field.
 * @param {string} props.formFieldsData[].labelText - The label text for the form field.
 * @param {string} props.formFieldsData[].fieldName - The name of the field being displayed.
 * @param {string} props.formFieldsData[].toggleButtonText - The text displayed on the toggle edit button.
 * @param {boolean} props.formFieldsData[].isInEditMode - Whether or not the field is currently in edit mode.
 * @param {string} props.formFieldsData[].inputValue - The current value of the input field.
 * @param {string} props.formFieldsData[].inputTypeForInput - The input type for the input field.
 * @param {string} props.formFieldsData[].inputPropertyForInput - The input property for the input field.
 * @param {string} props.formFieldsData[].inputTypeForButton - The input type for the toggle edit button.
 * @param {string} props.formFieldsData[].inputPropertyForButton - The input property for the toggle edit button.
 * @param {function} props.toggleEdit - Function to toggle the edit mode of a form field.
 * @param {function} props.handleInputChange - Function to handle changes in a form field's input value.
 *
 * @returns {JSX.Element} A JSX element representing the category and its corresponding form fields.
 */
export default function CategoryInfo({ categoryName, formFieldsData, toggleEdit, handleInputChange }) {
  let formFields = formFieldsData.map((element, index) => {
    return (
      <FormField
        key={element.key}
        labelText={element.labelText}
        fieldName={element.fieldName}
        toggleButtonText={element.toggleButtonText}
        toggleEdit={toggleEdit}
        isInEditMode={element.isInEditMode}
        inputValue={element.inputValue}
        handleInputChange={handleInputChange}
        inputTypeForInput={element.inputTypeForInput}
        inputPropertyForInput={element.inputPropertyForInput}
        inputTypeForButton={element.inputTypeForButton}
        inputPropertyForButton={element.inputPropertyForButton}
      ></FormField>
    );
  });

  return (
    <div>
      <br></br>
      <h1>{categoryName}</h1>
      <br></br>
      {formFields}
      <br></br>
    </div>
  );
}