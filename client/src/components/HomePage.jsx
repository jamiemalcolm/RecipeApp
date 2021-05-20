import { Divider, Grid, List, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import GenerateMenu from './GenerateMenu';
import RecipeItem from './RecipeItem';

const HomePage = ({ recipeData }) => {

    const [generatedMenu, setGeneratedMenu] = useState([]);

    const menuNodes = generatedMenu.map((recipe, index) => {
        return <RecipeItem key={recipe._id} index={index + 1} recipe={recipe}></RecipeItem>
    })

    const generateMenu = (days) => {
        let randomNums = [];
        let menuLength = days;
        let max = recipeData.length
        for (let i = 0; randomNums.length < menuLength; i++) {
            let recipeNum = Math.floor(Math.random() * (max - 0) + 0);
            if (!randomNums.includes(recipeNum)) {
                randomNums.push(recipeNum)
            }
        }
        let newMenu = randomNums.map((number) => {
            return recipeData[number]
        })
        setGeneratedMenu(newMenu)
    }
    return (
        <div>
            <Grid>
                <Typography style={{textAlign:'center'}} component="h1" variant="h5">
                    Select number of days and generate a menu.
                </Typography>
                <Divider style={{margin:10}}></Divider>
            </Grid>
            <GenerateMenu generateMenu={generateMenu} />
            <Grid>
                <List>
                    {generatedMenu && menuNodes}
                </List>
            </Grid>

        </div>
    )
}

export default HomePage
