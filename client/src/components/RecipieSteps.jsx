import React from 'react'
import {ListItem} from '@material-ui/core';

const RecipieSteps = ({recipe}) => {

    const stepsNodes = recipe.steps.map((step) => {
        return <ListItem>{step}</ListItem>
    })

    return (
        <div>
            {stepsNodes}
        </div>
    )
}

export default RecipieSteps
