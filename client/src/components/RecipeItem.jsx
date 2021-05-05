import { List, ListItem, Typography } from '@material-ui/core';
import React, {useState} from 'react'
import RecipeIngredients from './RecipeIngredients';

const RecipeItem = ({recipe, index}) => {

    const [showIngredients, setShowIngredients] = useState(false);

    const handleRecipeClick = () =>{
        if(recipe.ingredients){
            setShowIngredients(!showIngredients)
        }
    }
    return (
        <div>
            <List>
                <ListItem button divider onClick={handleRecipeClick}> <Typography variant="subtitle1">{recipe.name}</Typography></ListItem>
                <List>
                    {showIngredients && <RecipeIngredients ingredients={recipe.ingredients} index={index} key={index}/> }
                </List>
            </List>
        </div>
    )
}

export default RecipeItem
