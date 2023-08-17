import express, { json } from "express";
import { randomUUID } from "node:crypto";
import cors from "cors";
import fs from 'node:fs';

// import movies from "./movies.json" assert {type: 'json'};
// import movies from "./movies.json" wirh {type: 'json'};   En el futuro será así
import { validateMovie, validatePartialMovie } from "./schemas/movies.js";

// Como leer un json en ESModule
// const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'));

import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const movies = require('./movies.json')

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

// Todos los recursos que sean MOVIES se identifican con '/movies'
app.get("/movies", (req, res) => {
  const { genre } = req.query;
  if (genre) {
    const filteredMovies = movies.filter((movie) =>
      // movie.genre.includes(genre)      //! Es key sensitive (para este caso nos es indiferente)
      movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
    );
    return res.json(filteredMovies);
  }

  res.json(movies);
});

// Buscamos pelicula por ID
app.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movie = movies.find((movie) => movie.id === id);

  if (movie) {
    return res.json(movie);
  }

  res.status(404).json({ message: "Movie not found" });
});

app.post("/movies", (req, res) => {
  // const { title, year, director, duration, poster, genre, rate } = req.body;

  const result = validateMovie(req.body);

  if (result.error) {
    res.status(400).json({ error: JSON.parse(result.error.message) });
  }

  const newMovie = {
    id: randomUUID(), // Crea un id versión 4
    ...result.data, // Es correcto desestructurar pq ya paso por la validaciones !== ...data.body
  };

  movies.push(newMovie);

  res.status(201).json(newMovie);
});


app.delete('/movies/:id', (req, res) => {
  const { id } = req.params
  const movieIndex = movies.findIndex(movie => movie.id === id)

  if (movieIndex === -1) {
    return res.status(404).json({ message: 'Movie not found' })
  }

  movies.splice(movieIndex, 1)

  return res.json({ message: 'Movie deleted' })
})


app.patch("/movies/:id", (req, res) => {
  const result = validatePartialMovie(req.body);

  if (!result.success) {
    return res.status(400).json({ error: JSON.parse(result.error.message) });
  }

  const { id } = req.params;
  const movieIndex = movies.findIndex((movie) => movie.id === id);

  if (movieIndex === -1) {
    return res.status(404).json({ message: "Movie not found" });
  }

  const updateMovie = {
    ...movies[movieIndex],
    ...result.data,
  };

  movies[movieIndex] = updateMovie;

  return res.json(updateMovie);
});

app.listen(PORT, (req, res) => {
  console.log(`Server listening con port: http://localhost:${PORT}`);
});
