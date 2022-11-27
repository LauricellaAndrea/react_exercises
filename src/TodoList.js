import React from "react";

export class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      items: [],
    };
  }

  OnHandleInput = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  OnformHandleSubmit = (e) => {
    e.preventDefault();

    this.setState((state) => ({
      input: "",
      items: [
        <li key={state.items.length}>{state.input}</li>,
        <button onClick={this.handleRemove} className='remove'>Delete</button>
      ],
    }));
  };

  HandleReset = (e) => {
    this.setState({
      input: "",
      items: [],
    });
  };

  handleRemove = (event) => {
    event.target.parentElement.remove()
}

  render() {
    return (
      <>    
            <input
              type="text"
              value={this.state.input}
              placeholder="Add Note"
              onChange={this.OnHandleInput}
            />
            <button onClick={this.OnformHandleSubmit}>Add items</button>
            <button type="reset" onClick={this.HandleReset}>
              Reset
            </button>
            <button onClick={this.handleRemove} className='remove'>Delete</button>
            
       
        {/* <ul>{this.state.items}</ul> */}
        <ul>{this.props.render(this.state.items, this.handlerRemoveItem)}</ul>
      </>
    );
  }
}
