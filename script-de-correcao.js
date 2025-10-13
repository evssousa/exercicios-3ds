const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

// Lista de repositórios Git para clonar
// cd projeto2-sistema-de-cadastro-de-usuarios; npm i; npm test; node index.js
// cd projeto2-sistema-de-cadastro-de-usuarios; npm init -y; npm i jest -D

const repos = [
    'https://github.com/Alinemendeslopes/projeto2-sistema-de-cadastro-de-usuarios',
    'https://github.com/soraia-uchoa/projeto2-sistema-de-cadastro-de-usuarios',
    'https://github.com/Helder650/projeto2-sistema-de-cadastro-de-usuarios',
    'https://github.com/EvelinAzevedo/projeto2-sistema-de-cadastro-de-usuarios',
    'https://github.com/Felipefreitas020/projeto2-sistema-de-cadastro-de-usuarios',
];

// Diretório base onde os repositórios serão clonados
const baseDir = path.resolve(__dirname, 'projeto-2');

// Garante que o diretório base existe
if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir);
}

// Função para clonar um repositório
function cloneRepo(url) {
  return new Promise((resolve, reject) => {
    // Extrai nome de usuário e nome do repositório
    const parts = url.split('/');
    const user = parts[parts.length - 2];
    const repo = parts[parts.length - 1].replace('.git', '');

    const userDir = path.join(baseDir, user);
    const repoPath = path.join(userDir, repo);

    // Garante que a pasta do usuário existe
    if (!fs.existsSync(userDir)) {
      fs.mkdirSync(userDir);
    }

    if (fs.existsSync(repoPath)) {
      console.log(`🔁 Já clonado: ${user}/${repo}`);
      resolve();
      return;
    }

    console.log(`⬇️  Clonando ${url} em ${user}/${repo}...`);
    exec(`git clone ${url}`, { cwd: userDir }, (error, stdout, stderr) => {
      if (error) {
        console.error(`❌ Erro ao clonar ${url}:`, stderr);
        reject(error);
        return;
      }
      console.log(`✅ Clonado: ${user}/${repo}`);
      resolve();
    });
  });
}

// Executa o processo para todos os repositórios
(async () => {
  for (const url of repos) {
    try {
      await cloneRepo(url);
    } catch (err) {
      console.error(`Erro ao clonar ${url}`);
    }
  }

  console.log('🟢 Todos os repositórios foram processados.');
})();
