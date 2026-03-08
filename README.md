# 📚 Projeto de Estudo de Algoritmos com TypeScript

Um projeto simples e organizado para praticar e estudar algoritmos usando **TypeScript** com execução em tempo real.

## 🎯 Objetivo

Criar uma base sólida em programação e algoritmos, com exercícios práticos que podem ser executados e testados instantaneamente.

## 📁 Estrutura do Projeto

```
src/
├── exercises/
│   ├── 01-basico/
│   │   ├── 01-soma.ts
│   │   ├── 02-fibonacci.ts
│   │   ├── 03-par-impar.ts
│   │   └── 04-reverter-string.ts
│   ├── 02-arrays/
│   │   ├── 01-busca-linear.ts
│   │   └── 02-bubble-sort.ts
│   └── 03-strings/
│       └── 01-strings.ts
```

## 🚀 Como Usar

### 1. Instalar Dependências

```bash
npm install
```

### 2. Executar um Exercício Específico

Execute qualquer arquivo TypeScript diretamente:

```bash
npm run run src/exercises/01-basico/01-soma.ts
```

### 3. Assistir Alterações (Watch Mode)

Para desenvolvimento com recarregamento automático:

```bash
npm run dev
```

### 4. Executar Testes Unitários

Este projeto inclui um **framework de testes integrado** sem dependências externas.

#### Rodar todos os testes:
```bash
npm run test:basic      # Testes dos exercícios básicos
npm run test:arrays     # Testes dos exercícios de arrays
npm run test:strings    # Testes dos exercícios de strings
```

#### Exemplo de teste:
```typescript
/**
 * Testes Unitários: Soma de Dois Números
 */

import { test } from "../../test-framework";

function somaDosDois(a: number, b: number): number {
  return a + b;
}

test.describe("Soma de Dois Números", () => {
  test.it("deve somar dois números positivos", () => {
    const resultado = somaDosDois(5, 3);
    test.Assert.equal(resultado, 8);
  });

  test.it("deve somar números negativos", () => {
    test.Assert.equal(somaDosDois(-5, 3), -2);
  });
});

test.run();
```

#### Assertions Disponíveis:
- `test.Assert.equal(actual, expected)` - Valida igualdade
- `test.Assert.deepEqual(actual, expected)` - Valida objetos/arrays
- `test.Assert.true(value)` - Valida se é true
- `test.Assert.false(value)` - Valida se é false
- `test.Assert.throws(callback)` - Valida se lança erro

### 5. Criar um Novo Exercício

1. Crie um novo arquivo na pasta apropriada (ou crie uma nova)
2. Siga o padrão dos arquivos existentes:
   - Adicione comentários explicando o objetivo
   - Implemente a função
   - Adicione testes com `console.log()`

**Exemplo:**

```typescript
/**
 * Exercício 05: Seu Exercício
 * Objetivo: Descrever o que o exercício faz
 */

function meuExercicio(): void {
  // seu código aqui
}

// Testes
console.log("=== Exercício: Seu Exercício ===");
console.log(meuExercicio());
```

## 📝 Exercícios Disponíveis

### Básico (01-basico/)
- ✅ `01-soma.ts` - Soma de dois números (com testes)
- ✅ `02-fibonacci.ts` - Sequência de Fibonacci com memoização (com testes)
- ✅ `03-par-impar.ts` - Validar números par/ímpar (com testes)
- ✅ `04-reverter-string.ts` - Inverter strings (com testes)
- ✅ `05-fatorial.ts` - Fatorial recursivo e iterativo (com testes)

### Arrays (02-arrays/)
- ✅ `01-busca-linear.ts` - Encontrar elemento em array (com testes)
- ✅ `02-max-min.ts` - Encontrar máximo e mínimo (com testes)
- ✅ `02-bubble-sort.ts` - Algoritmo de ordenação Bubble Sort (com testes)
- ✅ `03-selection-sort.ts` - Algoritmo de ordenação Selection Sort (com testes)

### Strings (03-strings/)
- ✅ `01-strings.ts` - Palíndromos, contar vogais, anagramas (com testes)

## 💡 Próximos Passos

Adicione mais exercícios nas categorias existentes ou crie novas:

- 04-recursao/
- 05-buscas/ (busca binária)
- 06-ordenacao/ (quick sort, merge sort)
- 07-estruturas-dados/ (stack, queue, linked list)
- 08-grafos/
- 09-programacao-dinamica/

## 🛠 Stack Utilizado

- **TypeScript** - Tipagem estática e segurança
- **tsx** - Execução de TypeScript em tempo real sem compilação
- **Node.js** - Runtime JavaScript

## 📚 Dicas de Estudo

1. **Execute frequentemente** - depois de cada alteração, execute o exercício
2. **Adicione testes** - mais testes significam mais confiança
3. **Compare soluções** - experimente diferentes abordagens
4. **Documente bem** - bons comentários ajudam no aprendizado futuro
5. **Organize por tópico** - mantenha exercícios relacionados juntos

---

**Feliz codificação! 🚀**
