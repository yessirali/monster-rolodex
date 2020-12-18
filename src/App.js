import React from "react";
import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";

class App extends React.Component {
  state = {
    monsters: [],
    searchField: "",
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
      response.json().then((users) => this.setState({ monsters: users }));
    });
  }

  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    // const monsters = this.state.monsters
    // const searcField = this.state.searchField
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
