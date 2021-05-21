import { Button, List, ListItem, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import RecipeDetails from './RecipeDetails';
import RecipieSteps from './RecipieSteps';
import { makeStyles } from '@material-ui/core/styles'
import FastfoodIcon from '@material-ui/icons/Fastfood';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiButton-root': {
            color: '#435058',
            backgroundColor:'#DCF763',
            
        },
    }

}))

const RecipeItem = ({ recipe, index }) => {

    const classes = useStyles()

    const [showDetails, setShowDetails] = useState(false);
    const [showSteps, setShowSteps] = useState(false);

    const handleRecipeClick = () => {
        if (recipe.ingredients) {
            setShowDetails(!showDetails);
        }
        if (showSteps) {
            setShowSteps(false);
        }
    }

    const handleMakeMeButtonClick = () => {
        if (recipe.steps) {
            setShowSteps(!showSteps);
        }
    }
    return (
        <div className={classes.root}>
            <List >
                <ListItem button divider style={{ width: '50%' }}>
                    < Typography onClick={handleRecipeClick} variant="subtitle1">
                        {`  ${recipe.name}  `}
                    </Typography>
                    {showDetails && (<Button  size="small" style={{ marginLeft: 10 }}  onClick={handleMakeMeButtonClick}>
                        <FastfoodIcon fontSize='small' />
                    </Button>)}
                </ListItem>
            </List>
            <List style={{ display: 'flex', justifyItems: 'space-between' }}>
                {showDetails && <RecipeDetails recipe={recipe} index={index} key={index} />}
                {showSteps && <RecipieSteps recipe={recipe} />}
            </List>
        </div>
    )
}

export default RecipeItem
