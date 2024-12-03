import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    public negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao> {
        return [...this.negociacoes];
    }
}
