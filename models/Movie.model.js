class TopMovies {
  constructor(movie) {
    this.title =movie.title
    this.overview = movie.overview
    this.average_votes = movie.vote_average
    this.total_votes = movie.vote_count
    this.image_url = movie.poster_path
    this.popularity = movie.popularity
    this.released_on = movie.release_date
  }
}

module.exports = TopMovies;