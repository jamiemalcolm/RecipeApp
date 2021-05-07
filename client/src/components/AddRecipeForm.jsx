import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form';
import { TextField, makeStyles, Container, Button } from '@material-ui/core';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';

const AddRecipeForm = () => {

    const { handleSubmit, control } = useForm();

    const [ingredientsList, setIngredientsList] = useState([{ ingredient: "" }])

    const handlePlusOneClick = () => {
        setIngredientsList([...ingredientsList, { ingredient: "" }])
    }

    const handleRemoveClick = index => {
        const list = [...ingredientsList];
        list.splice(index, 1);
        setIngredientsList(list);
    };

    const useStyles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(3),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }))
    const classes = useStyles()

    return (
        <div>
            <Container maxWidth="sm">
                <div className={classes.paper}>
                    <form>
                        <Controller
                            name="name"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: "recipe name required"
                            }}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    label="name"
                                    variant="filled"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                />
                            )}
                        />
                        {ingredientsList.map((ingredient, index) => {
                            return (
                                <div key={index} className='ingredients-list'>
                                    <Controller
                                        name="ingredient"
                                        control={control}
                                        defaultValue=""
                                        rules={{
                                            required: "recipe ingredients required"
                                        }}
                                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                                            <TextField
                                                label="ingredient"
                                                variant="filled"
                                                value={ingredient.value}
                                                onChange={onChange}
                                                error={!!error}
                                                helperText={error ? error.message : null}
                                            />
                                        )}
                                    />
                                    {ingredientsList.length !== 1 && <Button
                                        onClick={() => handleRemoveClick(index)}><ExposureNeg1Icon/></Button>}

                                        {ingredientsList.length - 1 === index && <Button
                                        onClick={handlePlusOneClick}
                                    ><PlusOneIcon /></Button>}                                    
                                </div>
                            )
                        })}
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default AddRecipeForm
