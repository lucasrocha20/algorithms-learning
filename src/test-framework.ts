/**
 * Framework de Testes Simples
 * Fornece utilities para criar e executar testes unitários
 */

interface TestCase {
  name: string;
  test: () => void;
}

interface TestSuite {
  name: string;
  tests: TestCase[];
}

class TestRunner {
  private suites: TestSuite[] = [];
  private currentSuite: TestSuite | null = null;
  private passed = 0;
  private failed = 0;

  describe(suiteName: string, callback: () => void) {
    this.currentSuite = {
      name: suiteName,
      tests: [],
    };
    callback();
    this.suites.push(this.currentSuite);
    this.currentSuite = null;
  }

  it(testName: string, callback: () => void) {
    if (!this.currentSuite) {
      throw new Error("it() deve estar dentro de um describe()");
    }
    this.currentSuite.tests.push({
      name: testName,
      test: callback,
    });
  }

  Assert = {
    equal: (actual: any, expected: any, message?: string) => {
      if (actual !== expected) {
        throw new Error(
          message || `Esperado ${expected}, mas foi ${actual}`
        );
      }
    },

    deepEqual: (actual: any, expected: any, message?: string) => {
      if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        throw new Error(
          message ||
            `Esperado ${JSON.stringify(expected)}, mas foi ${JSON.stringify(actual)}`
        );
      }
    },

    true: (value: any, message?: string) => {
      if (value !== true) {
        throw new Error(message || `Esperado true, mas foi ${value}`);
      }
    },

    false: (value: any, message?: string) => {
      if (value !== false) {
        throw new Error(message || `Esperado false, mas foi ${value}`);
      }
    },

    throws: (callback: () => void, message?: string) => {
      try {
        callback();
        throw new Error(message || "Esperava que a função lançasse um erro");
      } catch (error) {
        // Erro esperado
      }
    },
  };

  async run() {
    console.log("\n🧪 Executando Testes\n");
    console.log("=".repeat(70));

    for (const suite of this.suites) {
      console.log(`\n📋 ${suite.name}`);
      console.log("-".repeat(70));

      for (const testCase of suite.tests) {
        try {
          testCase.test();
          console.log(`✅ ${testCase.name}`);
          this.passed++;
        } catch (error) {
          console.log(`❌ ${testCase.name}`);
          if (error instanceof Error) {
            console.log(`   └─ ${error.message}`);
          }
          this.failed++;
        }
      }
    }

    console.log("\n" + "=".repeat(70));
    console.log(
      `\n📊 Resultados: ${this.passed} ✅  ${this.failed} ❌  (Total: ${this.passed + this.failed})\n`
    );

    if (this.failed > 0) {
      process.exit(1);
    }
  }
}

export const test = new TestRunner();
