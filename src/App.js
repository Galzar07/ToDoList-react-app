import React, { Component } from "react";

import "./style/App.css";
import Form from "./components/Form";
import ListItem from "./components/ListItem";

class App extends Component {
  counter = 4;
  state = {
    list: [
      { id: 1, text: "zadanie 1", important: false },
      { id: 2, text: "zadanie 2", important: false },
      { id: 3, text: "zadanie 3", important: false },
    ],
    value: "",
    checked: false,
  };
  handleDeleteItem = (id) => {
    const list = [...this.state.list];
    const index = list.findIndex((item) => item.id === id);
    list.splice(index, 1);
    this.setState({ list });
  };
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  handleChecked = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };
  handleAddItem = (e) => {
    e.preventDefault();
    const list = [...this.state.list];
    if (this.state.value === "") {
      return alert("dodajesz pusty tekst");
    }
    const item = {
      id: this.counter,
      text: this.state.value,
      important: this.state.checked,
    };
    this.counter++;
    list.push(item);
    this.setState({
      list,
      value: "",
      checked: false,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="card">
          <Form
            value={this.state.value}
            change={this.handleChange}
            checked={this.state.checked}
            handleChecked={this.handleChecked}
            click={this.handleAddItem}
          />
          <ListItem list={this.state.list} click={this.handleDeleteItem} />
        </div>
      </div>
    );
  }
}

export default App;
