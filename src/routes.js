import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainUsuario from "./components/produto/main/index";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/produto" component={MainUsuario} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
