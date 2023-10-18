//"alert" exibe uma mensagem ao usuário
alert('Boas-vindas ao jogo do Número Secreto');
let numeroMaximo = 500
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
;
// informa na seção "console" qual o valor do número secreto
console.log('Valor do número secreto:', numeroSecreto);
//prompt é o mesmo que o alert, porém deixa o usuário digitar alguma informação, até por isso  nós colocamos ele dentro do let, para que a informação seja guardada
let chute;
let tentativas = 1
// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
  chute = prompt(`Diga um número entre 1 e ${numeroMaximo}`);
  //se o chute for igual ao  número secreto, então execute as {}
  //Informa o valor dito pelo usuário
  console.log('Valor do chute:', chute);
  //Informa se a comparação entre o chute e o numero secreto foi verdadeira ou falsa
  console.log('Resultado da comparação:', chute == numeroSecreto);
  if (chute == numeroSecreto) {
    // faz com que o código pare de executar caso o chute seja igual ao numero secreto, faz a mesma coisa de antes, só que o'alert' foi mudado de lugar
    break;
    //senão for igual, execute o else(senão)
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
    //tentativas = tentativas + 1
    tentativas++;
  }
}

// tentativas é maior que 1, se sim então use 'tentativas' senão use 'tentativa'
let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Parabéns, você acertou o número secreto = ${numeroSecreto} com ${tentativas} ${palavraTentativas}`)
