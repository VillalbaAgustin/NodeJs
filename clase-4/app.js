import express, { json } from "express";
import cors from "cors";

const PORT = process.env.PORT ?? 3000;

const app = express();
app.use(json());

app.use(
  cors({
    origin: (origin, callback) => {
      const ACCEPTED_ORIGINS = [
        "http://localhost:8080",
        "http://localhost:3000",
        "https://movies.com",
        "https://midu.dev",
      ];

      if (ACCEPTED_ORIGINS.includes(origin)) {
        return callback(null, true);
      }

      if (!origin) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
  })
);

app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.json({ message: "Hola mundo" });
});

app.get("/movies");

// Buscamos pelicula por ID
app.get("/movies/:id");

app.post("/movies");

app.delete("/movies/:id");

app.patch("/movies/:id");

app.listen(PORT, (req, res) => {
  console.log(`Server listening con port: http://localhost:${PORT}`);
});
