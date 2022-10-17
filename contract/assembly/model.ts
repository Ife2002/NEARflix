import { PersistentUnorderedMap,logging,  u128, context, ContractPromiseBatch, Value } from "near-sdk-as";

export type AccountId = string;
export type Amnt = u128;
let movieMap = new PersistentUnorderedMap<string, Movie[]>("u");
export const ONE_NEAR = u128.from("1000000000000000000000000");


@nearBindgen
export class Movie {
    id: string;
    name: string;
    overview: string;
    image: string;
    price: u128;
    owner: string;
    sold: u32;

    public static fromPayload(payload: Movie): Movie {
        const movie = new Movie();
        movie.id = payload.id;
        movie.name = payload.name;
        movie.overview = payload.overview;
        movie.image = payload.image;
        movie.price = payload.price;
        movie.owner = context.sender;
        return movie;
    }
    
    public  incrementSoldAmount(): void {
        this.sold = this.sold + 1;
    }
    public static buyMovie(movie: Movie, movieId : string): void {
         listedMovies.set(movie.id, movie);
         ContractPromiseBatch.create(movie.owner).transfer(context.attachedDeposit);
         movie.incrementSoldAmount();
         
      }

}
export const listedMovies = new PersistentUnorderedMap<string, Movie>("L_M");

export const boughtMovies = new PersistentUnorderedMap<string, string[]>("b")

