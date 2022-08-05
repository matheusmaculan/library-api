import { app } from "./src/app";
const port = process.env.PORT || 4000; // ou pega a porta de produção ou fixa 4200

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
