import { ListItem } from '@material-ui/core'
import React from 'react'

const RecipeIngredients = ({ ingredients }) => {

    const ingredientsNodes = ingredients.map((ingredient) => {
        return <ListItem>{ingredient.name}  {ingredient.qty}</ListItem>
    })


return (
    <div>
        {/* <p>the ingredients are ...</p> */}
        {ingredientsNodes}
    </div>
)
}

export default RecipeIngredients
