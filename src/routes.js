import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./components/produto/main/index";
import DetalhesCliente from "./components/produto/detalhes/index";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/produto" component={Main} />
            <Route path="/produto/:id" component={DetalhesCliente} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
