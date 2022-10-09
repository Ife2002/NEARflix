import { Movie, listedMovies } from './model';
import { ContractPromiseBatch, context } from 'near-sdk-as';

export function setMovie(movie: Movie): void {
    let savedMovie = listedMovies.get(movie.id);
    if (savedMovie !== null) {
        throw new Error(`a movie with ${movie.id} already exists`);
    }
    listedMovies.set(movie.id, Movie.fromPayload(movie));
}

export function getMovie(id: string): Movie | null {
    return listedMovies.get(id);
}

export function getMovies(): Movie[] {
    return listedMovies.values();
}

export function buyMovie(movieId: string): void {
    const movie = getMovie(movieId);
    if (movie == null) {
        throw new Error("movie not found");
    }
    if (movie.price.toString() != context.attachedDeposit.toString()) {
        throw new Error("attached deposit should equal to the product's price");
    }
    ContractPromiseBatch.create(movie.owner).transfer(context.attachedDeposit);
    movie.incrementSoldAmount();
    listedMovies.set(movie.id, movie);
  }