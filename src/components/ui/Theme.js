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
        h3:{
            fontWeight: 300
        }
    }
    
})