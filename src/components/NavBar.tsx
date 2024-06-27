import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ width: '100%' }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Prueba técnica SoloTodo
                </Typography>
                <Button color="inherit" component={Link} to="/posts">Posts</Button>
                <Button color="inherit" component={Link} to="/posts/create">Create Post</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
