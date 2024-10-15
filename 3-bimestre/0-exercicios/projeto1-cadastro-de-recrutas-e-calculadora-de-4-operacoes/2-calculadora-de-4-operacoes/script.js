/* Calculadora de 4 Operações
Escreva um programa em JS que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão). Após calcular os resultados o programa deve exibi-los na tela dessa forma:

```
Exemplo de números: 5 e 2

Resultado:
5 + 2 = 7
5 - 2 = 3
5 * 2 = 10
5 / 2 = 2.5
```
*/

const num1 = parseInt(prompt('Digite o primeiro número:'))
const num2 = parseInt(prompt('Digite o segundo número:'))

const soma = num1 + num2
const sub = num1 - num2
const mult = num1 * num2
const div = num1 / num2

alert(`Resultado:
${num1} + ${num2} = ${soma}
${num1} - ${num2} = ${sub}
${num1} * ${num2} = ${mult}
${num1} / ${num2} = ${div}`)