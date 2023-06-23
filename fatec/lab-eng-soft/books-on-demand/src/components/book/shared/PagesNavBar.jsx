import React, { useContext, useEffect, useState } from 'react';
import BookPagesContext from '../../../context/book/pages/BookPagesContext';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Typography, IconButton } from '@mui/material';
import { FirstPage, ChevronLeftSharp, ChevronRightSharp, LogoutOutlined, InfoOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';


export default function PagesNavBar(  ) {
    const {
        nextPage,
        previousPage,
        backToFirstPage,
        numPages,
        pageNumber
    } = useContext(BookPagesContext);

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress((pageNumber/numPages)*100)
    }, [pageNumber])

    const navigate = useNavigate();

    const navigateHome = (() => {
        navigate('/')
    })



    return (
        <>
            {/** Barra de progressão */}
            <Box sx={{ width: '100%' }}>
                <LinearProgress sx={{height: 10}} variant="determinate" value={progress} />
            </Box>
            {/** Bottom Bar */}
            {/** Nome do Livro */}
            <Typography
                    variant="h7"
                    noWrap
                    component="a"
                    sx={{
                        display: { xs: 'block', md: 'block' },
                        fontFamily: 'monospace',
                        fontWeight: 1000,
                        letterSpacing: '.1rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        textAlign: 'center'
                    }}
                >
                    Nome do Livro
                </Typography>

            {/** Identificação de paginas */}
            <div style={{textAlign: 'center'}}>
                <Typography
                    variant="h7"
                    noWrap
                    component="a"
                    sx={{
                        display: { xs: 'block', md: 'block' },
                        fontFamily: 'monospace',
                        fontWeight: 200,
                        letterSpacing: '.1rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        textAlign: 'center'
                    }}
                >
                    Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                </Typography>

                {/** Back to First Page */}
                <Tooltip title="First Page" placement='left' arrow>
                    <IconButton 
                        size="small"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={backToFirstPage}
                        color="inherit"
                        disabled={pageNumber <= 1}
                    >
                        <FirstPage sx={{
                            color: 'primary.veryLightMain'
                        }}/>
                    </IconButton>
                </Tooltip>
                
                {/** Backwards one Page */}
                <Tooltip title="Back" placement='top' arrow>
                    <IconButton 
                        size="small"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={previousPage}
                        color="inherit"
                        disabled={pageNumber <= 1}
                        
                    >
                        <ChevronLeftSharp sx={{
                            color: 'primary.veryLightMain'
                        }}/>
                    </IconButton>
                </Tooltip>

                {/** Fowards one Page */}
                <Tooltip title="Fowards" placement='top' arrow>
                    <IconButton 
                        size="small"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={nextPage}
                        color="inherit"
                        disabled={pageNumber >= numPages}
                        
                    >
                        <ChevronRightSharp sx={{
                            color: 'primary.veryLightMain'
                        }}/>
                    </IconButton>
                </Tooltip>

                {/** Leave */}
                <Tooltip title="Leave" placement='right' arrow>
                    <IconButton 
                        size="small"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={navigateHome}
                        color="inherit"
                        
                    >
                        <LogoutOutlined sx={{
                            color: 'primary.main'
                        }}/>
                    </IconButton>
                </Tooltip>
            </div>
        </>
    )
}