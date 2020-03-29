import React from 'react';
import { Link } from 'react-router-dom';

export default function Recipe(props) {
  return (
    <Link to={`/${props.recipe.id}`}>
      <div className="recipe">
        <h4 className="recipe-name">{props.recipe.name}</h4>
        <h2 className="recipe-category">{props.recipe.category}</h2>
        <img src={props.recipe.picture} className="recipeImg"></img>
        <p>{props.recipe.shortDesc}</p>
        <p>{props.recipe.longDesc}</p>
        <h5>Date of creating: {props.recipe.createDate}</h5>
      </div>
    </Link>
  );
};