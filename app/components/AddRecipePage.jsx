import React from 'react';
import { Link } from 'react-router-dom';

export default class AddRecipePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          recipe: {}
        }
      }

    render() {
        const recipe = this.state.recipe;
        return (
            <div className="add-recipe-page-content">
                <div className="add-recipe-page-container">
                    <input type="text" class="short-input" placeholder="Recipes name.."></input>
                    <input type="text" class="short-input" placeholder="Recipes category.."></input>
                    <textarea class="middle-input" placeholder="Recipes description.."></textarea>
                    <textarea class="long-input" placeholder="Recipes text.."></textarea>
                    <div className ="add-recipe-page-buttons">
                        <Link class="cancel-link" to={`/recipes`}>
                        <button className="cancel-button">Cancel</button>
                        </Link>
                        <button className="add-button">Add</button>
                    </div>
                </div>
            </div>
        )
    }
}