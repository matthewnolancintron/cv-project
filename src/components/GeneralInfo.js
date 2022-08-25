import React from "react"
class GeneralInfo extends React.Component{
    render(){
        console.log(this.props);
        return(
            <div>
                <br></br>
                <p>general info</p>
                {/* replace name and email with
                {toggleEditName() == 'some value' ? <input>+<submit button> : <text>}
                once the switching between text to input using
                the edit button is working

                set up behavior for input create event
                to save text typed into input and when editing
                is finished by pressing the submit button
                take the text saved and add it to the text
                call toggle edit to trigger the switch
                input might be saved in app components state
                 */}

                
                <span id="name">name</span> 
                <button id="tothis.state.toggleEditNameggleEditName" onClick={(e) => this.props.toggleEdit(e.target)}>edit name</button>
                
                <br></br>

                <span id="email" >email</span>
                <button id="toggleEditEmail" onClick={(e) => this.props.toggleEdit(e.target)}>edit email</button>
                
                <br></br>
            </div>
        )
    }
}

// should have edit/submit button

/**
 * submit button should submit form and display value of
input fields in HTML element.

edit button should display input fields
with previously dispalyed info as values
should be able to edit and resubmit content from
input fields
 */



export default GeneralInfo