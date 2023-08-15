const z = require("zod");

const movieSchema = z.object({
  title: z.string({
    invalid_type_error: "Movie title must be a string",
    required_error: "Movie title is required.",
  }),
  year: z.number().int().positive(),
  director: z.string(),
  duration: z.number().int().positive(),
  rate: z.number().min(0).max(10, { message: "The max rate is 10" }),
  poster: z.string().url({ message: "Poster must be a calid URL" }),
  genre: z.array(
    z.enum([
      "Action",
      "Adventure",
      "Crime",
      "Comedy",
      "Drama",
      "Fantasy",
      "Horror",
      "Thriller",
      "Sci-Fi",
    ]),
    {
      required_error: "Movie genre is required.",
      invalid_type_error: "Movie genre must be an array of enum Genre",
    }
  ),
});

const validateMovie = (object) => {
  return movieSchema.safeParse(object)
}

module.exports = {
  validateMovie,
}