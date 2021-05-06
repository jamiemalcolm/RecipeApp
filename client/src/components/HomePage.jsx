import { Button, Grid, List, ListItem, Typography } from '@material-ui/core'
import React,{useState} from 'react'
import GenerateMenu from './GenerateMenu';
import RecipeItem from './RecipeItem';

const HomePage = ({recipeData}) => {

    const [generatedMenu, setGeneratedMenu] = useState([]);

    const menuNodes = generatedMenu.map((recipe, index) => {
        return <RecipeItem key={recipe._id} index={index + 1} recipe={recipe}></RecipeItem>
    })

    const generateMenu = (days) => {
        let randomNums = [];
        let menuLength = days;
        let max = recipeData.length
        for(let i=0; randomNums.length < menuLength; i++){
            let recipeNum = Math.floor(Math.random() * (max - 0) + 0);
            if(!randomNums.includes(recipeNum)){
                randomNums.push(recipeNum)
                console.log(recipeNum);
            }
        }
        let newMenu = randomNums.map((number) => {
            return recipeData[number]
        })
        setGeneratedMenu(newMenu)
        console.log(generatedMenu)
    }
    return (
        <div>
                <GenerateMenu generateMenu={generateMenu}/>
                <Grid>
                    <List>
                        {generatedMenu && menuNodes}
                    </List>
                </Grid>
            
        </div>
    )
}

export default HomePage
