import React from 'react';
import { Link } from 'react-router-dom';

export default class RecipePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          recipe: {}
        }
      }

      componentDidMount() {
        let url = "http://localhost:3001/recipes";
        let id =this.props.match.params.id;
        fetch(url)
          .then(resp => resp.json())
          .then(data => {
            let recipe = data.find(x => x.id === id);
            this.setState({recipe: recipe});
          })
      }

    render() {
        const recipe = this.state.recipe;
        return (
            <div className="recipe-page-content">
                <div className="recipe-page-container">
                    <h4 className="recipe-page-name">{recipe.name}</h4>
                    <p className="recipe-page-longDesc">{recipe.longDesc}</p>
                    <div className ="recipe-page-buttons">
                        <Link className="edit-link" to={`/edit/${this.state.recipe.id}`}>
                        <button className="edit-button">Edit</button>
                        </Link>
                        <button className="remove-button">Remove</button>
                    </div>
                </div>
            </div>
        )
    }
}