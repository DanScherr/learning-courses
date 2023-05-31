import {createTheme} from '@mui/material';
import { amber, deepOrange, green, grey, lightGreen, lime, yellow } from '@mui/material/colors';


export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            navBar: grey[900],
        },
        primary: {
            main: amber['A400'],
            lightMain: amber['A200'],
            veryLightMain: amber[200],
        },
        secondary: {
            main: amber['A400'],
            veryLightMain: amber[50],
        },
    }
})

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
    }
})
