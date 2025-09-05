const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS projetos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT,
    tipo_bolsa TEXT,
    grau TEXT,
    carga_horas INTEGER,
    vagas INTEGER,
    tipo_perfil TEXT,
    publico_alvo TEXT,
    coordenador TEXT,
    centro TEXT,
    laboratorio TEXT,
    valor_unitario REAL,
    valor_total REAL,
    resumo TEXT,
    eixo_tematico TEXT
  )`);
});

module.exports = db;
