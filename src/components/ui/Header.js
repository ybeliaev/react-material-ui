import React from "react"

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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
     ...theme.mixins.toolbar
   }
 }))


export default function Header() {
  const classes = useStyles()
    return (
      <>
        <ElevationScroll>
            <AppBar position="fixed">
                <Toolbar>
                  <Typography variant="h3">Jorgen development</Typography>
                </Toolbar>
            </AppBar>
            
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
      </>
       
    )
}
