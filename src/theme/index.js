import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#55672b',
        },
        secondary: {
            main: 'rgb(109 145 52)',
        },
        bgView: {
            main: '#00000080'
        },

        error: {
            main: red.A400,
        },
    },
});

export default theme;