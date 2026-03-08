/**
 * Runner de Exercícios
 * Execute este arquivo para rodar todos os exercícios disponíveis
 * 
 * Uso:
 * npx tsx src/runner.ts
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function runExercise(filePath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const process = spawn("tsx", [filePath], {
      cwd: path.join(__dirname, ".."),
      stdio: "inherit",
    });

    process.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Exercício falhou com código: ${code}`));
      }
    });
  });
}

async function findExercises(dir: string): Promise<string[]> {
  const exercises: string[] = [];

  function walkDir(currentPath: string) {
    const files = fs.readdirSync(currentPath);

    files
      .sort()
      .forEach((file) => {
        const fullPath = path.join(currentPath, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          walkDir(fullPath);
        } else if (file.endsWith(".ts") && !file.startsWith("_")) {
          exercises.push(fullPath);
        }
      });
  }

  walkDir(dir);
  return exercises;
}

async function main() {
  const exercisesDir = path.join(__dirname, "exercises");

  console.log("🚀 Iniciando runner de exercícios...\n");

  try {
    const exercises = await findExercises(exercisesDir);

    if (exercises.length === 0) {
      console.log("❌ Nenhum exercício encontrado");
      return;
    }

    console.log(`📚 ${exercises.length} exercício(s) encontrado(s)\n`);

    for (const exercise of exercises) {
      const relativePath = path.relative(
        path.join(__dirname, ".."),
        exercise
      );
      console.log(`\n${"=".repeat(60)}`);
      console.log(`▶️  Executando: ${relativePath}`);
      console.log(`${"=".repeat(60)}\n`);

      try {
        await runExercise(exercise);
      } catch (error) {
        console.error(`❌ Erro ao executar ${relativePath}:`, error);
      }
    }

    console.log(`\n${"=".repeat(60)}`);
    console.log("✅ Todos os exercícios foram executados!");
    console.log(`${"=".repeat(60)}\n`);
  } catch (error) {
    console.error("❌ Erro:", error);
    process.exit(1);
  }
}

main().catch(console.error);
