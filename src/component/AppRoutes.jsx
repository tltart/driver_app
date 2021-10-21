import React from "react";
import { Route, Switch, Redirect } from 'react-router';
import { publicRoutes } from '../routes';


const AppRoutes = () => {
    
    return (
        <Switch>
            {/* {!isAuth} */}
            {publicRoutes.map(({ path, Component }) => <Route key={path} path={path} component={Component} exact />)}
            
            {/* <Redirect to={} /> */}
        </Switch>
    )
}

export default AppRoutes;