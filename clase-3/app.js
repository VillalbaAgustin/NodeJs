const express = require("express");
const crypto = require("node:crypto");
const movies = require("./movies.json");
const { validateMovie } = require("./schemas/movies ");

const PORT = process.env.PORT ?? 3000;

const app = express();
app.use(express.json());
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
    id: crypto.randomUUID(), // Crea un id versión 4
    ...result.data,          // Es correcto desestructurar pq ya paso por la validaciones
  };

  movies.push(newMovie);

  res.status(201).json(newMovie);
});

app.listen(PORT, (req, res) => {
  console.log(`Server listening con port: http://localhost:${PORT}`);
});
