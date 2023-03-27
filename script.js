import {ClasseValores} from './ClasseValores.js';
import {Cookies} from './Cookies.js';

// Cria as variáveis e classes
var sliderPeso = document.getElementById('slider-peso');
var caixaPeso = document.getElementById('caixa-peso');
var sliderAltura = document.getElementById('slider-altura');
var caixaAltura = document.getElementById('caixa-altura');
var IMC = document.getElementById('IMC');
var resultado = document.getElementById('resultado');
var categoria = document.getElementById('categoria');

// Cria o novo objeto com os valores padrão a serem exibidos
var cookies = Cookies();
var valores = new ClasseValores(cookies.altura || 1.7, cookies.peso || 70);

// Cria os eventos
sliderPeso.addEventListener('input', atualizaPeso, false);
sliderAltura.addEventListener('input', atualizaAltura, false);
caixaPeso.addEventListener('input', atualizaPeso, false);
caixaAltura.addEventListener('input', atualizaAltura, false);
window.addEventListener('load', inicializa, false);

// Atualiza a tela conforme o padrão definido no objeto
function inicializa() {
  caixaPeso.value = valores.pesoFormatado;
  sliderPeso.value = valores.pesoFormatado;
  caixaAltura.value = valores.alturaFormatada;
  sliderAltura.value = valores.alturaFormatada;
  valores.calculaIMC();
  atualizaResultado();
}

// Funções :)
function atualizaPeso () {
  valores.peso = this.value;
// Mantém a sincronia entre o objeto modificado pelo usuário (caixa ou slider) com o outro objeto que guarda a mesma informação (peso)
  this.type == 'range' ? caixaPeso.value = valores.pesoFormatado : sliderPeso.value = valores.pesoFormatado;
  atualizaResultado();
  cookies.setCookie('peso', valores.peso, 6);
}

function atualizaAltura () {
  valores.altura = this.value;
// Mantém a sincronia entre o objeto modificado pelo usuário (caixa ou slider) com o outro objeto que guarda a mesma informação (altura)
  this.type == 'range' ? caixaAltura.value = valores.alturaFormatada : sliderAltura.value = valores.alturaFormatada;
  atualizaResultado();
  cookies.setCookie('altura', valores.altura, 6);
}

function atualizaResultado() {
  IMC.textContent = valores.imcFormatado;
  categoria.textContent = valores.texto;
  resultado.style.backgroundColor = valores.cor;
}