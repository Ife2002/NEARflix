import { PersistentUnorderedMap, u128, context } from "near-sdk-as";

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
        const product = new Movie();
        product.id = payload.id;
        product.name = payload.name;
        product.overview = payload.overview;
        product.image = payload.image;
        product.price = payload.price;
        product.owner = context.sender;
        return product;
    }
    public incrementSoldAmount(): void {
        this.sold = this.sold + 1;
    }
}

export const listedMovies = new PersistentUnorderedMap<string, Movie>("LISTED_MOVIES");