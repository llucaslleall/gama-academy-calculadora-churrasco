const botao = document.querySelector("#botaoCalcular")

const calcularChurrasco = () => {
    document.getElementById("botaoCalcular").style.display = 'none';
    document.getElementById("resultado-input").style.display = 'none';
    document.getElementById("spinner-calc").style.display = 'inline';

    // Coleta valor dos inputs
    const mulheres = document.getElementById('mulheres-qnt').value;
    const homens = document.getElementById('homens-qnt').value;
    const criancas = document.getElementById('criancas-qnt').value;

    const acompanhamentos = document.getElementById('acompanhamentos').checked;
    const bebidasAlcoolicas = document.getElementById('bebidas-alcoolicas').value;
    const bebidasNaoAlcoolicas = document.getElementById('bebidas-nao-alcoolicas').value;

    // Vegetarianos
    const vegetarianos = document.getElementById('vegetarianos').value;


    // Logica de valores por grama e multiplicacao da quantidade de pessoas
    var totalCarne = mulheres * 150 + homens * 200 + criancas * 100 - 150*vegetarianos
    if (totalCarne < 0) {
        totalCarne = 0
    }

    // Soma da quantidade de pessoas
    const totalPessoas = Number(mulheres) + Number(homens) + Number(criancas)
    
    // 50g de acompanhamento por pessoa
    const totalAcompanhamento = acompanhamentos ? 50 * Number(totalPessoas) + 10 * Number(vegetarianos) : 0
    
    // 400ml de bebida nao alcoolica para cada pessoa
    const totalBebidasNaoAlcoolicas = bebidasNaoAlcoolicas ? 500 * Number(bebidasNaoAlcoolicas) : 0
    
    // 500ml de bebida alcoolica para cada pessoa :'D
    const totalBebidasAlcoolicas = bebidasAlcoolicas ? 500 * Number(bebidasAlcoolicas) : 0

    setTimeout(() => {  
        document.getElementById("resultado-input").style.display = 'inline';  
        document.getElementById("spinner-calc").style.display = 'none';
        document.getElementById("botaoCalcular").style.display = 'inline'; 
        }, 500);
    
    document.getElementById("total-carne").innerHTML = `<li>${getValueMeasure(totalCarne, 1)} de carne</li>`
    document.getElementById("total-pessoas").innerHTML = `<p> Para ${totalPessoas} pessoas, é necessário: </p>`
    document.getElementById("total-acompanhamento").innerHTML = `<li> ${getValueMeasure(totalAcompanhamento, 1)} de acompanhamento </li>`
    document.getElementById("total-bebidas-nao-alcoolicas").innerHTML = `<li> ${getValueMeasure(totalBebidasNaoAlcoolicas, 2)} de bebidas alcoolicas </li>`
    document.getElementById("total-bebidas-alcoolicas").innerHTML = `<li> ${getValueMeasure(totalBebidasAlcoolicas, 2)} de bebidas não alcoolicas </li>`

    document.getElementById('mulheres-qnt').value = '';
    document.getElementById('mulheres-qnt').placeholder = mulheres;
    document.getElementById('homens-qnt').value = '';
    document.getElementById('homens-qnt').placeholder = homens;
    document.getElementById('criancas-qnt').value = '';
    document.getElementById('criancas-qnt').placeholder = criancas;
    document.getElementById('acompanhamentos').checked = false;
    document.getElementById('bebidas-alcoolicas').value = '';
    document.getElementById('bebidas-alcoolicas').placeholder = bebidasAlcoolicas;
    document.getElementById('bebidas-nao-alcoolicas').value = '';
    document.getElementById('bebidas-nao-alcoolicas').placeholder = bebidasAlcoolicas;
    document.getElementById('vegetarianos').value = '';
    document.getElementById('vegetarianos').placeholder = vegetarianos;



}


/* Definição da medida utilizada a partir da quantidade medida em gramas
type 1: comidas
type 2: bebidas
*/

function getValueMeasure(val, type) {
    switch(type) {
        case 1: {
            return val >= 1000 ? `${val/1000}kg` : `${val}g`
            break;
        }
        case 2: {
            return val >= 1000 ? `${val/1000}L` : `${val}ml`
            break;
        }
    }
}

botao.addEventListener("click", calcularChurrasco)
