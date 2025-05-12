const pantalla = document.querySelector('.screen');

let operacion = '';

document.querySelectorAll('.calc-button').forEach(boton =>{
    boton.addEventListener('click',() => {

        const valor = boton.innerHTML.trim();
     
        switch (valor){
            
            case 'C':
                operacion = '';
                ActualizarPantalla('0');
                
                break;
            case '<-':
                operacion = operacion.slice(0, -1);
                ActualizarPantalla(operacion);

                break;

            case '=':
                try {
                     const operacionConvertida = operacion.split('').map(convertirSimbolos).join('');
                    const resultado = eval(operacionConvertida);
                    operacion = resultado.toString();
                    ActualizarPantalla(operacion);
                }catch {
                    ActualizarPantalla('ERROR');
                    operacion = '';
                }
                break;

            
            default:
                operacion = operacion + valor;
                ActualizarPantalla (operacion);
                break;
            }
})
})



function convertirSimbolos(simbolo) {
    switch (simbolo) {
        case '×':
     
            return '*';
        case '÷':
      
            return '/';
        case '+':
      
            return '+';
        case '−':
      
            return '-';
        case '=':
      
            return '';
        case '←':
        case '&larr;':
            return '';
        default:
            return simbolo;
    }
  }

function ActualizarPantalla(valor){
   pantalla.textContent = valor;
}