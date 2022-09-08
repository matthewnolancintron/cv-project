import React from "react";

function FormField(props) {
  return (
    // might breaks this component down into two more
    // componets one for text/edit and another
    // for input/submit
    <div>
      <br></br>
      <label>{props.labelText}:</label>
      {props.isInEditMode === "inEditMode" ? (
        //render this if in edit mode
        <div>
          <input
            type="text"
            id={props.inputId}
            value={props.inputValue}
            onChange={(e) => props.handleInputChange(e.target)}
          ></input>
          <button
            id={props.toggleButtonId}
            onClick={(e) => props.toggleEdit(e.target)}
          >
            {props.toggleButtonText}
          </button>
        </div>
      ) : (
        //else render this if not in edit mode

        <div>
          <span id={props.fieldName}>{props.fieldName}</span>
          <button
            id={props.toggleButtonId}
            onClick={(e) => props.toggleEdit(e.target)}
          >
            {props.toggleButtonText}
          </button>
        </div>
      )}
      <br></br>
    </div>
  );
}

export default FormField;