import { AppBar, IconButton, Toolbar, Typography, Grid, Tab} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home'
import React from 'react'
import { Link, Route } from 'react-router-dom';

const Nav = ({handleNavbarOpen}) => {


    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" className='menuButton' color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Laura And Jamie's Menu generator.
                    </Typography>
                    <Grid
                        container
                        spacing={1}
                        justify="space-around"
                        alignItems="center"
                    >
                        <Grid item>
                            <Tab
                                label="Home"
                                size="small"
                                component={Link}
                                to="/"
                                icon={<HomeIcon />}
                            />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Nav
