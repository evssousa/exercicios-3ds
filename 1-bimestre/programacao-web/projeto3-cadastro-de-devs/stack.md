#### PROFESSOR: EVERSON SOUSA | TURMA: 2º EM DESENVOLVIMENTO DE SISTEMAS

DATA DE ENTREGA: 11/MAR
# PROJETO 3 – CADASTRO DE DEVS

Construa uma página web que permita cadastrar desenvolvedores, suas tecnologias e tempos de experiência. 

- A página deve ter um input para o nome completo do desenvolvedor e um botão para adicionar uma nova tecnologia.
- Ao clicar no botão um evento deve ser disparado criando no formulário uma nova linha de inputs contendo:
    - um campo de texto para o nome da tecnologia
    - um grupo de botões tipo “radio” com opções de tempo de experiência (por exemplo, “0-2 anos”, “3-4 anos” e “5+ anos”)
    - um botão de remover que deve excluir essa linha.
- O formulário também deve ter um botão de cadastrar que salva as informações do dev em um array e limpa o formulário. Para testar o funcionamento você pode utilizar um simples console.log()

---
**ATENÇÃO 1:**

Esse projeto deve ser feito com base no seu entendimento. Não existe tela ou print, somente o requisito do projeto. Leia atentamente o que se pede, analise e desenvolva pelo que entendeu. Pesquise sempre que possível na documentação, nas suas anotações e nos projetos anteriores. Essa é a hora de mostrar seu conhecimento técnico em análise de requisitos e desenvolvimento web!

---

**ATENÇÃO 2:**

Para esse projeto você deve utilizar apenas eventos adicionados via javascript e a página deve funcionar sem acionar um recarregamento.

Abaixo você irá encontrar um exemplo de código que fará com que a página funcione sem acionar o recarregamento. Isso é importante para que as informações preenchidas no campos não sejam apagadas quando você enviar dados pelo formulário e a página acabar recarregando. Estude o código abaixo e analise seu funcionamento com base nos comentários adicionados:

**Código HTML:**

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Trabalhando Com Formulários</title>
  <script src="./index.js" defer></script>
</head>
<body>
  <h1>Trabalhando Com Formulários</h1>
  <hr>

  <h2>Montar Pedido</h2>

  <form id="orderForm">
    <label for="name">Nome:</label>
    <br>
    <input type="text" name="name" id="name">
    <br><br>

    <label for="address">Endereço de Entrega:</label>
    <br>
    <input type="text" name="address" id="address">
    <br><br>

    <label for="breadType">Tipo de Pão</label>
    <br>
    <select name="breadType" id="breadType">
      <option selected disabled>Selecione uma opção...</option>
      <option value="3 queijos">3 queijos</option>
      <option value="Parmesão e orégano">Parmesão e orégano</option>
      <option value="9 grãos">9 grãos</option>
      <option value="Italiano branco">Italiano branco</option>
      <option value="Granola salgada">Granola salgada</option>
      <option value="Manteiga temperada">Manteiga temperada</option>
    </select>
    <br><br>

    <label for="main">Principal:</label>
    <br>
    <input type="radio" name="main" id="main1" value="Carne">
    <label for="main1">Carne</label>
    <input type="radio" name="main" id="main2" value="Frango">
    <label for="main2">Frango</label>
    <input type="radio" name="main" id="main3" value="Vegano">
    <label for="main3">Vegano</label>
    <br><br>

    <label for="salad">Salada:</label>
    <br>
    <input type="checkbox" name="salad" id="salad1" value="Alface">
    <label for="salad1">Alface</label>
    <input type="checkbox" name="salad" id="salad2" value="Tomate">
    <label for="salad2">Tomate</label>
    <input type="checkbox" name="salad" id="salad3" value="Azeitonas">
    <label for="salad3">Azeitonas</label>
    <input type="checkbox" name="salad" id="salad4" value="Cenoura">
    <label for="salad4">Cenoura</label>
    <input type="checkbox" name="salad" id="salad5" value="Picles">
    <label for="salad5">Picles</label>
    <br><br>

    <label for="observations">Observações:</label>
    <br>
    <textarea name="observations" id="observations" cols="30" rows="6"></textarea>
    <br><br>

    <button type="submit">Fechar Pedido</button>
  </form>
</body>
</html>
```

**Código Javascript:**
```
const form = document.getElementById("orderForm")

form.addEventListener("submit", function (ev) {
  // ==========================================================================
  // ==========================================================================
  // Esse método preventDefault() fará com que a página não seja recarregada!!!  
  // ==========================================================================
  // ==========================================================================
  ev.preventDefault()

  // querySelector é uma outra forma de seletor. Você pode usar os outros seletores por id que foi passado tanto quanto este!
  const name = document.querySelector("input[name='name']").value
  const address = document.querySelector("input[name='address']").value
  const breadType = document.querySelector("select[name='breadType']").value
  const main = document.querySelector("input[name='main']").value
  const observations = document.querySelector("textarea[name='observations']").value

  let salad = ""
  document.querySelectorAll("input[name='salad']:checked").forEach(function (item) {
    salad += " - " + item.value + "\n"
  })

  console.log({
    name,
    address,
    breadType,
    main,
    salad,
    observations
  })

  alert(
    "Pedido Realizado!" +
    "\nNome do cliente: " + name +
    "\nEndereço de entrega: " + address +
    "\nTipo de pão: " + breadType +
    "\nRecheio: \n - " + main + "\n" + salad +
    "Observações: " + observations
  )
})
```

Boas práticas! :call_me_hand:
