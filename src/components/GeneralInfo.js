import React from "react"
class GeneralInfo extends React.Component{
    // trying out component didupdate lifecycle method
    componentDidUpdate(pP,pS,sS){
        console.log('previous props:',pP);
        console.log('previous state', pS);
        console.log('previous snap shot',sS);
        /**
         * requires generalInfo component to get
         * both name an email values from state passed in as props
         * to reference in a condition.
         * 
         * could create object with toggle values that are labeled
         * key='keyNameFromState or button's id',value='updated value from state as prop',
         * use object notation to acess the correct values
         * 
         * issue how would component didUpdate know which form field 
         * toggle value was updated
         * 
         * solution 1:
         * use previous state and compare
         * prevouse state or previous props
         * and compare with componets curent props
         * (how to acces current props from this method)
         * just check which prop value changed
         * use that information to update the correct
         * part of this component
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
         *          possiblity of getting didComponentUpdate to be called = 100%:
         *            due to state changing in parent component it's guaranteed
         *            to trigger componentDidUpdate method when toggle button
         *            update's parent state    
         * 
         *      possible how #2 for what #1:
         *        update parent component state from children components
         *          
         *        possiblity of getting didComponentUpdate to be called = 50%-100%: 
         *          might get called since updates/changes to parentComponents
         *          state also updates this componets props which are parent comopnent's
         *          state passed in as props to child components
         *          this might work since when state in parent component is
         *          updated through the toggle button pressed in child component
         *          props passed to this child get's updated          
         * 
         *          downsides:
         *          I would have to create a componentDidUpdate
         *          for each child component especially if it's redunt
         *          goes against d.r.y 
         *          
         *          benefits: 
         *          is that I might be able to customize more for each
         *          child component's fields
         *          
         *      possible how #3 for what #1:
         *          split the current components up such that
         *          each component it's composed of is a field that
         *          componentDidUpdate will live on each field component
         *      
         *          possiblity of getting didComponentUpdate to be called = 50%:
         *          if each form sub component gets props from parent component's props
         *          and that parent component get it's props from it's parent component's
         *          state or app passes state to categoryComponent as props 
         *          and category components pass props down to field components as props
         *          app(state)>category(props)>field(props)
         *          props will update in field component so could call didComopnentUpdate
         *          
         *          downsides:
         *              similar to possible how#2
         *              except possibly more exgerated
         *  
         *          benefits:
         *              similar to possible how#2
         *              except possibly even better customization
         *              and simplification of component didUpdate method
         *              and of app's state direct mapping of state all the way
         *              down to field props,
         *              more obvious what's getting passed to what
         *              and less computation need to deal with figuring what
         *              get passed where and how 
         *              
         *              
         *   
         * possible what#2: 
         * call function/method in childComponent
         * that determins what's render in childComponent (how?)
         * 
         * possible what#3:
         * create state in childComponet (category)
         * that holds possible renders for it's children
         * an call setState in componentDidUpdate for catergory component
         * todo:think why this might not be a good idea
         * 
         * possible what#4:
         * create state in child comopnent (field)
         * that holds possible renders for it's self
         * 
         * todo:think why this might not be a good idea
         * it's state doesn't change info is just used or retrived
         * depending on toggleEdit prop from app state
         * not a good canidate for state
         * could instead just create varible that holds posisble render
         * and use conditional rendering hinting at another possible solution
         * that doesn't require componentDidUpdate method
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

                {/**
                    could decompose this component
                    down in more sub components
                    a sub component for the name field 
                    and another for the email field
                */}
 
                <span id="name">name</span> 
                <button id="toggleEditName" onClick={(e) => this.props.toggleEdit(e.target)}>edit name</button>
                
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