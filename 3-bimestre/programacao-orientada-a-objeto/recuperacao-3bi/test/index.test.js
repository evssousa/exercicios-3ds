const Author = require('../Author')
const Post = require('../Post')
const Comment = require('../Comment')

describe('Projeto Blog com Classes', () => {
  
  // Criando autor para todos os testes
  const john = new Author('John Wick')

  test('1️⃣ Deve criar um autor com o nome correto', () => {
    expect(john.name).toBe('John Wick')
  })

  test('2️⃣ O autor deve iniciar com array de posts vazio', () => {
    expect(Array.isArray(john.post)).toBe(true)
    expect(john.post.length).toBe(0)
  })

  test('3️⃣ Deve criar um post usando o método createPost do autor', () => {
    const post = john.createPost('Título 1', 'Conteúdo 1')
    expect(post.title).toBe('Título 1')
    expect(post.content).toBe('Conteúdo 1')
    expect(post.author).toBe(john) // autor do post deve ser o objeto john
  })

  test('4️⃣ O post criado deve ser adicionado ao array de posts do autor', () => {
    expect(john.post.length).toBe(1)
    expect(john.post[0].title).toBe('Título 1')
  })

  test('5️⃣ Deve adicionar comentários corretamente no post', () => {
    const post = john.post[0]
    post.addComment('Winston', 'Que legal!')
    post.addComment('Frankie', 'Você de novo por aqui.')

    expect(post.comment.length).toBe(2)
    expect(post.comment[0].author).toBe('Winston')
    expect(post.comment[0].content).toBe('Que legal!')
    expect(post.comment[1].author).toBe('Frankie')
    expect(post.comment[1].content).toBe('Você de novo por aqui.')
  })

  test('6️⃣ Cada comentário deve ser instância da classe Comment', () => {
    const post = john.post[0]
    expect(post.comment[0] instanceof Comment).toBe(true)
    expect(post.comment[1] instanceof Comment).toBe(true)
  })

})
