import React from 'react';
    
export default function DateSort ({props}) {
    if(props.checked)
    {
        return (<label className="category-container">Sort by date
            <input checked value="dateSort" type="checkbox" onChange={props.onChange}></input>
            <span className="category-checkmark"></span>
         </label>);
    } else {
        return (<label className="category-container">Sort by date
            <input value="dateSort" type="checkbox" onChange={props.onChange}></input>
            <span className="category-checkmark"></span>
         </label>);
    }
}