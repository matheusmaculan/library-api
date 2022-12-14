import { livros } from "../models/Livro";

export class livroController {
  static listarLivros = (req: any, res: any) => {
    livros
      .find()
      .populate("autor")
      .exec((err, livros) => {
        res.status(200).json(livros);
      });
  };

  static listarLivroPorId = (req: any, res: any) => {
    const id = req.params.id;

    livros
      .findById(id)
      .populate("autor", "nome")
      .exec((err: any, livros: any) => {
        if (err) {
          res
            .status(400)
            .send({ message: `${err.message} - Id do livro não localizado.` });
        } else {
          res.status(200).send(livros);
        }
      });
  };

  static cadastrarLivro = (req: any, res: any) => {
    const livro = new livros(req.body);
    livro.save((err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).json(livro.toJSON());
      }
    });
  };

  static atualizarLivro = (req: any, res: any) => {
    const id = req.params.id;

    livros.findByIdAndUpdate(id, { $set: req.body }, (err: any) => {
      if (!err) {
        res.status(200).send({ message: "Livro atualizado com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
  static excluirLivro = (req: any, res: any) => {
    const id = req.params.id;

    livros.findByIdAndDelete(id, (err: any) => {
      if (!err) {
        res.status(200).send({ message: "Livro removido com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static listarLivrosPorEditora = (req: any, res: any) => {
    const editora = req.query.editora;

    livros.find({ editora: editora }, {}, (err: any, livros: any) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - Id da editora não localizado.` });
      } else {
        res.status(200).send(livros);
      }
    });
  };
}
