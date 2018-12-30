import { HttpService } from "./HttpService";
import { ConnectionFactory } from './ConnectionFactory';
import { NegociacaoDao } from '../dao/NegociacaoDao';
import { Negociacao } from '../models/Negociacao';

export class NegociacaoService {

    constructor() {
        this._http = new HttpService();
    }

    obterNegociacoes() {
        return Promise.all([
            this.obterNegociacoesDaSemana(),
            this.obterNegociacoesDaSemanaAnterior(),
            this.obterNegociacoesDaSemanaRetrasada()
        ]).then(negociacoes => negociacoes
            .reduce((arrayAchatado, array) => arrayAchatado.concat(array), []));
    }

    obterNegociacoesDaSemana() {
        return new Promise((resolve, reject) => {
            this._http.get('negociacoes/semana').then(negociacoes => {
                resolve(negociacoes.map(objeto =>
                    new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
            }).catch(err => {
                console.log(err);
                reject('Não foi possível obter as negociações da semana');
            });
        });
    }

    obterNegociacoesDaSemanaAnterior() {
        return new Promise((resolve, reject) => {
            this._http.get('negociacoes/anterior').then(negociacoes => {
                resolve(negociacoes.map(objeto =>
                    new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
            }).catch(err => {
                console.log(err);
                reject('Não foi possível obter as negociações da semana');
            });
        });
    }

    obterNegociacoesDaSemanaRetrasada() {
        return new Promise((resolve, reject) => {
            this._http.get('negociacoes/retrasada').then(negociacoes => {
                resolve(negociacoes.map(objeto =>
                    new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
            }).catch(err => {
                console.log(err);
                reject('Não foi possível obter as negociações da semana');
            });
        });
    }

    cadastra(negociacao) {
        return ConnectionFactory
            .getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(dao => dao.adiciona(negociacao))
            .then(() => 'Negociação adicionada com sucesso')
            .catch(err => {
                console.log(err);
                throw new Error('Não foi possível adicionar a negociação');
            });
    }

    lista() {
        return ConnectionFactory
            .getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(dao => dao.listaTodos())
            .catch(err => {
                console.log(err);
                throw new Error('Não foi possível obter as negociações')
            });
    }

    apaga() {
        return ConnectionFactory
            .getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(dao => dao.apagaTodos())
            .then(() => 'Negociações apagadas com sucesso')
            .catch(err => {
                console.log(err);
                throw new Error('Não foi possível apagar as negociações');
            });
    }

    importa(listaAtual) {
        return this.obterNegociacoes()
            .then(negociacoes => negociacoes.filter(n1 => !listaAtual.some(n2 => n1.isEquals(n2))))
            .catch(err => {
                console.log(err);
                throw new Error('Não foi possível buscar negociações para importar');
            });
    }
}