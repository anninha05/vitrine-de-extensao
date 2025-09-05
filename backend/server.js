const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// pra listar todos os projetos
app.get('/projetos', (req, res) => {
  db.all("SELECT * FROM projetos", [], (err, rows) => {
    if (err) {
      res.status(500).json({ erro: err.message });
      return;
    }
    res.json(rows);
  });
});

// buscar pelo id 
app.get('/projetos/:id', (req, res) => {
  db.get("SELECT * FROM projetos WHERE id = ?", [req.params.id], (err, row) => {
    if (err) {
      res.status(500).json({ erro: err.message });
      return;
    }
    res.json(row || { erro: "Projeto não encontrado" });
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
