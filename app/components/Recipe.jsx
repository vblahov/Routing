import React from 'react';
    
export default function Recipe (props) {
  return <div className="recipe">
          <h4 className="recipe-name">{props.recipe.name}</h4>
          <h2 className="recipe-category">{props.recipe.category}</h2>
          <img src={props.recipe.picture} className="recipeImg"></img>
          <p>{props.recipe.shortDesc}</p>
          <p>{props.recipe.longDesc}</p>
          <h1>{props.recipe.createDate}</h1>
         </div>;
}