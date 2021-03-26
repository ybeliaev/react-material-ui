import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './ui/Header'

import { ThemeProvider } from '@material-ui/core/styles'
import theme from './ui/Theme'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={() => <div>HOME</div>} />
                    <Route
                        exact
                        path="/services"
                        component={() => <div>SERVICES</div>}
                    />
                    <Route
                        exact
                        path="/soft_dev"
                        component={() => <div>soft_dev</div>}
                    />
                    <Route
                        exact
                        path="/modile_dev"
                        component={() => <div>modile_dev</div>}
                    />
                    <Route
                        exact
                        path="/website_dev"
                        component={() => <div>website_dev</div>}
                    />
                    <Route
                        exact
                        path="/customsoftware"
                        component={() => <div>CUSTOMSOFTWARE</div>}
                    />
                    <Route
                        exact
                        path="/mobileapps"
                        component={() => <div>MOBILEAPPS</div>}
                    />
                    <Route
                        exact
                        path="/websites"
                        component={() => <div>WEBSITES</div>}
                    />
                    <Route
                        exact
                        path="/revolution"
                        component={() => <div>REVOLUTION</div>}
                    />
                    <Route
                        exact
                        path="/about"
                        component={() => <div>ABOUT</div>}
                    />
                    <Route
                        exact
                        path="/contact"
                        component={() => <div>CONTACT</div>}
                    />
                    {/* <Route exact path="/estimate" component={()=><div>ESTIMATE</div>}/> */}
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
