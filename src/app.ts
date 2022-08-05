import express from "express";

export const app = express();

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
