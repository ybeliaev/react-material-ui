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
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

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
        [theme.breakpoints.down('md')]: {
            marginBottom: '2em',
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '1.25em',
        },
    },
    logo: {
        height: '8em',
        [theme.breakpoints.down('md')]: {
            height: '7em',
        },
        [theme.breakpoints.down('xs')]: {
            height: '5.5em',
        },
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
    menu: {
        backgroundColor: theme.palette.common.jBlue,
        color: 'white',
        borderRadius: '0',
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        '&:hover': {
            opacity: 1,
        },
    },
}))

export default function Header() {
    const classes = useStyles()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    const [value, setValue] = React.useState(0)
    const [selectedIndex, setSelectedIndex] = React.useState(0)
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
        switch (window.location.pathname) {
            case '/':
                if (value !== 0) {
                    setValue(0)
                }
                break
            case '/services':
                if (value !== 1) {
                    setValue(1)
                    setSelectedIndex(0)
                }
                break
            case '/soft_dev':
                if (value !== 1) {
                    setValue(1)
                    setSelectedIndex(1)
                }
                break
            case '/modile_dev':
                if (value !== 1) {
                    setValue(1)
                    setSelectedIndex(2)
                }
                break
            case '/website_dev':
                if (value !== 1) {
                    setValue(1)
                    setSelectedIndex(3)
                }
                break
            case '/revolution':
                if (value !== 2) {
                    setValue(2)
                }
                break
            case '/about':
                if (value !== 3) {
                    setValue(3)
                }
                break
            case '/contact':
                if (value !== 4) {
                    setValue(4)
                }
                break
            default:
                break
        }
    }, [value])

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    const tabs = (
        <>
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
                    aria-controls={anchorEl ? 'customized-menu' : undefined}
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
                classes={{ paper: classes.menu }}
                // чтобы скрывалось меню после ухода мышки look https://material-ui.com/api/menu/#main-content
                MenuListProps={{ onMouseLeave: handleClose }}
                // remove dropshadow
                elevation={0}
            >
                <MenuItem
                    onClick={() => {
                        handleClose()
                        setValue(1)
                    }}
                    component={Link}
                    to="/services"
                    classes={{ root: classes.menuItem }}
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
                    classes={{ root: classes.menuItem }}
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
                    classes={{ root: classes.menuItem }}
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
                    classes={{ root: classes.menuItem }}
                >
                    Website development
                </MenuItem>
            </Menu>
        </>
    )
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
                        {matches ? null : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </>
    )
}
