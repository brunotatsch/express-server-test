import { app } from './app'

const url = process.env.BASE_URL || "localhost";
const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log("Server started on", `http://${url}:${port}`);
});
