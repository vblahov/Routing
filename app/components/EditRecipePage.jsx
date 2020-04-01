import React from 'react';
import { Link } from 'react-router-dom';

export default class EditRecipePage extends React.Component {
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
            <div className="add-recipe-page-content">
                <div className="add-recipe-page-container">
                    <input type="text" class="short-input" value={recipe.name}></input>
                    <input type="text" class="short-input" value={recipe.category}></input>
                    <textarea class="middle-input" value={recipe.shortDesc}></textarea>
                    <textarea class="long-input" value={recipe.longDesc}></textarea>
                    <div className ="add-recipe-page-buttons">
                        <Link class="cancel-link" to={`/recipes`}>
                        <button className="cancel-button">Cancel</button>
                        </Link>
                        <button className="add-button">Edit</button>
                    </div>
                </div>
            </div>
        )
    }
}