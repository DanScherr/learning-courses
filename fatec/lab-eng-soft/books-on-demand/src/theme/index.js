import {createTheme} from '@mui/material';
import { amber, grey } from '@mui/material/colors';


export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            navBar: grey[900],
        },
        primary: {
            main: amber['A400'],
            lightMain: amber['A200'],
            veryLightMain: amber[50],
        },
        secondary: {
            main: amber['900'],
            veryLightMain: amber[600],
        },
    }
})

