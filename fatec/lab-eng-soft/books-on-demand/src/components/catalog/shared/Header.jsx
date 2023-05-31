//@ts-check
import { AppBar, Toolbar, Container, Typography, Box, Button } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import React from 'react';

const pages = ['My Books', 'Profile', 'Settings'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Header( ) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

    return(

                <AppBar sx={{color: 'primary.main', bgcolor: 'background.navBar'}} position="static">
                    <Container>
                        <Toolbar variant="dense">
                            <AutoStoriesIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                }}
                            >
                                Ponto e Vírgula ;
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' } }}>
                                {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'primary.veryLightMain', display: 'block' }}
                                >
                                    {page}
                                </Button>
                                ))}
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>

    )
}