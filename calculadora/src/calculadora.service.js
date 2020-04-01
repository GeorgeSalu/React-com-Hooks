function CalculadoraService() {

  const SOMA = '+'
  const SUBTRACAO = '-'

  function calcular(numero1, numero2, operacao) {
    let resultado;

    switch(operacao) {
      case SOMA:
        resultado = numero1 + numero2
        break;
      case SUBTRACAO:
        resultado = numero1 - numero2
        break;
    }
    
    return resultado;
  }


  return [
    calcular, SOMA, SUBTRACAO
  ];
}

export default CalculadoraService