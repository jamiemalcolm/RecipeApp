import {  ListItem } from '@material-ui/core'
import React from 'react'

const RecipeDetails = ({ recipe }) => {

    const ingredientsNodes = recipe.ingredients.map((ingredient) => {
        return <div>
                <ListItem>{ingredient.name}  {ingredient.qty}</ListItem>
                </div>
    })


return (
    <div>
        {ingredientsNodes}
        
        
    </div>
)
}

export default RecipeDetails
