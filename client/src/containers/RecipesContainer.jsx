import { Typography } from '@material-ui/core'
import React from 'react'
import RecipeItem from '../components/RecipeItem'



const RecipesContainer = ({ recipeData }) => {

    const recipeNodes = recipeData.map((recipe, index) => {
        return <RecipeItem key={recipe._id} index={index + 1} recipe={recipe}></RecipeItem>
    })
    
    return (
        <div>
            <Typography variant="h2"> All Recipes</Typography>
            {recipeNodes}
        </div>
    )
}

export default RecipesContainer
