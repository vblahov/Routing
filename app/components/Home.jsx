import React from 'react';
import Recipe from '../components/Recipe.jsx';
 
export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      recipes: []
    }
  }

  componentDidMount() {
    let url = "http://localhost:3001/recipes"
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        let recipes = data.map((recipe, index) => {
          console.log(recipe)
          return <Recipe recipe = {recipe}/>
        })
        this.setState({recipes: recipes});
      })
  }

  render(){
    return <div className="home">
              <div className="home-content">{this.state.recipes}</div>
           </div>
  }
}
