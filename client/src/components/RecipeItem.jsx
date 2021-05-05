import { Button, Divider, List, ListItem, Typography } from '@material-ui/core';
import React, {useState} from 'react'
import RecipeDetails from './RecipeDetails';
import RecipieSteps from './RecipieSteps';


const RecipeItem = ({recipe, index}) => {

    const [showDetails, setShowDetails] = useState(false);
    const [showSteps, setShowSteps] = useState(false);

    const handleRecipeClick = () =>{
        if(recipe.ingredients){
            setShowDetails(!showDetails);
        }
        if(showSteps){
            setShowSteps(false);
        }
    }

    const handleMakeMeButtonClick = () => {
        if(recipe.steps){
            setShowSteps(!showSteps);
        }
    }
    return (
        <div>
            <List >
                <ListItem button divider  style={{width: '50%'}}> < Typography onClick={handleRecipeClick} variant="subtitle1">{`  ${recipe.name}  `}</Typography>  { showDetails && <Button color="primary" size="small" style={{marginLeft: 10}} variant="contained" onClick={handleMakeMeButtonClick}> Make Me! 🍳  </Button>} </ListItem>
            </List>
                <List style={{display:'flex', justifyItems:'space-between'}}>
                    {showDetails && <RecipeDetails recipe={recipe} index={index} key={index}/>}
                {/* </List>
                <List> */}
                    {showSteps && <RecipieSteps recipe={recipe}/>}
                </List>
        </div>
    )
}

export default RecipeItem
