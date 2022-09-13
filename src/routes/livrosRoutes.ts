import express from "express";
import { livroController } from "../controllers/livrosControler";

export const router = express.Router();

router.get("/livros", livroController.listarLivros);
router.get("/livros/busca", livroController.listarLivrosPorEditora);
router.get("/livros/:id", livroController.listarLivroPorId);
router.post("/livros", livroController.cadastrarLivro);
router.put("/livros/:id", livroController.atualizarLivro);
router.delete("/livros/:id", livroController.excluirLivro);

export default router;
