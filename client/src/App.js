import React, { useState, useEffect } from 'react'
import RecipesContainer from './containers/RecipesContainer'
import './App.css'; import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavDrawer from './components/NavDrawer';
import HomePage from './components/HomePage';
import FormContainer from './containers/FormContainer';


const App = () => {
    const [recipeData, setRecipeData] = useState();

    const fetchRecipeData = () => {
        return fetch('http://localhost:8080/api/recipes')
            .then(res => res.json())
            .then(data => setRecipeData(data))
    }

    useEffect(() => {
        fetchRecipeData()
    }, [])

    return (
        <div>
            <Router>
                <NavDrawer />
                <Switch>
                    <Route exact path="/" render={(props) => (<HomePage {...props} recipeData={recipeData} />)} />
                    {recipeData && <Route path="/recipes" render={(props) => (<RecipesContainer {...props} recipeData={recipeData}/> )} />}
                    <Route path="/add-recipe" render={(props) => (<FormContainer {...props} />)}/>
                </Switch>
            </Router>

        </div>
    )

}

export default App
