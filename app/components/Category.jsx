import React from 'react';
    
export default function Category ({props}) {
  return (<label className="category-container"> {props.category}
            <input value={JSON.stringify(props)} type="checkbox" onClick={() => props.checked = !props.checked} onChange={props.onChange}></input>
            <span className="category-checkmark"></span>
         </label>);
}