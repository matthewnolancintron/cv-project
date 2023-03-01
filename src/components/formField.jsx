import React from "react";
/**
 * A form field component that renders either an input field or a static field depending on the mode.
 *
 * @param {Object} props - The props object containing the properties for the component.
 * @param {string} props.labelText - The label text for the form field.
 * @param {boolean} props.isInEditMode - A flag to determine if the form field is in edit mode or not.
 * @param {string} props.inputValue - The value of the input field.
 * @param {string} props.inputTypeForInput - The input type property to use when updating the state with the new value.
 * @param {string} props.inputPropertyForInput - The input property to use when updating the state with the new value.
 * @param {string} props.inputTypeForButton - The input type property to use when updating the state for the button toggle.
 * @param {string} props.inputPropertyForButton - The input property to use when updating the state for the button toggle.
 * @param {string} props.toggleButtonText - The text to display on the toggle button.
 * @param {string} props.fieldName - The name of the field to display in static mode.
 * @param {function} props.handleInputChange - The function to handle input change events.
 * @param {function} props.toggleEdit - The function to toggle between edit and static mode.
 */
export default function FormField({
  labelText,
  isInEditMode,
  inputValue,
  inputTypeForInput,
  inputPropertyForInput,
  inputTypeForButton,
  inputPropertyForButton,
  toggleButtonText,
  fieldName,
  handleInputChange,
  toggleEdit,
}) {
  return (
    <div>
      <br></br>
      <label>{labelText}:</label>
      {isInEditMode ? (
        // Render this if in edit mode
        <div>
          <input
            type="text"
            value={inputValue}
            data-input-type={inputTypeForInput}
            data-input-property={inputPropertyForInput}
            onChange={(e) => handleInputChange(e.target)}
          />

          <button
            data-input-type={inputTypeForButton}
            data-input-property={inputPropertyForButton}
            onClick={(e) => toggleEdit(e.target)}
          >
            {toggleButtonText}
          </button>
        </div>
      ) : (
        // Else render this if not in edit mode
        <div>
          <span>{fieldName}</span>
          <button
            onClick={(e) => toggleEdit(e.target)}
            data-input-type={inputTypeForButton}
            data-input-property={inputPropertyForButton}
          >
            {toggleButtonText}
          </button>
        </div>
      )}
      <br></br>
    </div>
  );
}