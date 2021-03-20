import React from 'react';
import {Route, Switch} from 'react-router-dom'; 
import FrontLayout from './components/layouts/FrontLayout';
import Home from './pages/home/Home';
import Team from './pages/team/Team';
import About from './pages/about/About';
import Project from './pages/project/Project';

const AppRoute = ({component: Component, layout: Layout, ...rest}:  any) => (
<Route {...rest} render={props=>(
<Layout><Component {...props}></Component></Layout>
)}></Route>
)

const Routes = () => {
    return (
        <Switch>
            <AppRoute path="/" exact={true} layout={FrontLayout} component={Home}/>
            <AppRoute path="/about" exact={true} layout={FrontLayout} component={About}/>
            <AppRoute path="/team" exact={true} layout={FrontLayout} component={Team}/>
            <AppRoute path="/projects" exact={true} layout={FrontLayout} component={Project}/>
        </Switch>
    )
}

export default Routes
