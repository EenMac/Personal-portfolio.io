import React from 'react'
import AppBar from '@mui/material/AppBar'
import { Box, Icon, IconButton, MenuItem, Toolbar, Typography, Menu } from '@mui/material'


function Navbar() {
  return (
    <AppBar>
        <Toolbar>
            <IconButton>
                Big I Dawg hamburger Icon
            </IconButton>
            <Menu>
                <MenuItem>haazit</MenuItem>
            </Menu>
            <Typography>
                Haazit
            </Typography>
        </Toolbar>
    </AppBar>
  );
};

export default Navbar