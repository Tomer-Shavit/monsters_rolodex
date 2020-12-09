import React, {Component} from 'react'
import {CardList} from './components/card-list/card-list.component.jsx' 
import {SearchBox} from './components/search-box/search-box.component.jsx' 
import './App.css';

class App extends Component { //We changed the app function to be a Class so we can inherant from the Component class
  constructor(){ //The constructor create propeties we can use in tha app class
    super();
    this.state = { 
      'monsters':[],
      'SearchField': ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({monsters: users}) );
  }

  handleChange = (e) => {
    this.setState({SearchField:e.target.value})
  }

  render(){
    const {monsters, SearchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(SearchField.toLowerCase()))
    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        {/*when the searchfield changed we get an event and extracting the text to our SearchField state*/}
        <SearchBox placeholder = 'Search Monsters' handleChange ={this.handleChange} />
        <CardList monsters= {filteredMonsters}/>
    </div>
    )
  }
} 

export default App;
