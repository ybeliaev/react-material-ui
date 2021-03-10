import { createMuiTheme } from '@material-ui/core/styles';

const jBlue = "#0B72B9"
const jOrange = "#FFBA60"

export default createMuiTheme({
    palette: {
        common: {
            jBlue: `${jBlue}`,
            jOrange: `${jOrange}`
        },
        primary:{
            main: `${jBlue}`
        },
        secondary:{
            main: `${jOrange}`
        }
    },
    typography:{
        tab:{
            fontFamily: ['Raleway', 'sans-serif'],
            textTransform: "none", // disable uppercase
            fontWeight: "700",
            fontSize: "1rem",
        }
    }
    
})