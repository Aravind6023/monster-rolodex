import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() 
  {

    super();
    
    this.state =
    {
      monsters: [],
      searchName:""
    };
  }

  componentDidMount()
  {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => this.setState({monsters:data}))
  }


  handleChange = e => 
  {
    this.setState({searchName: e.target.value})
  }



  render(){

    const {monsters, searchName} = this.state;
    const fiterSearch = monsters.filter(monster => monster.name.toLowerCase().includes(searchName.toLowerCase()));

    return(
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="search monsters" handleChange={this.handleChange}></SearchBox>
        <div>
        <CardList monsters = {fiterSearch}></CardList>
        </div>
      </div>
    );
  }
}



export default App;