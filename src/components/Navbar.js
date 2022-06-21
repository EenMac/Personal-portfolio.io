import { React, useState} from 'react'
import AppBar from '@mui/material/AppBar'
import { Box, Icon, IconButton, MenuItem, Toolbar, Typography, Menu, Button} from '@mui/material'
import { Container } from '@mui/system';
import "../css/Navbar.css"
import { useNavigate } from 'react-router-dom'

function Navbar() {

const [anchorEl, setAnchorEl] = useState(null);
const open = Boolean(anchorEl);
const handleMenu = event => {
setAnchorEl(event.currentTarget);
};
const handleClose = () => {
setAnchorEl(null);
};

const navigate = useNavigate()

  return (
    <AppBar id="App-bar">
        <Container>
            <Toolbar>
                <Box>
                    <IconButton id="hamburger-menu"
                    onClick={handleMenu}
                    >
                        IMcDulling
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        >
                            <Button onClick={() => navigate("/personal-portfolio")}>
                                <MenuItem>Home</MenuItem>
                            </Button>
                            <Button onClick={() => navigate("/personal-portfolio/about")}>
                                <MenuItem >About</MenuItem>
                            </Button>
                            <Button onClick={() => navigate("/personal-portfolio/competencies")}>
                                <MenuItem >Competencies</MenuItem>
                            </Button>
                    </Menu>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
  );
};

export default Navbar