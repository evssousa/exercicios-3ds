/* Cadastro de Recrutas
Escreva um programa em javascript que permita salvar informações de um recruta. As informações a serem salvas são:
- o primeiro nome
- o sobrenome
- o curso da base técnica
- o ano de nascimento
Depois o programa deve exibir o nome completo do recruta, seu curso da base técnica e sua idade (apenas baseada no ano de nascimento).

A mensagem final deverá aparecer da seguinte forma:

```
Olá John Wick
Então você estuda Desenvolvimento de Sistemas e tem 35 anos. Legal!
```
*/

let nome = prompt('Seu primeiro nome:')
let sobrenome = prompt('Seu sobrenome:')
let cursoTecnico = prompt('O que você estuda:')
const anoNascimento = prompt('Seu ano de nascimento:')

const idade = 2024 - anoNascimento

alert(`Olá ${nome} ${sobrenome}
Então você estuda ${cursoTecnico} e você tem ${idade} anos. Legal!`)