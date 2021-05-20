import React, { useState } from 'react'
import { Select, MenuItem, Button, Grid, Container, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiFormLabel-root ': {
            color: '#DCF763'
        },
        '& .MuiSelect-root':{
            color: '#DCF763'
        },
        '& .MuiButtonBase-root':{
                color: '#DCF763',
        },
        '& .MuiButton-root': {
            borderRadius:'200px'
        }

    },
    button: {
        margin: theme.spacing(0.5)
    }

}))

const GenerateMenu = ({ generateMenu }) => {
    
    const classes = useStyles()

    const [numOfDays, setNumOfDays] = useState();

    const handleOnChange = (e) => {
        setNumOfDays(e.target.value);
    }


    const handleOnSubmit = (e) => {
        e.preventDefault()
        generateMenu(numOfDays);
    }

    return (
        <div>
            <Container className={classes.root} maxwidth="sm">
                <form preventDefault onSubmit={handleOnSubmit}>
                    <Grid container justify="center" spacing={10}>
                        <Grid item xs={5}>
                            <InputLabel >Number of days</InputLabel>
                            <Select defaultValue="Days" required onChange={handleOnChange} name="numberOfDays" label="Number of days planning for" >
                                <MenuItem value={1}>One</MenuItem>
                                <MenuItem value={2}>Two</MenuItem>
                                <MenuItem value={3}>Three</MenuItem>
                                <MenuItem value={4}>Four</MenuItem>
                                <MenuItem value={5}>Five</MenuItem>
                                <MenuItem value={6}>Six</MenuItem>
                                <MenuItem value={7}>Seven</MenuItem>
                            </Select>
                        </Grid>
                        <Button
                            type="submit"
                            cariant="contained"
                            color="primary"
                        >
                            Generate!
                            </Button>
                    </Grid>
                </form>
            </Container>
        </div>
    )
}

export default GenerateMenu
