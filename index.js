document.querySelector ('#suma').addEventListener ('click', () => {
    calcularOperacion('+');
});

document.querySelector ('#resta').addEventListener ('click', () => {
    calcularOperacion('-')
});

document.querySelector ('#multiplicacion').addEventListener ('click', () => {
    calcularOperacion('*');
});

document.querySelector ('#division').addEventListener ('click', () => {
    calcularOperacion('/');
});

function calcularOperacion(operador) {
    const n1 = 

    document.querySelector ('#n1').value;

    const n2 =
   
    document.querySelector ('#n2').value;

    
    let calculo;
    if (operador == '+'){
        calculo = parseInt(n1) + parseInt(n2);
    }else if (operador == '-'){
        calculo = n1 - n2;
    }else if (operador == '*'){
       calculo = n1 * n2;
    }else if (operador == '/'){
       calculo= n1/n2;
    }



document.querySelector ('#resultado').innerHTML = "El resultado es: " +  calculo;

}

