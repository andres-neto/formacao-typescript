export class Negociacao {
    #data;
    #quantidade;
    #valor;

    constructor(_data, quantidade, valor) {
        this.#data = _data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }

    get data() {
        // const data = new Date(this.#data.getTime());
        const data = this.#data;
        return data;
    }
    get quantidade() {
        const quantidade = this.#quantidade;
        return quantidade;
    }
    get valor() {
        const valor = this.#valor;
        return valor;
    }
    
    get volume() {
        return this.#quantidade * this.#valor;
    }
}
