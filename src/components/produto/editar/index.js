import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./index.css";

class EditarProduto extends Component {
    constructor(props) {
        super(props);

        this.state = {
            produto: {
                nome: "",
                descricao: "",
                preco: "",
                quantEstoque: "",
            },
            erro: null,
            redirect: false,
        };
    }

    exibeErro() {
        const { erro } = this.state;

        if (erro) {
            return (
                <div className="alert alert-danger" role="alert">
                    Erro de conexão com o servidor
                </div>
            );
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch(`${process.env.REACT_APP_API_URL}``${id}`)
            .then((data) => {
                data.json().then((data) => {
                    if (data.error) {
                        this.setState({ erro: data.error });
                    } else {
                        this.setState({ produto: data });
                    }
                });
            })
            .catch((erro) => this.setState({ erro: erro }));
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/produto" />;
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Cadastrar Produto</legend>
                        <div className="produto-update">
                            <label htmlFor="nome">Nome </label>
                            <br />
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                placeholder="Nome"
                                minLength="3"
                                maxLength="100"
                                required
                                value={this.state.produto.nome}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="produto-update">
                            <label htmlFor="descricao">Descrição </label>
                            <br />
                            <input
                                type="text"
                                id="descricao"
                                name="descricao"
                                placeholder="Descrição"
                                minLength="3"
                                maxLength="200"
                                required
                                value={this.state.produto.descricao}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="produto-update">
                            <label htmlFor="preco">Preço </label>
                            <br />
                            <input
                                type="float"
                                id="preco"
                                name="preco"
                                placeholder="Preço"
                                required
                                value={this.state.produto.preco}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="produto-insert">
                            <label htmlFor="quantEstoque">
                                Quantidade de Estoque
                            </label>
                            <br />
                            <label>
                                <input
                                    type="integer"
                                    name="quantEstoque"
                                    id="quantEstoque"
                                    placeholder="Quant. Estoque"
                                    required
                                    value={this.state.produto.quantEstoque}
                                    onChange={this.handleInputChange}
                                />
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Atualizar
                        </button>
                    </fieldset>
                </form>
            );
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState((prevState) => ({
            produto: { ...prevState.produto, [name]: value },
        }));
    };

    handleSubmit = (event) => {
        const { id } = this.state.produto;

        fetch(`${process.env.REACT_APP_API_URL}``${id}`, {
            method: "put",
            body: JSON.stringify(this.state.produto),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((data) => {
                if (data.ok) {
                    this.setState({ redirect: true });
                } else {
                    data.json().then((data) => {
                        if (data.error) {
                            this.setState({ erro: data.error });
                        }
                    });
                }
            })
            .catch((erro) => this.setState({ erro: erro }));

        event.preventDefault();
    };
}

export default EditarProduto;
