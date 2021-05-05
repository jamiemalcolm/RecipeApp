import { Button, Grid, List, ListItem, Typography } from '@material-ui/core'
import React from 'react'
import RecipeItem from './RecipeItem';

const HomePage = ({ generateMenu, newMenu }) => {

    const menuNodes = newMenu.map((recipe, index) => {
        return <RecipeItem key={recipe._id} index={index + 1} recipe={recipe}></RecipeItem>
    })
    return (
        <div>
            <Grid justify="center">
                <Grid
                item
                component={Typography}
                variant="h3"
                
                >
                    Click the button to Generate a menu for 5 days.
                </Grid>
                    <br/>

                <Grid
                    item
                    component={Button}
                    color="primary"
                    size="large"
                    variant="contained"
                    onClick={generateMenu}
                >
                    Generate Menu
                </Grid>
                <Grid>
                    <List>
                        {newMenu && menuNodes}
                    </List>
                </Grid>
            </Grid>
        </div>
    )
}

export default HomePage
