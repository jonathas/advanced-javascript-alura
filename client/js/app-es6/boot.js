import { NegociacaoController } from './controllers/NegociacaoController';
import {} from './polyfill/fetch';

let negociacaoController = new NegociacaoController();

document.querySelector('.form').onsubmit = negociacaoController.adiciona.bind(negociacaoController); // bind pra manter o this correto
document.querySelector('[type=button]').onclick = negociacaoController.apaga.bind(negociacaoController);