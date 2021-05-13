import { Container, TextField, Button } from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(0.5)
        }
    },
    button: {
        margin: theme.spacing(0.5)
    }

}))

const RecipeForm = () => {


    const classes = useStyles()

    const [recipeName, setRecipeName] = useState()
    const [recipe, setRecipe] = useState();
    const [ingredients, setIngredients] = useState([
        {
            name: "",
            qty: ""
        },
    ])
    const [steps, setSteps] = useState([{step:""}]);

    const handleChangeRecipeName = (event) => {
        setRecipeName(event.target.value);
    }

    const handleChangeIngredient = (index, event) => {
        const values = [...ingredients];
        values[index][event.target.name] = event.target.value;
        setIngredients(values)
    }

    const handleStepChange = (index, event) => {
        const values = [...steps];
        values[index][event.target.name] = event.target.value;
        setSteps(values);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const recipeToSave = 
        {
            name: recipeName,
            ingredients: ingredients,
            steps: steps.map((step) => Object.values(step))
        }
        setRecipe(recipeToSave)
        console.log(recipe);
    }

    const handleAddIngredient = () => {
        setIngredients([...ingredients, {
            name: "",
            qty: ""
        },])
    }

    const handleRemoveIngredient = (index) => {
        const values = [...ingredients];
        values.splice(index, 1);
        setIngredients(values);
    }

    const handleAddStep = () => {
        setSteps([...steps, {step:""}])
    }

    const handleRemoveStep = (index) => {
        const values = [...steps];
        values.splice(index, 1);
        setSteps(values);
    }

    return (
        <Container>
            <form onSubmit={handleSubmit} className={classes.root}>
                <TextField
                    label="Name"
                    variant="filled"
                    name="name"
                    onChange={(event) => handleChangeRecipeName(event)}
                    
                    />

                {ingredients.map((ingredients, index) => (
                    <div key={index}>
                        <TextField
                            label="Ingredient Name"
                            variant="filled"
                            name="name"
                            value={ingredients.name.values}
                            onChange={(event) => handleChangeIngredient(index, event)}
                        />
                        <TextField
                            label="Ingredient Qty"
                            variant="filled"
                            name="qty"
                            value={ingredients.qty.values}
                            onChange={(event) => handleChangeIngredient(index, event)}

                        />
                        <IconButton
                            onClick={() => handleRemoveIngredient(index)}
                        >
                            <RemoveIcon />
                        </IconButton>
                        <IconButton
                            onClick={() => handleAddIngredient()}
                        >
                            <AddIcon />
                        </IconButton>
                    </div>
                ))}
                {steps.map((steps, index) => (
                    <div key={index}>
                        <TextField
                            label={`Step ${index + 1}`}
                            variant="filled"
                            name="step"
                            value={steps.step.values}
                            multiline={true}
                            onChange={(event) => handleStepChange(index, event)}
                        />
                        <IconButton
                            onClick={() => handleRemoveStep(index)}
                        >
                            <RemoveIcon />
                        </IconButton>
                        <IconButton
                            onClick={() => handleAddStep()}
                        >
                            <AddIcon />
                        </IconButton>
                    </div>
                ))}

                <Button className={classes.button}
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Save!
                    </Button>
            </form>
        </Container>
    )
}

export default RecipeForm
