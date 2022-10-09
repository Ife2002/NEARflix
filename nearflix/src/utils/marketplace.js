import { v4 as uuid4 } from "uuid";
import { parseNearAmount } from "near-api-js/lib/utils/format";

const GAS = 100000000000000;

export function saveMovie(movie) {
  movie.id = uuid4();
  movie.price = parseNearAmount(movie.price + "");
  return window.contract.setMovie({ movie }); 
}

export function getMovies() {
  return window.contract.getMovies(); 
}

export async function buyMovie({ id, price }) {
  await window.contract.buyMovie({ movieId: id }, GAS, price); 
}
