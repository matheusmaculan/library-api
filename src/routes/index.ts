import express from "express";
import autores from "./autoresRoutes";
import livros from "./livrosRoutes";

export const routes = (app: express.Application) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Curso de Node");
  });

  app.use(express.json(), livros, autores);
};
