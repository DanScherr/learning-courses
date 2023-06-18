//@ts-check
import { 
    AppBar, 
    Toolbar, 
    Container, 
    Typography, 
    Box, 
    Slide, 
    useScrollTrigger, 
    IconButton, 
    Menu, 
    MenuItem, 
    Tooltip, 
    Avatar,
    Button,
} from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import MenuIcon from '@mui/icons-material/Menu';

import React from 'react';
import { useState } from 'react';
import profileImg from './../../../static/images/avatar/3.jpg'
import SearchInput from './SearchInput';

const pages = ['Clássico', 'Ficção', 'Romance', 'Outros'];
const settings = ['My Books', 'Settings', 'Logout'];


export default function Header( ) {

    /** Hide Bar when Scroll */
    const trigger = useScrollTrigger();

    /** Responsive Bar */
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return(
        <>
            <Slide appear={false} direction='down' in={!trigger}>
                <AppBar sx={{color: 'primary.main', bgcolor: 'background.navBar'}}  >
                    <Container maxWidth="xl" >
                        <Toolbar disableGutters variant="dense">

                            {/** BIG SCREENS */}
                            {/** Logo */}
                            <AutoStoriesIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 2, ml: 10 }} />
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                // mr: 2,
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

                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
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

                            {/** SMALL SCREENS */}
                            {/** Menu */}
                            <Box sx={{ 
                                flexGrow: 0.5, 
                                display: { xs: 'flex', md: 'none' }, ml: 5,
                                width: 50,
                            }}>
                                <IconButton 
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                    
                                >
                                    <MenuIcon sx={{
                                        color: 'primary.veryLightMain'
                                    }}/>
                                </IconButton>
                                <Menu
                                    id='menu-appbar'
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{ 
                                        display: {xs: 'block', md: 'none'}
                                    }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu} sx={[
                                            {
                                              ':hover': {
                                                color: 'primary.veryLightMain',
                                              },
                                            },
                                        ]}
                                        >
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>

                            {/** SMALL SCREENS */}
                            {/** Logo */}
                            <AutoStoriesIcon sx={{ display: { xs: 'flex', md: 'none'}, mr: 1 }} />
                            <Typography
                                variant="h7"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                mr: 1,
                                display: { xs: 'flex', md: 'none'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                flexGrow: 0.5
                                }}
                            >
                                Ponto e Vírgula ;
                            </Typography>

                            {/** BIG SCREENS */}
                            {/** Search */}
                            <Box sx={{ 
                                flexGrow: 1, 
                                display: { xs: 'flex', md: 'flex', justifyContent: 'flex-end' }, 
                                mr: 5
                            }}>
                                <SearchInput />
                            </Box>

                            {/** BIG & SMALL SCREENS */}
                            {/** Avatar */}
                            <Box sx={{ flexGrow: 0, mr: 10 }}>
                                <Tooltip title="User Options">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Avatar" src={profileImg} />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                    >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu} sx={[
                                            {
                                              ':hover': {
                                                color: 'primary.veryLightMain',
                                              },
                                            },
                                        ]}>
                                            <Typography textAlign="center" >
                                                {setting}
                                            </Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Slide>
            <Box sx={{height: 100}} />
        </>
        
    )
}