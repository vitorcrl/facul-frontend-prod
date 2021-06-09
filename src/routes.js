import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./components/produto/main/index";
import DetalhesCliente from "./components/produto/detalhes/index";
import CriarProduto from "./components/produto/criar/index";
import EditarProduto from "./components/produto/editar/index";
import DeletarProduto from "./components/produto/deletar/index";
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/produto" component={Main} />
            <Route path="/produto/:id" component={DetalhesCliente} />
            <Route path="/produtocreate" component={CriarProduto} />
            <Route path="/produtoedit/:id" component={EditarProduto} />
            <Route path="/produtodelete/:id" component={DeletarProduto} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
