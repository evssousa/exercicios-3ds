# 📝 Atividade rápida

## Criar Controller para Desconto

Você deve:

1. Criar um `descontoService`
    - Se valor > 100 → aplicar 10% de desconto
    - Caso contrário → retornar valor normal
2. Criar `descontoController`
    - Recebe `valor` via `req.body`
    - Retorna:

```jsx
{
	valorFinal: resultadoComDesconto
}
```

1. Criar teste para:
    - Service
    - Controller