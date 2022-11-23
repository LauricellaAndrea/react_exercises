import React from "react";

export class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      items: []
    }
  }
  
  OnHandleInput = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  OnformHandleSubmit = (e) => {
   e.preventDefault();

   this.setState(state =>({
    items: [...this.state.items, <li key={state.items.length }>{state.input}</li>]
   }))
    
  }

  render() {

    return (
      <React.Fragment>
  
       <form>
        <div>
       <input type="text" value={this.state.input}
        placeholder="Add Note" onChange={this.OnHandleInput}/>
        <button onClick={this.OnformHandleSubmit}>Add items</button>
        </div>
        </form>
        <ul>
          {this.state.items}
        </ul>
      </React.Fragment>
    )
  }
}