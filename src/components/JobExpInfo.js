import React from 'react'

class JobExpInfo extends React.Component{
    render(){
        return(
            <div>
                <br></br>
                <p>job info</p>
                <span>company</span>
                <button id="toggleEditCompanyName" onClick={(e) => this.props.toggleEdit(e.target)}>edit company name</button>
                <br></br>
                <span>position title</span>
                <button id="toggleEditCompanyJobPositionTitle" onClick={(e) => this.props.toggleEdit(e.target)}>edit job title</button>
                <br></br>
                <span>main tasks of job</span>
                <button id="toggleEditMainTasksOfJob" onClick={(e) => this.props.toggleEdit(e.target)}>edit main tasks of job</button>
                <br></br>
                <span>date from and until</span>
                <button id="toggleEditStartAndEndDate" onClick={(e) => this.props.toggleEdit(e.target)}>edit start and end date</button>
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

export default JobExpInfo