import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default class Produto extends Component {
    state = {
        produto: {},
    };

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`https://produtop1.herokuapp.com/produto/${id}`)
            .then((produto) =>
                produto.json().then((produto) => this.setState({ produto }))
            )
            .catch((erro) => this.setState({ erro }));
    }

    render() {
        const { produto } = this.state;

        if ((produto.quantEstoque += 1)) {
            produto.ativo = "Produto em Estoque";
        } else {
            produto.ativo = "Produto Indisponível";
        }

        return (
            <div className="produto-info">
                <h1> {produto.nome} </h1>
                <h1> {produto.descricao} </h1>
                <h1> {produto.preco} </h1>
                <h1> {produto.quantEstoque} </h1>
                <br />
                <Link to={`/produto`}> Voltar </Link> <br />
                <Link to={`/produtoedit/${produto.id}`}> Editar </Link> <br />
                <Link to={`/produtodelete/${produto.id}`}> Deletar </Link>{" "}
                <br />
            </div>
        );
    }
}
