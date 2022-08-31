import React from "react";
import FormField from "./formField";

class CategoryInfo extends React.Component {
  render() {
    let formFields = this.props.formFieldsData.map((element, index) => {
      return (
        <FormField
          // conditional render could live here
          // or in formField
          labelText={element.labelText}
          fieldName={element.fieldName}
          toggleButtonId={element.toggleButtonId}
          toggleButtonText={element.toggleButtonText}
          toggleEdit={this.props.toggleEdit}

          inputId={element.inputId}
          inputValue={element.inputValue}
          handleInputChange={this.props.handleInputChange}

          key={element.key}
          isInEditMode={element.isInEditMode}

        ></FormField>
      );
    });

    return (
      <div>
        <br></br>
        <h1>{this.props.categoryName}</h1>
        <br></br>
        {formFields}
        <br></br>
      </div>
    );
  }
}
export default CategoryInfo;