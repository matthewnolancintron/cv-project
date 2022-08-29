import React from "react";

class FormField extends React.Component{
    //todo: update formField add functionality via state
    //add prop for toggle edit here

    /**
         example of field:
            <span id="name">name</span> 
            <button id="toggleEditName" onClick={(e) => this.props.toggleEdit(e.target)}>edit name</button>
            
            <span id="email" >email</span>
            <button id="toggleEditEmail" onClick={(e) => this.props.toggleEdit(e.target)}>edit email</button>          
        */
    render(){
        return(
            <div>
                <br></br>
                <span id={this.props.fieldName}>{this.props.fieldName}</span>
                <button id={this.props.toggleButtonId}>{this.props.toggleButtonText}</button>
                {/* add input submit render:
                    options:on handling possible render for form field
                        : in the return of the render / conditional render
                        : use a method that live here in combination 
                          with conditional render

                    maybe this:
                        could break this component down into two more
                        componets one for text edit and another
                        for input submit and use conditional render to
                        determine which gets rendered
                 */}
                <br></br>
            </div>
        )
    }
}

export default FormField