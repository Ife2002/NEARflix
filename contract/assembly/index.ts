import { Movie, listedMovies, boughtMovies, AccountId } from './model';
import { ContractPromiseBatch, context, u128, Value, logging } from 'near-sdk-as';

export const ONE_NEAR = u128.from("1000000000000000000000000");

export function setMovie(movie: Movie): void {
    let allMovies = listedMovies.get(movie.id);
    if (allMovies !== null) {
        logging.log(`a movie with ${movie.id} already exists`);
    }
    listedMovies.set(movie.id, Movie.fromPayload(movie));
}

export function getMovie(id: string): Movie | null {
    return listedMovies.get(id);
}

export function getMovies(): Movie[] {
    return listedMovies.values();
}

export function getMovieListByAccountId(): string[] | null {
   return boughtMovies.get(context.sender)
}

export function saveMovie(movieId: string): void {
    const movies = getMovie(movieId)
    if (movies == null) {
        throw new Error("movie not found");
      }
      assert(movies.owner.toString() == context.sender.toString(),"You cannot view others movies");
      const save = boughtMovies.get(context.sender);
      if(save != null){
        assert(save.indexOf(movieId) == -1,"You have already bought this movie");
        save.push(movieId);
        boughtMovies.set(context.sender,save);
      }else{
        boughtMovies.set(context.sender,[movieId]);
      }
}

export function buyMovie(movieId : string) : void {
    const movie = getMovie(movieId);
    if (movie == null) {
        throw new Error("movie not found");
    }
    if (movie.price.toString() != context.attachedDeposit.toString()) {
        throw new Error("attached deposit should equal to the movie's price");
    }

     Movie.buyMovie (movie, movieId)
     saveMovie(movieId)
}

{/*
  --accountId=myaccount.testnet
*/}