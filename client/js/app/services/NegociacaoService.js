class NegociacaoService {

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
}