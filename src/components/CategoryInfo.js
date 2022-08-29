import React from "react";
import FormField from "./formField";
// import FormField from "./formField";

class CategoryInfo extends React.Component {
    // trying out component didupdate lifecycle method
    componentDidUpdate(pP,pS,sS){
        console.log('previous props:',pP);
        console.log('previous state', pS);
        console.log('previous snap shot',sS);
        console.log(this.props);
        /**
         * {
         * todo: read inside the brackets and condense into a solution:
         * 
         * requires generalInfo component to get
         * both name an email values from state passed in as props
         * to reference in a condition.
         * 
         * could create object with toggle values that are labeled
         * key='keyNameFromState or button's id',value='updated value from state as prop',
         * use object notation to acess the correct values
         * 
         * issue how would component didUpdate know which form field 
         * totodo:think why this might not be a good idealution 1:
         * use previous state and compare
         * prevouse state or previous props
         * and compare with componets curent props
         * (how to acces current props from this method)
         * just check which prop value changed
         * use that information to update the correct
         * part of this component
         * 
         * 
         * solution 2:
         * split component up in to
         * two component and them to compose this component
         * sub component for name and sub component for email
         * 
         * each sub component would only have a single toggle prop
         * could add condtional for current prop value and previous
         * so that when that field/prop is updated
         * can then make change to the corressponding component
         * 
         * 
         * what and how to change or update when condition is triggered?
         *   possible what #1: use app/parent state to toggle renders for child componets
         *     The what#1 is properties in app's state that will hold
         *     each field components possible render 
         *       textField + edit + behavior for toggle and 
         *       a input + submit button + behavior for toggle and
         *       updating the other possible render's text    
         *      each child component then uses those state values as 
         *      props to determine it's own render
         *      would have to update that part of state to get child
         *      comonents to re-render but then componentDidUpdate would
         *      get called which should be fine as long as i'm only
         *      trigger setState inside a condition that way
         *      if I need to do anything when this part of state updates
         *      i could take action for that specific change
         *      don't think will need to as of now.
         *
         * 
         *     possible hows for updating parent component state: 
         *      possible how #1 for what #1:
         *          this componentDidUpdate might be better
         *          placed into parent component 
         *          
         *          one benefit is:
         *            that I would only have to write once and would have
         *            single source to debug from 
         *          
         *          
         *          possiblity of getting didComponentUpdate to be called = 100%:
         *            due to state changing in parent component it's guaranteed
         *            to trigger componentDidUpdate method when toggle button
         *            update's parent state    
         
         *              }
         * 
         * create varible that holds posisble render
         * and use conditional rendering hinting at another possible solution
         * that doesn't require componentDidUpdate method
         * 
         * varibable that hold possible render could
         * live in app's state or categoryInfo Components or on each
         * field component
         * 
         * since input need to be saved could save that to the variable above's
         * other possible render the text+edit using setState
         * 
         * 
         * 
         * reduce generalinfo,educationinfo,jobexpinfo into categoryInfo
         * components and compose them in app use props to compose the
         * fields in each category also create a field component that
         * takes props from category to compose itself
         * for simplicity only have one state and keep at app.js
         * compute the rest using condition/functions/expression in
         * the child components.
         * 
         * 
         * 
         */
    }

    /**
     * 
     * using conditinal rendering as way of toggling render based on
     * app's state possible options
     * 
     * 1:todo @ start here
     * 
     */

    /**
     * todo: create the following:
     * general info section
     *  fields:
     *      name
     *      email
     * 
     * education info section
     *  fields:
     *      school name
     *      date of study
     *      
     * 
     * jobExpInfo section
     *  fields:
     *      job info
     *      position title
     *      main tasks of job
     *      date from and until/time worked
     *  
     * 
     * 
     */

// should have edit/submit button

/**
 * submit button should submit form and display value of
input fields in HTML element.

edit button should display input fields
with previously dispalyed info as values
should be able to edit and resubmit content from
input fields
 */
  render() {
    let formFields = this.props.formFieldsData.map((element,index)=>{
        //todo: update formField add functionality via state
        //add prop for toggle edit here and in form field

        /**
         example of field:
            <span id="name">name</span> 
            <button id="toggleEditName" onClick={(e) => this.props.toggleEdit(e.target)}>edit name</button>
            
            <span id="email" >email</span>
            <button id="toggleEditEmail" onClick={(e) => this.props.toggleEdit(e.target)}>edit email</button>          
        */

        return <FormField
                fieldName={element.fieldName}
                toggleButtonId={element.toggleButtonId}
                toggleButtonText={element.toggleButtonText}>
                </FormField>
    })
    return (
      <div>
        <br></br>
        <h1>{this.props.categoryName}</h1>
        <br></br>
        {formFields}
        <br></br>
      </div>
    );

    /* replace name and email with
                {toggleEditName() == 'some value' ? <input>+<submit button> : <text>}
                once the switching between text to input using
                the edit button is working

                set up behavior for input create event
                to save text typed into input and when editing
                is finished by pressing the submit button
                take the text saved and add it to the text
                call toggle edit to trigger the switch
                input might be saved in app components state
                 */

    /**
                    could decompose this component
                    down in more sub components
                    a sub component for the name field 
                    and another for the email field
                */
  }
}

export default CategoryInfo;
