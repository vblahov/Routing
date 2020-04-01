import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/nav.jsx';
import Home from './components/home.jsx';
import NotFound from './components/notfound.jsx';
import RecipePage from './components/RecipePage.jsx';
import AddRecipePage from './components/AddRecipePage.jsx';
import EditRecipePage from './components/EditRecipePage.jsx';
 
ReactDOM.render(
    <Router>
        <div>
            <Switch>
                <Route exact path="/recipes" component={Home} />
                <Route exact path="/recipes/:id" component={RecipePage}/>
                <Route exact path="/add" component={AddRecipePage}/>
                <Route exact path="/edit/:id" component={EditRecipePage}/>
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>,
    document.getElementById("app")
)
