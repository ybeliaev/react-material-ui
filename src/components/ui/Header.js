import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { Button } from '@material-ui/core'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'

import logo from '../../assets/logo.svg'

function ElevationScroll(props) {
    const { children } = props

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    })

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    })
}
const useStyles = makeStyles((theme) => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '3em',
    },
    logo: {
        height: '8em',
    },
    logoContainer: {
        padding: 0,
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    tabContainer: {
        marginLeft: 'auto',
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10, // контент кнопок меню ужмётся
        marginLeft: '25px',
    },
}))

export default function Header() {
    const [value, setValue] = React.useState(0)
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [open, setOpen] = React.useState(false)

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
        setOpen(true)
    }
    const handleClose = () => {
        setAnchorEl(null)
        setOpen(false)
    }
    // чтобы после перезагрузки не сбрасывалось в HOME а оставалось в старом месте
    useEffect(() => {
        if (window.location.pathname === '/' && value !== 0) {
            setValue(0)
        } else if (window.location.pathname === '/services' && value !== 1) {
            setValue(1)
        } else if (window.location.pathname === '/revolution' && value !== 2) {
            setValue(2)
        } else if (window.location.pathname === '/about' && value !== 3) {
            setValue(3)
        } else if (window.location.pathname === '/contact' && value !== 4) {
            setValue(4)
        }
    }, [value])

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    const classes = useStyles()
    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar disableGutters>
                        <Button
                            component={Link}
                            to="/"
                            disableRipple
                            className={classes.logoContainer}
                            onClick={(_) => setValue(0)} // иначе останется выделенным пред пункт меню
                        >
                            <img
                                src={logo}
                                alt="company logo"
                                className={classes.logo}
                            />
                        </Button>
                        <Tabs
                            value={value} // value - порядок пункта меню
                            onChange={handleChange}
                            aria-label="simple tabs example"
                            indicatorColor="primary"
                            className={classes.tabContainer}
                        >
                            <Tab
                                label="Home"
                                className={classes.tab}
                                component={Link}
                                to="/"
                            />
                            <Tab
                                label="Services"
                                aria-controls={
                                    anchorEl ? 'customized-menu' : undefined
                                }
                                aria-haspopup={anchorEl ? true : undefined}
                                onMouseOver={(e) => handleClick(e)}
                                className={classes.tab}
                                component={Link}
                                to="/services"
                            />
                            <Tab
                                label="The Revolution"
                                className={classes.tab}
                                component={Link}
                                to="/revolution"
                            />
                            <Tab
                                label="About Us"
                                className={classes.tab}
                                component={Link}
                                to="/about"
                            />
                            <Tab
                                label="Contact Us"
                                className={classes.tab}
                                component={Link}
                                to="/contact"
                            />
                        </Tabs>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            MenuListProps={{ onMouseLeave: handleClose }} // чтобы скрывалось меню после ухода мышки look https://material-ui.com/api/menu/#main-content
                        >
                            <MenuItem
                                onClick={() => {
                                    handleClose()
                                    setValue(1)
                                }}
                                component={Link}
                                to="/services"
                            >
                                Services
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    handleClose()
                                    setValue(1)
                                }}
                                component={Link}
                                to="/soft_dev"
                            >
                                Software development
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    handleClose()
                                    setValue(1)
                                }}
                                component={Link}
                                to="/modile_dev"
                            >
                                Mobile App development
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    handleClose()
                                    setValue(1)
                                }}
                                component={Link}
                                to="/website_dev"
                            >
                                Website development
                            </MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </>
    )
}
