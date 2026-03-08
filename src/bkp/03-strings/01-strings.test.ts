/**
 * Testes Unitários: Strings (Palíndromos, Vogais, Anagramas)
 */

import { test } from "../../test-framework";

function ehPalindromo(str: string): boolean {
  const processada = str
    .toLowerCase()
    .replace(/\s/g, "")
    .replace(/[^a-z0-9]/g, "");

  return processada === processada.split("").reverse().join("");
}

function contarVogais(str: string): number {
  const vogais = str.match(/[aeiouáéíóúãõâêô]/gi);
  return vogais ? vogais.length : 0;
}

function saoAnagramas(str1: string, str2: string): boolean {
  const normalizar = (s: string) =>
    s
      .toLowerCase()
      .replace(/\s/g, "")
      .split("")
      .sort()
      .join("");

  return normalizar(str1) === normalizar(str2);
}

test.describe("Operações com Strings", () => {
  test.describe("Verificar Palíndromo", () => {
    test.it("deve reconhecer palíndromos simples", () => {
      test.Assert.true(ehPalindromo("arara"));
      test.Assert.true(ehPalindromo("aba"));
    });

    test.it("deve reconhecer palíndromos complexos com pontuação", () => {
      test.Assert.true(ehPalindromo("A man, a plan, a canal: Panama"));
    });

    test.it("deve reconhecer palíndromo de uma letra", () => {
      test.Assert.true(ehPalindromo("a"));
    });

    test.it("deve reconhecer strings vazias como palíndromos", () => {
      test.Assert.true(ehPalindromo(""));
    });

    test.it("não deve reconhecer não-palíndromos", () => {
      test.Assert.false(ehPalindromo("hello"));
      test.Assert.false(ehPalindromo("typescript"));
    });

    test.it("deve ignorar maiúsculas", () => {
      test.Assert.true(ehPalindromo("ABA"));
      test.Assert.true(ehPalindromo("RaCeCaR"));
    });

    test.it("deve ignorar espaços", () => {
      test.Assert.true(ehPalindromo("a b a"));
    });
  });

  test.describe("Contar Vogais", () => {
    test.it("deve contar vogais em strings simples", () => {
      test.Assert.equal(contarVogais("hello"), 2); // e, o
      test.Assert.equal(contarVogais("aei"), 3);
    });

    test.it("deve contar vogais acentuadas", () => {
      test.Assert.equal(contarVogais("café"), 2); // a, é
      test.Assert.equal(contarVogais("açúcar"), 2); // a, ú
    });

    test.it("deve contar 0 vogais em strings sem vogais", () => {
      test.Assert.equal(contarVogais("xyz"), 0);
      test.Assert.equal(contarVogais("bcdfg"), 0);
    });

    test.it("deve retornar 0 para string vazia", () => {
      test.Assert.equal(contarVogais(""), 0);
    });

    test.it("deve contar vogais maiúsculas também", () => {
      test.Assert.equal(contarVogais("HELLO"), 2);
      test.Assert.equal(contarVogais("AEI"), 3);
    });

    test.it("deve contar vogais em strings com números", () => {
      test.Assert.equal(contarVogais("a1e2i3"), 3);
    });

    test.it("deve contar corretamente em algoritmo", () => {
      test.Assert.equal(contarVogais("algoritmo"), 4); // a, o, i, o
    });
  });

  test.describe("Verificar Anagramas", () => {
    test.it("deve reconhecer anagramas simples", () => {
      test.Assert.true(saoAnagramas("listen", "silent"));
      test.Assert.true(saoAnagramas("abc", "cab"));
    });

    test.it("deve ignorar espaços", () => {
      test.Assert.true(saoAnagramas("the eyes", "they see"));
    });

    test.it("deve ignorar maiúsculas", () => {
      test.Assert.true(saoAnagramas("LISTEN", "silent"));
      test.Assert.true(saoAnagramas("ABC", "cba"));
    });

    test.it("não deve reconhecer não-anagramas", () => {
      test.Assert.false(saoAnagramas("hello", "world"));
      test.Assert.false(saoAnagramas("abc", "def"));
    });

    test.it("deve reconhecer strings vazias como anagramas", () => {
      test.Assert.true(saoAnagramas("", ""));
    });

    test.it("deve reconhecer mesma string como anagrama", () => {
      test.Assert.true(saoAnagramas("test", "test"));
    });

    test.it("deve reconhecer anagramas com diferentes comprimentos", () => {
      test.Assert.false(saoAnagramas("abc", "abcd"));
    });

    test.it("deve ignorar números e caracteres especiais", () => {
      test.Assert.true(saoAnagramas("a1b2c", "c2b1a"));
    });
  });
});

test.run();
