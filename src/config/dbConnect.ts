import mongoose from "mongoose";
mongoose.connect(
  "mongodb+srv://m_maculan:maculan175@apilivros.lag18hx.mongodb.net/api_livros"
);
const db = mongoose.connection;

export default db;
