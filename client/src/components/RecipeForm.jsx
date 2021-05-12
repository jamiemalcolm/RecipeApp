import { Container, TextField, Button } from '@material-ui/core'
import React, {useState} from 'react'
import { makeStyles} from '@material-ui/core/styles';
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

    const [recipe, setRecipe] = useState();
    const [ingredients, setIngredients] = useState([
        {
            name: "",
            qty: ""
        },
    ])

    const handleChangeInput = (index, event) => {
        console.log(index, event.target.name)
    }
    return (
            <Container>
                <form className={classes.root}>
                <TextField
                    label="name"
                    variant="filled"
                    name="name"/>

                {ingredients.map((ingredients, index) => (
                    <div key={index}>
                        <TextField
                            label="ingredient name"
                            variant="filled"
                            name="ingredient name"
                            value={ingredients.name}
                            onChange={event => handleChangeInput(index, event)}
                            />
                        <TextField
                            label="ingredient qty"
                            variant="filled"
                            name="ingredient qty"
                            value={ingredients.qty}
                            onChange={event => handleChangeInput(index, event)}

                            />
                            <IconButton>
                                <RemoveIcon/>
                            </IconButton>
                            <IconButton>
                                <AddIcon/>
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
