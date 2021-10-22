function calculadora() {
    const operacao = Number(prompt('escolha uma operação:\n 1-Soma(+)\n 2-Subtração(-)\n 3-Multiplicação(*)\n 4-Divisão(/)\n 5-Resto da Divisão( % )\n 6-Potenciação( ** )'));
    //prompt abre uma janela no navegador e cria um espaço para o usuario inserir dados.

    if (!operacao || operacao <= 0 || operacao >= 7) {
        alert('Número inválido!')
        calculadora();
    } else {

        let numero1 = Number(prompt('Digite o primeiro numero:'));
        let numero2 = Number(prompt('Digite o segundo numero: '));
        let resultado;

        if (!numero1 || !numero2) {
            alert('Digite apenas número!');
            calculadora();
        } else {



            function soma() {
                resultado = numero1 + numero2;
                alert(numero1 + " + " + numero2 + ' = ' + resultado);
                novaOperacao();
            }

            function subtracao() {
                resultado = numero1 - numero2;
                alert(numero1 + " - " + numero2 + ' = ' + resultado);
                novaOperacao();
            }

            function multiplicacao() {
                resultado = numero1 * numero2;
                alert(numero1 + " * " + numero2 + ' = ' + resultado);
                novaOperacao();
            }

            function divisao() {
                resultado = numero1 / numero2;
                alert(numero1 + " / " + numero2 + ' = ' + resultado);
                novaOperacao();
            }

            function restodivisao() {
                resultado = numero1 % numero2;
                alert('Resto da divisão entre ' + numero1 + " e " + numero2 + ' é: ' + resultado);
                novaOperacao();
            }

            function potencia() {
                resultado = numero1 ** numero2;
                alert(numero1 + " elevado à " + numero2 + ' é: ' + resultado);
                novaOperacao();
            }


            function novaOperacao() {
                const oper = Number(prompt('Deseja fazer uma nova operação? \n1-Sim\n2-Não'));
                if (oper == 1) {
                    calculadora();
                } else if (oper == 2) {
                    alert('Até Logo!!!')
                } else {
                    novaOperacao();
                }

            }



            // if (operacao == 1) {
            //     soma();
            // } else if (operacao == 2) {
            //     subtracao();
            // } else if (operacao == 3) {
            //     multiplicacao();
            // } else if (operacao == 4) {
            //     divisao();
            // } else if (operacao == 5) {
            //     restodivisao();
            // } else if (operacao == 6) {
            //     potencia();
            // }

            switch (operacao) {
                case 1:
                    soma();
                    break;
                case 2:
                    subtracao();
                    break;
                case 3:
                    multiplicacao();
                    break;
                case 4:
                    divisao();
                    break;
                case 5:
                    restodivisao();
                    break;
                case 6:
                    potencia();
                    break;

            }
        }
    }
}
calculadora();