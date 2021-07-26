import React from 'react'
import {BrowserRouter as Router ,
Link,
Route,
Switch} from "react-router-dom"
import About from './body/About'
import Day16 from './body/day16/Day16'
import Day22 from './body/day22/Day22'


const NavigationBar = () => {
    return (
        <Router>
            <div className="nav-main-div">
                <nav className="navbar-container">
                <div className="child-div">
                    <h6 className="nav-link">
                        <Link to="/">Home</Link>
                    </h6>
                    <h6 className="nav-link">
                        <Link to ="/about">About</Link>
                    </h6>
                    <h6 className="nav-link">
                        <Link to ="/day16">Day16</Link>
                    </h6>
                    <h6 className="nav-link">
                        <Link to ="/day22">Day22</Link>
                    </h6>
                </div>
                </nav>
            </div>



            <Switch>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/day16">
                    <Day16/>
                </Route>
                <Route path="/day22">
                    <Day22/>
                </Route>
            </Switch>
        </Router>
            
        
    )
}

export default NavigationBar
