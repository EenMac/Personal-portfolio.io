import { React, useState} from 'react'
import AppBar from '@mui/material/AppBar'
import { Box, Icon, IconButton, MenuItem, Toolbar, Typography, Menu, Button} from '@mui/material'
import { Container } from '@mui/system';
import "../css/Navbar.css"

function Navbar() {

const [anchorEl, setAnchorEl] = useState(null);
const open = Boolean(anchorEl);
const handleMenu = event => {
setAnchorEl(event.currentTarget);
};
const handleClose = () => {
setAnchorEl(null);
};


  return (
    <AppBar id="App-bar">
        <Container>
            <Toolbar>
                <Box>
                    <IconButton id="hamburger-menu"
                    onClick={handleMenu}
                    >
                        haazit
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        // anchorOrigin={{
                        // vertical: "bottom",
                        // horizontal: "left"
                        // }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        sx={{
                        // display: { xs: "block", md: "none" }
                        }}>
                            <Button href="/">
                                <MenuItem>Home</MenuItem>
                            </Button>
                            <Button href="/about">
                                <MenuItem >About</MenuItem>
                            </Button>
                            <Button href="/competencies">
                                <MenuItem >Competencies</MenuItem>
                            </Button>
                    </Menu>
                </Box>
                {/* <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                // sx={{
                //     mr: 2,
                //     display: { xs: "flex", md: "none" },
                //     flexGrow: 1,
                //     fontFamily: "monospace",
                //     fontWeight: 700,
                //     letterSpacing: ".3rem",
                //     color: "inherit",
                //     textDecoration: "none"
                // }}
                >
                LOGO
                </Typography> */}
            </Toolbar>
        </Container>
    </AppBar>
  );
};

export default Navbar