export class ClasseValores {

  static faixas = [
    {IMC: 40,    texto: 'OBESIDADE GRAVE',  cor: 'red'},
    {IMC: 30,    texto: 'OBESIDADE',        cor: 'darkorange'},
    {IMC: 25,    texto: 'SOBREPESO',        cor: 'orange'},
    {IMC: 18.5,  texto: 'NORMAL',           cor: 'green'},
    {IMC: 0,     texto: 'MAGREZA',          cor: 'orange'}
  ];

  constructor(altura, peso) {
    this.altura = altura;
    this.peso = peso;
    this.IMC = 0;
  }
  
  get alturaFormatada() {
    return this.altura.toFixed(2);
  }

  get pesoFormatado() {
    return this.peso.toFixed(1);
  }

  get imcFormatado() {
    return this.IMC.toFixed(2);
  }
  
  set altura(novaAltura) {
    this._altura = parseFloat(novaAltura);
    this.calculaIMC();
  }

  get altura() {
    return this._altura;
  }

  set peso(novoPeso) {
    this._peso = parseFloat(novoPeso);
    this.calculaIMC();
  }

  get peso() {
    return this._peso;
  }

  get cor() {
    return ClasseValores.faixas.find(faixa => this.IMC >= faixa.IMC).cor;
  }

  get texto() {
    return ClasseValores.faixas.find(faixa => this.IMC >= faixa.IMC).texto;
  }
  
  calculaIMC() {
    this.IMC = this.peso / this.altura ** 2;
  }
}