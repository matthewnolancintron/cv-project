import React from "react";

class FormField extends React.Component{
    render(){
        return(
            // might breaks this component down into two more
            // componets one for text/edit and another
            // for input/submit
            <div>
                <br></br>
                <label>{this.props.labelText}:</label>
                {this.props.isInEditMode === 'inEditMode' ?
                    //render this if in edit mode
                    <div>
                      <input 
                      type='text'
                      id={this.props.inputId}
                      value={this.props.inputValue}
                      onChange={(e)=>this.props.handleInputChange(e.target)}
                      ></input>
                      <button id={this.props.toggleButtonId} onClick={(e) => this.props.toggleEdit(e.target)}>{this.props.toggleButtonText}</button>
                    </div>
                    :
                    //else render this if not in edit mode

                    <div>
                      <span id={this.props.fieldName}>{this.props.fieldName}</span>
                      <button id={this.props.toggleButtonId} onClick={(e) => this.props.toggleEdit(e.target)}>{this.props.toggleButtonText}</button>
                    </div>
                }
                <br></br>
            </div>
        )
    }
}

export default FormField