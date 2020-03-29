import React from 'react';
import Recipe from '../components/Recipe.jsx';
import Category from './Category.jsx';
 
export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      recipes: [],
      filtered: [],
      filteredCategories: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    try {
      let value = JSON.parse(e.target.value);
      let categories = this.state.filteredCategories;
      if(categories.some(x => x == value.category)){
        const index = categories.indexOf(value.category  );
        categories.splice(index, 1);
      } else{
        categories.push(value.category);
      }
    }
    catch{
    }
    console.log(this.state.filteredCategories);
    let currentCategories = this.state.categories.map((item) => {
      if(item.props.checked == true){
        return item.category;
      }
    });
    //let filteredByCategories = this.state.recipes.filter(x => currentCategories.some(y => y.category == x.category));
    let currentList = [];
    let newList = [];

    if (e.target.value !== "") {
      currentList = this.state.recipes;

      newList = currentList.filter(recipe => {
      const lc = recipe.name.toLowerCase();
      const filter = e.target.value.toLowerCase();
      return lc.includes(filter);
      });
    } else {
      newList = this.state.recipes;
    }  
    let filtered = newList.map((recipe, index) => {
      return <Recipe recipe = {recipe}/>
    })
    this.setState({
    filtered: filtered
    });
  }

  componentDidMount() {
    let url = "http://localhost:3001/recipes"
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        let recipes = data.map((recipe, index) => {
          return <Recipe recipe = {recipe}/>
        })
        let categoriesNames = data.map((recipe, index) => {
          return recipe.category;
        })
        categoriesNames = [...new Set(categoriesNames.map(x => x))];
        let categories = categoriesNames.map((name, index) => {
          var cat = {category: name, checked: false, onChange: this.handleChange};
          return <Category props = {cat}/>
        })
        this.setState({recipes: data});
        this.setState({filtered: recipes});
        this.setState({categories: categories});
      })
  }

  

  render(){
    return (<div className="home">
              <div className="tool-bar">
              <input
                type="text"
                placeholder="Search recipe..."
                onChange={this.handleChange}
                className="search"
              />
              </div>
              <div className="home-inner-content">
                <div className="categories">{this.state.categories}</div>
                <div className="home-content">{this.state.filtered}</div>
              </div>
           </div>)
  }
  
}
