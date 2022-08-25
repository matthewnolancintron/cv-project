import React from "react";
class EducationInfo extends React.Component{
    render(){
        return(
            <div>
                <br></br>
                <p>education info</p>
                <span>some school</span>
                <button id="toggleEditSchoolName" onClick={(e) => this.props.toggleEdit(e.target)}>edit school name</button>
                <br></br>
                <span>date of study</span>
                <button id="toggleEditDateOfStudy" onClick={(e) => this.props.toggleEdit(e.target)}>edit date of study</button>
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

export default EducationInfo