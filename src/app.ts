import express from "express";

export const app = express();

app.use(express.json());

const livros = [
  {
    id: 1,
    titulo: "O Senhor dos Anéis",
  },
  {
    id: 2,
    titulo: "As Crônicas de Gelo e Fogo",
  },
];

app.get("/", (req, res) => {
  res.status(200).send("Bem vindo ao meu servidor");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
  const { id } = req.body;
  const livro = buscaLivro(parseInt(req.params.id));
  res.json(livros[livro]);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro criado com sucesso");
});

app.put("/livros/:id", (req, res) => {
  const { id } = req.body;
  const livro = buscaLivro(parseInt(req.params.id));
  livros[livro].titulo = req.body.titulo;
  res.status(200).send("Livro atualizado com sucesso");
  res.json(livros[livro]);
});

app.delete("/livros/:id", (req, res) => {
  const { id } = req.body;
  const livro = buscaLivro(parseInt(req.params.id));
  livros.splice(livro, 1);
  res.status(200).send(`Livro ${id} removido com sucesso`);
});

function buscaLivro(id: number) {
  return livros.findIndex((livro) => livro.id == id);
}
