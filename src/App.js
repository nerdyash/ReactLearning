import React, { Component } from 'react';
import './App.css';
// import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {
  
  state = {
    persons: [
      {id: 'a1', name: "Yash", age: 24},
      {id: 'b2', name: "Dhruv", age:22}
    ],
    showPersons: false
  }

  // We can remove any handler if we are not using it, I am keeping here for reference

  // handler for onClick event
  switchNameHandler = (newName) => {
    // we can't use this to change state 
    // this.state.persons[0].name = "Yash Thakkar";

    //we should use React pre defined method
    this.setState({
        persons: [
          { name: "Yash Thakkar", age: 24 },
          { name: newName, age: 21 }
        ]
      })
  }

  // Two way databinding handler and onChange event
  nameChangeHandler = (event, id) => {

    /* finding the index of person object */
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    /* storing the person object into person var */
    const person = {
      ...this.state.persons[personIndex]
    };

    /* changing the name onchange of input change */
    person.name = event.target.value;

    /* storing persons state into new persons var and updating var with person var*/
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    /* updating the state */
    this.setState({
      persons: persons
    })
  }

  // toggle the div on click event
  toggleUsers = () => {
    var toggleVal = this.state.showPersons;
    this.setState({showPersons: !toggleVal})
  }

  // delete user handler

  deleteUserHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    
    /* we can use JS conditions like if...else outside the return statement this is the preffered way to use condition in react */
    
    // Style for component
    const style = {
      backgroundColor: 'green',
      border: '1px solid #eee',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer',
      color: 'white',
      // hover property, we can use via radium package
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    }

    var persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
        
          { /*inject elements using loop */ }
            
          {this.state.persons.map( (person, index) => {
              return <Person name={person.name} age={person.age} click={() => this.deleteUserHandler(index)} key={person.id} change={(event) => this.nameChangeHandler(event, person.id)}/>
          })}

            
          { /* manually inject person element */ }
          { /* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} /> */ }
          {/*binding using bind method of react */}
          { /*<Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, "Dhruv Thakkar")} change={this.nameChangeHandler}>India.</Person> */ }
        </div>
      );
      style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    let classes = [];
    if(this.state.persons.length === 2) {
      classes.push('yellow');
      classes.push('bold');
    }
    if (this.state.persons.length === 1) {
      classes.pop('yellow');
      classes.push('red');
      classes.push('bold');
    }
    return (
      // <StyleRoot>
        <div className="App">
          <h1>Hi, there!</h1>
          <p className={classes.join(' ')}>Enjoy your day!</p>
          {/* binding using es6 function */} 
          <button style={style} onClick={this.toggleUsers}>Toggle Persons</button>

          {/* on condition true it will show the results and on false results will be hidden */}
          {
            //this.state.showPersons === true ?
              //<div>
              //<Person name={this.state.persons[0].name} age={this.state.persons[0].age} />

              //{/*binding using bind method of react */}
              //<Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, "Dhruv Thakkar")} change={this.nameChangeHandler}>India.</Person>
            //</div> : null
        }

          {/* updating the person value depending on condition value */}
          {persons}

        </div>
      // </StyleRoot>
    );
  }
}

// export default Radium(App);
export default App;
