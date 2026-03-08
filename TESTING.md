# 🧪 Framework de Testes - Guia Completo

Este projeto inclui um **framework de testes minimalista e integrado**, sem dependências externas. Perfeito para aprender TDD (Test-Driven Development).

## 📖 Como Usar

### 1. Importar o Test Framework

```typescript
import { test } from "../../test-framework";
```

### 2. Estrutura Básica

```typescript
test.describe("Nome do Teste", () => {
  test.it("descrição do teste", () => {
    // seu código de teste aqui
  });
});

test.run();
```

### 3. Assertions Disponíveis

#### `test.Assert.equal(actual, expected, message?)`
Valida igualdade de valores primitivos.

```typescript
test.it("deve somar dois números", () => {
  test.Assert.equal(somaDosDois(5, 3), 8);
  test.Assert.equal(somaDosDois(-5, 3), -2);
});
```

#### `test.Assert.deepEqual(actual, expected, message?)`
Valida igualdade profunda de objetos e arrays.

```typescript
test.it("deve ordenar array corretamente", () => {
  const resultado = bubbleSort([3, 1, 2]);
  test.Assert.deepEqual(resultado, [1, 2, 3]);
});
```

#### `test.Assert.true(value, message?)`
Valida se o valor é `true`.

```typescript
test.it("deve retornar true para números pares", () => {
  test.Assert.true(ehPar(4));
});
```

#### `test.Assert.false(value, message?)`
Valida se o valor é `false`.

```typescript
test.it("deve retornar false para números ímpares", () => {
  test.Assert.false(ehPar(3));
});
```

#### `test.Assert.throws(callback, message?)`
Valida se a função lança um erro.

```typescript
test.it("deve lançar erro para array vazio", () => {
  test.Assert.throws(() => encontrarMaximo([]));
});
```

## 📚 Exemplos Práticos

### Exemplo 1: Teste Simples

```typescript
import { test } from "../../test-framework";

function somaDosDois(a: number, b: number): number {
  return a + b;
}

test.describe("Soma", () => {
  test.it("5 + 3 = 8", () => {
    test.Assert.equal(somaDosDois(5, 3), 8);
  });

  test.it("deve funcionar com negativos", () => {
    test.Assert.equal(somaDosDois(-5, 3), -2);
  });
});

test.run();
```

### Exemplo 2: Teste com Arrays

```typescript
import { test } from "../../test-framework";

function bubbleSort(array: number[]): number[] {
  // implementação...
  return array;
}

test.describe("Bubble Sort", () => {
  test.it("deve ordenar array desordenado", () => {
    const resultado = bubbleSort([3, 1, 2]);
    test.Assert.deepEqual(resultado, [1, 2, 3]);
  });

  test.it("não deve modificar array original", () => {
    const arr = [3, 1, 2];
    const original = [...arr];
    bubbleSort(arr);
    test.Assert.deepEqual(arr, original);
  });
});

test.run();
```

### Exemplo 3: Testes Aninhados

```typescript
test.describe("Operações Matemáticas", () => {
  test.describe("Paridade", () => {
    test.it("deve reconhecer números pares", () => {
      test.Assert.true(ehPar(4));
    });

    test.it("deve reconhecer números ímpares", () => {
      test.Assert.false(ehPar(3));
    });
  });

  test.describe("Fatorial", () => {
    test.it("0! = 1", () => {
      test.Assert.equal(fatorial(0), 1);
    });

    test.it("5! = 120", () => {
      test.Assert.equal(fatorial(5), 120);
    });
  });
});

test.run();
```

### Exemplo 4: Tratamento de Erros

```typescript
test.describe("Validação de Entrada", () => {
  test.it("deve lançar erro para entrada inválida", () => {
    test.Assert.throws(() => {
      processarDados(null);
    });
  });

  test.it("deve retornar resultado para entrada válida", () => {
    const resultado = processarDados([1, 2, 3]);
    test.Assert.equal(resultado, 6);
  });
});

test.run();
```

## 🎯 Boas Práticas

### 1. Organize com `describe` e `it`
```typescript
test.describe("Função Principal", () => {
  test.describe("Caso de Erro", () => {
    test.it("deve falhar com entrada nula", () => {
      // teste
    });
  });

  test.describe("Caso Válido", () => {
    test.it("deve retornar resultado correto", () => {
      // teste
    });
  });
});
```

### 2. Teste Casos Extremos
```typescript
test.describe("Busca Linear", () => {
  test.it("deve encontrar no início", () => {});
  test.it("deve encontrar no meio", () => {});
  test.it("deve encontrar no final", () => {});
  test.it("deve retornar -1 se não encontrar", () => {});
  test.it("deve funcionar com array vazio", () => {});
});
```

### 3. Use Mensagens Descritivas
```typescript
test.it("deve somar dois números específicos corretamente", () => {
  const resultado = somaDosDois(5, 3);
  test.Assert.equal(resultado, 8, "5 + 3 deveria ser 8");
});
```

### 4. Uma Asserção por Teste (Idealizado)
```typescript
// ✅ Bom
test.it("deve somar 5 + 3", () => {
  test.Assert.equal(somaDosDois(5, 3), 8);
});

// ❌ Evitar
test.it("deve fazer operações matemáticas", () => {
  test.Assert.equal(somaDosDois(5, 3), 8);
  test.Assert.equal(somaDosDois(10, 20), 30);
  test.Assert.equal(subtracao(10, 5), 5);
});
```

## 🏃 Executando Testes

### Todos os testes
```bash
npm run test
```

### Por categoria
```bash
npm run test:basic    # apenas 01-basico/
npm run test:arrays   # apenas 02-arrays/
npm run test:strings  # apenas 03-strings/
```

### Um teste específico
```bash
npx tsx src/exercises/01-basico/01-soma.test.ts
```

## 📊 Saída do Test Runner

```
🧪 Executando Testes

======================================================================

📋 Soma de Dois Números
----------------------------------------------------------------------
✅ deve somar dois números positivos
✅ deve somar números negativos
✅ deve somar decimais

======================================================================

📊 Resultados: 3 ✅  0 ❌  (Total: 3)
```

Se houver erros:
```
❌ deve somar dois números positivos
   └─ Esperado 8, mas foi 7
```

## 💡 Dicas

1. **Comece com testes** - Escreva o teste antes do código (TDD)
2. **Um caso de teste = uma coisa** - Não teste múltiplas coisas no mesmo `it`
3. **Organize logicamente** - Use `describe` para agrupar testes relacionados
4. **Teste casos extremos** - Não apenas casos felizes
5. **Mensagens claras** - Descreva o que está sendo testado

## 📝 Checklist para Novos Testes

- [ ] Arquivo `.test.ts` criado na mesma pasta do exercício
- [ ] Framework importado corretamente
- [ ] `test.run()` chamado no final
- [ ] Testes cobrem casos normais
- [ ] Testes cobrem casos extremos
- [ ] Testes cobrem casos de erro
- [ ] Descrições são claras e em português
- [ ] Código mantém tipagem TypeScript

---

**Happy Testing! 🚀**
