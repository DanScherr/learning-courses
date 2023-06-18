/** MUI */
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material'
/** Components */
import Carousel from './shared/Carousel'


export default function Category( { data={}} ) {
    return (
        <div className="row justify-content-center align-items-center">
            <div className="col-10">

                {/** Category Header */}
                <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Button>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                {data.descricao}
                            </Typography>
                        </Button>
                        <Button color="inherit">Back to top</Button>
                    </Toolbar>
                </AppBar>
                </Box>

                {/** CAROUSEL */}
                <Carousel books={data.books} />
                
            </div>
        </div>
    )
}