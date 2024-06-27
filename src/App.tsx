import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, CssBaseline, Box } from '@mui/material';
import NavBar from "./components/NavBar.tsx";

const App = () => {
    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            <CssBaseline />
            <NavBar />
            <Container component="main" sx={{ my: 4, flex: 1 }}>
                <Outlet />
            </Container>
        </Box>
    );
};

export default App;
