import React from "react"

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


import { makeStyles } from '@material-ui/core/styles';

import logo from "../../assets/logo.svg"

import useScrollTrigger from '@material-ui/core/useScrollTrigger';



function ElevationScroll(props) {
    const { children } = props;
    
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
 const useStyles = makeStyles(theme => ({
   toolbarMargin: {
     ...theme.mixins.toolbar,
     marginBottom: "3em"
   },
   logo:{
     height: "7em"
   },
   tabContainer: {
     marginLeft: "auto"
   },
   tab:{   
     ...theme.typography.tab,  
     minWidth: 10, // контент кнопок меню ужмётся
     marginLeft: "25px"
   }
 }))


export default function Header() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles()
    return (
      <>
        <ElevationScroll>
            <AppBar position="fixed">
                <Toolbar disableGutters >
                  <img src={logo} alt="company logo" className={classes.logo}/>
                  <Tabs value={value} // value - порядок пункта меню
                        onChange={handleChange}
                        aria-label="simple tabs example"
                        indicatorColor="primary"
                        className={classes.tabContainer}
                  >
                    <Tab label="Home" className={classes.tab} />
                    <Tab label="Services" className={classes.tab} />
                    <Tab label="The Revolution" className={classes.tab} />
                    <Tab label="About Us" className={classes.tab} />
                    <Tab label="Contact Us" className={classes.tab} />
                  </Tabs>
                </Toolbar>
            </AppBar>
            
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
      </>
       
    )
}
